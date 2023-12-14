
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="columns is-multiline">
      {products.map((prod) => (
        <div key={prod.id} className="column is-one-third">
          <Item {...prod} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
