import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = () => {
  const products = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
  ];

  const [search, setSearch] = useState({ item: "", inStock: false });

  const changeValueHandler = (newSearch) => {
    setSearch({ ...search, item: newSearch });
  };

  const changeStockHandler = (newSearch) => {
    setSearch({ ...search, inStock: newSearch });
  };

  return (
    <div className="container flexColCenter">
      <SearchBar search={search.item} inStock={search.inStock} changeValue={changeValueHandler} changeStock={changeStockHandler} />
      <ProductTable search={search.item} inStock={search.inStock} products={products} />
    </div>
  );
};

export default FilterableProductTable;
