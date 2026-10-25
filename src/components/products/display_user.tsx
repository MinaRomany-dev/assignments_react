import ProductCard from './product_card';
import { products } from './data';
import Counter from '../count/counter';
import { useState } from 'react';

function DisplayUser() {
  const [productss, setproducts] = useState(products);
  
  return (
    <div>
      <div className="all">
        {productss.map((element) => (
           <ProductCard 
             key={element.id} 
             id={element.id} 
             name={element.name} 
             price={element.price}  
             products={productss} 
             setproducts={setproducts} 
           />
        ))}
      </div>
      <div className="counter-wrapper">
        <Counter lenght={productss.length}/>
      </div>
    </div>
  );
}

export default DisplayUser;