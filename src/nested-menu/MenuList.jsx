import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ data = [] }) => {
  return (
    <ul>
      {data?.length > 0 ? (
        <>
          {data.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </>
      ) : null}
    </ul>
  );
};

export default MenuList;
