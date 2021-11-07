
import Cart from "../components/Cart/Cart";
import Header from "../components/Header/Header";
//import MyContext from "../MyContext/MyContext";
import { useEffect, useState } from "react";
import Products from "../components/Products/Products";

function Home() {
  const [myProductsList, setMyProductsList] = useState([]);
  const [myAllProductsList, setMyAllProductsList] = useState([]);
 const [categories, setCategories] = useState([]);
 const [productsFilteredPrice, setProductsFilteredPrice] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((res) => {
                return res.json();
      })
      .then((myProductsList)=> {
        setMyProductsList(myProductsList);
        setMyAllProductsList(myProductsList);
        let categories = myProductsList.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);
        setCategories(categories);
        });
  }, []);
  const categorySelected = (category) =>{
    if(category === '/') {
      setMyProductsList(myAllProductsList);
    } else {
      let filteredProducts = myAllProductsList.filter((product) => product.category === category);
      setMyProductsList(filteredProducts);
      setCategories(categories);
    }
  }
  const FilterPrice = (price) => {
    let filteredProducts = myAllProductsList.filter((product) => product.price >= price[0] && product.price <= price[1]);
    setMyProductsList(filteredProducts);
}
return (
    <div className="App">
  
      <Header categories={categories} onSelectCategory={categorySelected} onPrice={FilterPrice}/>
     <Cart/>
      <Products products={myProductsList}/>
    </div>
   

  );
}

export default Home;