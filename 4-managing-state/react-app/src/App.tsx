import { useState } from "react";
import "./App.css";
import Message from "./components/Message/Message";

function App() {
  return (
    <div>
      <Message count={2}>Test</Message>
      <Message count={2}>Test</Message>
      <Message count={2}>Test</Message>
    </div>
  );
}

export default App;
