import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {products.map((products) => (
        <Product title={products.title} price={products.basePrice}
          {...products[0]}
        />
      ))}
    </section>
  );
};

Products.propTypes = {

}
export default Products;