import Button from "./components/Button";

function App() {
  const onClick = () => {
    console.log("DA CLICK");
  };

  const color = "danger";

  return (
    <div>
      <Button color={color} onClick={onClick}>
        Data
      </Button>
    </div>
  );
}

export default App;
