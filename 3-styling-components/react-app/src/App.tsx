import "./App.css";
import LikeButton from "./components/LikeButton/LikeButton";

function App() {
  const dummyOnClick = () => {
    console.log("Do Nothing.");
  };

  return (
    <div>
      <LikeButton onClick={dummyOnClick}></LikeButton>
    </div>
  );
}

export default App;

/*
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
*/
