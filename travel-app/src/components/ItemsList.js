import { useState } from "react";
import Item from "./Item";
import "./styles/item.css";

function ItemsList({ items, onToggleItem, onDeleteItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;

    case "explanation":
      sortedItems = items
        .slice()
        .sort((a, b) => a.backpack.localeCompare(b.backpack));
      break;

    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;

    default:
      sortedItems = items;
      break;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="explanation">Sort by explanation</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default ItemsList;
