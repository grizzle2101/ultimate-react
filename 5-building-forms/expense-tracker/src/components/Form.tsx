import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onAdd: (data: any) => void;
}

const schema = z.object({
  description: z.string().min(3),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, "Must be more than 0."),
  category: z.string(),
});

type formData = z.infer<typeof schema>;

const options = ["Groceries", "Education", "Entertainment"];

const Form = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log("Absolutely sending it... ", data);
    onAdd(data);
    console.log("sent..");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("description")}
            id="name"
            type="text"
            className="form-control"
          ></input>
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Category
          </label>

          <select
            {...register("category")}
            className="form-select"
            aria-label="Default select example"
          >
            {options.map((element, index) => (
              <option key={index} value={element}>
                {element}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
