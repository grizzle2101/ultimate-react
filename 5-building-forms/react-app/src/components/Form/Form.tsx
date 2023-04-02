import { FormEvent, useRef, useState } from "react";

const Form = () => {
  //create state person
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  //bind to onChange on input field.

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("person - ", person);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            id="name"
            type="text"
            className="form-control"
            value={person.name}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, age: +event.target.value })
            }
            id="age"
            type="number"
            className="form-control"
            value={person.age}
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
