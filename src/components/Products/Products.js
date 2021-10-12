
import Product from '../Product/Product';
import './Products.css';


function Products({productsL}) {
  return (
    <section className="Products">
     {productsL.map((product) => (
   < Product title={product.title}
              key={product.id} 
              price={product.price} 
              description={product.description}
              category={product.category}
              image={product.image}
              rating={product.rating}
              rate={product.rate}
              count={product.count}/>
     ))}
    </section>
  );
     }
  export default Products;