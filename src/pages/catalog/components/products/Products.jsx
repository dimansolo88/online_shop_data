import React, { useEffect } from "react";
import ProductCard from "./ProductCard/productcard";
import styles from "../catalog.module.css";

const Products = ({ products, getProduct }) => {
  useEffect(() => {
    getProduct();
  }, []);
  console.log("1");

  return (
    <div className={styles.projectWraper}>
      {products.map(p => (
        <ProductCard
          key={p.id}
          id={p.id}
          title={p.title}
          size={p.size}
          price={p.price}
          images={p.images}
        />
      ))}
    </div>
  );
};

export default Products;
