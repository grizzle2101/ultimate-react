import ListGroup from "./components/ListGroup";
import "./App.css";
import { BsFillCalendarCheckFill } from "react-icons/bs";

function App() {
  var items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log("item - ", item);
  };

  return (
    <div>
      <BsFillCalendarCheckFill color="red" size="40"></BsFillCalendarCheckFill>
      <ListGroup
        onSelectItem={handleSelectItem}
        items={items}
        heading="Cities"
      />
    </div>
  );
}

export default App;
