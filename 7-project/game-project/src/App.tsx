import { useState } from "react";
import "./App.css";
import NavBar from "./componenents/NavBar";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ChakraProvider>
        <div className={darkMode ? "root dark-mode" : "root light-mode"}>
          <NavBar onToggle={toggleDarkMode}></NavBar>
          <h1>Game Project Excercise</h1>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
