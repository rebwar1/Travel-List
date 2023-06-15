import React, { useState } from "react";
import Header from "./components/Header";
import Forms from "./components/Forms";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }
  console.log(items);
  return (
    <div className="App">
      <Header />
      <Forms onAddItems={handleAddItems} />
    </div>
  );
}

export default App;
