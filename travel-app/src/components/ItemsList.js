import Item from "./Item";

function ItemsList({ items, onToggleItem, onDeleteItem }) {
  console.log(items);
  return (
    <div className="list">
      <ul>
        {items.map(item => (
          <Item
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;