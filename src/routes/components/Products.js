import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styles from "../appRoutes.module.css";

const Products = () => {
  const [data, setData] = useState([
    { id: 1, name: "Product One", price: 100 },
    { id: 2, name: "Product Two", price: 200 },
    { id: 3, name: "Product Three", price: 300 },
    { id: 4, name: "Product Four", price: 400 },
    { id: 5, name: "Product Five", price: 500 },
  ]);

  return (
    <div>
      <h1>Products</h1>
      <ul className={styles.ul}>
        {/* {data.map((item) => (
          <li key={item.id} className={styles.li}>
            <Link
              className={styles.link}
              to={`/products/${item.id}`}
              state={item}
            >
              {item.name}
            </Link>
          </li>
        ))} */}
        {/* NavLink */}
        {data.map((item) => (
          <li key={item.id} className={styles.li}>
            <NavLink
              className={styles.link}
              style={({ isActive }) => ({
                color: isActive ? "red" : "goldenrod",
                fontWeight: isActive ? "bold" : "normal",
              })}
              to={`/products/${item.id}`}
              state={item}
            >
              {({ isActive }) =>
                isActive ? "Active " + item.name : "Inactive " + item.name
              }
              {/* {item.name} */}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet context={data} />
    </div>
  );
};

export default Products;
