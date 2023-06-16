function Item({ item, onToggleItem, onDeleteItem }) {
  return (
    <div>
      <li key={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => {
            onToggleItem(item.id);
          }}
        />

        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.backpack}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </div>
  );
}

export default Item;
