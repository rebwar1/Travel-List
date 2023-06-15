import React, { useState } from "react";
import "./styles/forms.css";

function Forms({ onAddItems }) {
  const [backpack, setBackpack] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = { backpack, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setBackpack("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={e => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={backpack}
        onChange={e => setBackpack(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Forms;
