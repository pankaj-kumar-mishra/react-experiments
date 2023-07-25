import React from "react";
import styles from "./appRoutes.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home, About, Products, ProductDetails, NotFound } from "./components";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className={styles.routes}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="/about">
              About
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="/products">
              Products
            </Link>
          </li>
        </ul>
      </div>
      {/* <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/products" Component={Products}>
          <Route path=":id" Component={ProductDetails} />
        </Route>

        <Route path="*" Component={NotFound} />
      </Routes> */}

      <Routes>
        <Route path="/">
          <Route index Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/products" Component={Products}>
            <Route path=":id" Component={ProductDetails} />
          </Route>

          <Route path="*" Component={NotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
