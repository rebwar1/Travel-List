import React, { useState } from "react";
import Header from "./components/Header";
import Forms from "./components/Forms";
import ItemsList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }
  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <Forms onAddItems={handleAddItems} />
      <ItemsList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
      />
    </div>
  );
}

export default App;
