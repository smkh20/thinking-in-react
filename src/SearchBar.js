import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <input type="text" value={props.search} onChange={(e) => props.changeValue(e.target.value)} />
      <br />
      <input type="checkbox" id="stock" checked={props.inStock} onChange={(e) => props.changeStock(e.target.checked)} />
      <label htmlFor="stock">only show products in stock</label>
    </div>
  );
};

export default SearchBar;
