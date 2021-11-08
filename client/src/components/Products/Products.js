
import Product from '../Product/Product';
import './Products.css';
//import { useState } from "react";



 function Products(props) {

  return (
    <section className="Products">
     {props.products.map((product) => (
   < Product title={product.title}
   _id={product.id}
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
    //  function Products({productsL,productsL1}) {

    //   return (
    //     <section className="Products">
    //      {productsL.map((product) => (
    //    < Product title={product.title}
    //               key={product.id} 
    //               price={product.price} 
    //               description={product.description}
    //               category={product.category}
    //               image={product.image}
    //               rating={product.rating}
    //               rate={product.rate}
    //               count={product.count}/>
    //      ))}
    //  {productsL1.map((product) => (
    //    < Product title={product.title}
    //               key={product.id} 
    //               price={product.price} 
    //               description={product.description}
    //               category={product.category}
    //               image={product.image}
    //               rating={product.rating}
    //               rate={product.rate}
    //               count={product.count}/>
    //      ))}
    //     </section>
    //   );
    //      }
 
  export default Products;