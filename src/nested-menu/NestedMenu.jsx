import React from "react";
import MenuList from "./MenuList";
import menus from "./data";

const NestedMenu = () => {
  return (
    <div>
      <h3>Nested Menu</h3>
      <MenuList data={menus} />
    </div>
  );
};

export default NestedMenu;
