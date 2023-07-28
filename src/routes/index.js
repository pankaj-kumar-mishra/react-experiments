import React from "react";
import styles from "./appRoutes.module.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRoutes,
} from "react-router-dom";
import { Home, About, Products, ProductDetails, NotFound } from "./components";

const AppRoutes = () => {
  //   const routes = useRoutes([
  //     {
  //       path: "/",
  //       children: [
  //         { index: true, Component: Home },
  //         { path: "/about", Component: About },
  //         {
  //           path: "/products",
  //           Component: Products,
  //           children: [{ path: ":id", Component: ProductDetails }],
  //         },
  //         { path: "*", Component: NotFound },
  //       ],
  //     },
  //   ]);
  // NOTE  TWO
  //   const routes = useRoutes([
  //     {
  //       path: "/",
  //       children: [
  //         { index: true, element: <Home /> },
  //         { path: "/about", element: <About /> },
  //         {
  //           path: "/products",
  //           element: <Products />,
  //           children: [{ path: ":id", element: <ProductDetails /> }],
  //         },
  //         { path: "*", element: <NotFound /> },
  //       ],
  //     },
  //   ]);

  return (
    <>
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

      {/* Way One */}
      {/* <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/products" Component={Products}>
          <Route path=":id" Component={ProductDetails} />
        </Route>

        <Route path="*" Component={NotFound} />
      </Routes> */}

      {/* Way Two */}
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

      {/* Way Three */}
      {/* {routes} */}
    </>
  );
};

export default AppRoutes;
