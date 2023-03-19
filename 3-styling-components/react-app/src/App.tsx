import ListGroup from "./components/ListGroup";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  var items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log("item - ", item);
  };

  const dummyOnClick = () => {
    console.log("Do Nothing.");
  };

  return (
    <div>
      <Button color="primary" onClick={dummyOnClick}>
        {" "}
        Primary
      </Button>
      <Button color="secondary" onClick={dummyOnClick}>
        {" "}
        Secondary
      </Button>
      <Button color="danger" onClick={dummyOnClick}>
        {" "}
        Danger
      </Button>
      <ListGroup
        onSelectItem={handleSelectItem}
        items={items}
        heading="Cities"
      />
    </div>
  );
}

export default App;
