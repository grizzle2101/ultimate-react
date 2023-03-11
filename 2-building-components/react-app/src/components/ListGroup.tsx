function ListGroup() {
  var items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  items = [];

  //method 1 - as a constant
  const message = items.length === 0 ? <p>No Items Found</p> : null;

  //method 2 - as a function
  const getMessage = () => {
    return items.length === 0 ? <p>No Items Found</p> : null;
  };

  //method 3 - using coparison operators
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
