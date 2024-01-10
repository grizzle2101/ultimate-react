import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//create validtion object
const schema = z.object({
  name: z.string().min(3),
  age: z
    .number({ invalid_type_error: "Age Field is required." })
    .min(18, "Age must be at least 18."), //custom error message.
});

//create interface from Z
type formData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  console.log("errors - ", errors);

  const onSubmit = (data: FieldValues) => console.log("sending - ", data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          ></input>
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button className="btn btn-primary" type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
