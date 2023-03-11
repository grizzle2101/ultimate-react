import { MouseEvent } from "react";

function ListGroup() {
  var items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  const handleClick = (event: MouseEvent) => console.log("clicked - ", event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
