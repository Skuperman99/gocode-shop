import './Product.css';
import { useContext } from "react";
import MyContext from '../../MyContext/MyContext';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



// function Product() {
//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369" />
//       </div>
//       <div className="product-info">
//         <h5>Winter Jacket</h5>
//         <h6>$99.99</h6>
//       </div>
//     </div>
//   );
// }

// function Product(props) {
//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img src={props.image} alt="imageDescription" />
//       </div>
//       <div className="product-info">
//         <h5>{props.name}</h5>
//         <h6>{props.price}</h6>
//       </div>
//     </div>
//   );
// }

  function Product({image, title, price, id}) {
    const [productsInCart, setProductsInCart] = useContext(MyContext);
    const getAmount = () => {
      let findProduct = productsInCart.find((product) => product.id === id)
      if(findProduct) return findProduct.amount;}
  
  return (
    <div className="product-card">
      <Link to={`/Products/${id}`}>
      <div className="product-image">
        <img src={image} alt="" />
      </div>
      <div className="product-info">
      <h6>{title}</h6>
      <h6>{price}$</h6>
      </div>
      </Link>

      <div>
                <Button varient="outlined" onClick={()=>{
                    let newProductsList = [];
                    // If exist
                    let findIndex = productsInCart.findIndex((product)=> product.id === id)
                    if(findIndex > -1){ //exists
                        newProductsList = productsInCart.map((product) =>{
                            if(product.id === id) {
                                    product.amount++;
                            }
                            return product;
                        })
                    } else { // not exists
                        newProductsList = [...productsInCart, {id, title, price, image, amount: 1}]
                    }
                    console.log(111, newProductsList)
                    setProductsInCart(newProductsList)}}>+</Button>
                <span>{getAmount()}</span>
                <Button varient="contained" onClick={()=>{
                    let newProductsList = [];
                    // If exist
                    let findIndex = productsInCart.findIndex((product)=> product.id === id)
                    let isNeedDelete = false;
                    if(findIndex > -1){ //exists
                        newProductsList = productsInCart.map((product) =>{
                            if(product.id === id) {
                                if(product.amount >1)
                                    {product.amount--;}
                                    else{
                                        // delete from list
                                        isNeedDelete = true;
                                    }
                            }
                            return product;
                        })
                        if(isNeedDelete){
                            newProductsList = productsInCart.filter((product) => product.id !==id)
                        }
                    } else { // not exists
                        newProductsList = [...productsInCart]
                    }
                    setProductsInCart(newProductsList)}}>-</Button>
            </div>
        </div>
        
        
      
    
  );
}
  export default Product;