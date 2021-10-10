//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';




function App() {
  return (
  //   <div className="App">
  //      <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header> 
  // </div>
    <div title="products">
    <Header/>
   <Products/>
   </div>
 );
}
// ReactDOM.render(<App />, document.getElementById("app"));
export default App;
