import './style.css'
import { type propstype } from './data'

function ProductCard(props: propstype) {
  return (
    <div className="product-card">
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <button className="btn-danger" onClick={() => {
        const afterremove = props.products.filter((ele) => ele.id !== props.id);
        props.setproducts(afterremove);
      }}>Remove</button>
    </div>
  );
}

export default ProductCard;