import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "../appRoutes.module.css";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.link} to="/products/1">
            Apple
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/products/2">
            Orange
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to="/products/3">
            Graph
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Products;
