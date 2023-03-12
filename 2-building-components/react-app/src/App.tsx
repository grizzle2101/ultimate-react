import ListGroup from "./components/ListGroup";

function App() {
  var items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
