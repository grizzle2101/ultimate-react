import ListGroup from "./components/ListGroup";

function App() {
  var items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log("item - ", item);
  };

  return (
    <div>
      <ListGroup
        onSelectItem={handleSelectItem}
        items={items}
        heading="Cities"
      />
    </div>
  );
}

export default App;
