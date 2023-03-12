import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const color = "danger";
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}> Button was clicked! </Alert>
      )}
      <div>
        <Button color={color} onClick={() => setShowAlert(true)}>
          Raise Alert
        </Button>
      </div>
    </>
  );
}

export default App;
