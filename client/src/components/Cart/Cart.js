import { useContext } from "react";
import myContext from "../../MyContext/MyContext";
import Product from "../Product/Product";

function Cart() {
    const [productsInCart, setProductsInCart] = useContext(myContext);

    return (
        <div>
            <h2>My Cart</h2>
            {productsInCart.map((product) => (
                <Product key={product.id} image={product.image} title={product.title} price={product.price}></Product>
            ))}
        </div>
    )
}

export default Cart;