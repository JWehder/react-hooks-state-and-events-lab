import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkLightMode, setMode] = useState(true)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  function handleButtonClick() {
    setMode((darkLightMode) => !darkLightMode);
  }

  return (
    <div className= {darkLightMode ? "App light" : "App dark"}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {handleButtonClick}>{darkLightMode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
