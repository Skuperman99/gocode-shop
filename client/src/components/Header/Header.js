import './Header.css';
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
function Header({categories, onSelectCategory,onPrice}) {
  const [value, setValue] = React.useState([1, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onPrice(value[0], value[1]);
  };
  return (
<nav className="product-filter">
    <h1>My Store</h1>
////////
    <div className="sort">
<div className="collection-sort">
  <label>Filter by:</label>
  <select onChange={(e)=>onSelectCategory(e.target.value)}>
                        <option value="/">Select</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category} >{category}</option>
                        ))}

  </select>
</div>

<Box sx={{ width: 200 ,padding: '0 20px;'}}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000}
                />
                {value[0]} - {value[1]}
            </Box>

<div className="collection-sort">
  <label>Sort by:</label>
  <select>
    <option value="/">Featured</option>
    <option value="/">Best Selling</option>
    <option value="/">Alphabetically, A-Z</option>
    <option value="/">Alphabetically, Z-A</option>
    <option value="/">Price, low to high</option>
    <option value="/">Price, high to low</option>
    <option value="/">Date, new to old</option>
    <option value="/">Date, old to new</option>
  </select>
</div>
</div>
</nav>
);
  }
export default Header;