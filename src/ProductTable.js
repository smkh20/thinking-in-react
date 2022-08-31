import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = (props) => {
  const products = props.products;
  const search = props.search;
  const inStock = props.inStock;

  const categories = [];

  products.forEach((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });

  const showProducts = {};

  categories.forEach((category) => {
    showProducts[category] = products.filter((product) => {
      return (
        product.category === category &&
        (inStock ? product.stocked === true : true) &&
        (search ? product.name.toLowerCase().includes(search.toLowerCase()) : true)
      );
    });
  });

  return (
    <div className="flexColCenter">
      <div className="twoCol">
        <p>name</p>
        <p>price</p>
      </div>
      {categories.map((category) => {
        if (showProducts[category].length) {
          return (
            <div key={category} className="flexColCenter">
              <ProductCategoryRow category={category} />
              {showProducts[category].map((product) => {
                return (
                  <div key={product.name} className="twoCol">
                    <ProductRow product={product} />
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductTable;
