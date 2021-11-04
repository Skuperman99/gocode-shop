import { useEffect,useState } from "react";
import { useParams } from "react-router";
import Product from "../components/Product/Product";


function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`/api/products/${id}`)

        .then((res) => res.json())
      .then((product) => {
        setProduct(product);
      });
  }, [id]);
  return (
 
 
    <div>
    <Product key={id} image={product?.image} title={product?.title} price={product?.price} id={id} category={product?.category}/>
</div>
  );
}

export default ProductDetails;
