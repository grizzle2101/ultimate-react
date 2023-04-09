import { FieldValues, useForm } from "react-hook-form";

interface formData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();
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
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          ></input>
          {errors.name?.type === "required" && (
            <p className="text-danger">The Name field is Required.</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">Must be 3 characters.</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
