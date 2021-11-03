//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import ButtonS from './components/ButtonS';
// import Header from './components/Header/Header';
// import Products from './components/Products/Products';
//import { useEffect, useState } from "react";
import MyContext from "./MyContext/MyContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductDetails from './views/ProductDetails';
import Home from './views/Home';




function App() {
  const [productsInCart, setProductsInCart] = useState([]);
  return (
 <Router>
       <MyContext.Provider value={[productsInCart, setProductsInCart]}>
         <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/Products">ProductDetails</Link>
            </li> */}
          </ul>
        </nav>

        <Switch>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MyContext.Provider>
 </Router>

 


 );
}

// ReactDOM.render(<App />, document.getElementById("app"));
export default App;

