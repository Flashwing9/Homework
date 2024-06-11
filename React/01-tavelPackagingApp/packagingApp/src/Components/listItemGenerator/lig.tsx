import "./lig.css";
// import Item from "../../data/items.model";

// interface ItemListProps {
//   item: Item;
// }

function ListItemGenerator(/* { item }: ItemListProps */) {
  return (
    <div className="allItems">
      <ul className="packedItems">
        <dt>Packed Items</dt>
        {/* <li>{item.itemName}</li> */}
        <li>Jeans</li>
        <li>Shorts</li>
        <li>Flip Flops</li>
      </ul>
      <ul className="unpackedItems">
        <dt>Unpacked Items</dt>
        <li>Sunglasses</li>
        <li>Sunscreen</li>
        <li>Pocket Knife</li>
        <li>Shoes</li>
      </ul>
    </div>
  );
}

export default ListItemGenerator;
