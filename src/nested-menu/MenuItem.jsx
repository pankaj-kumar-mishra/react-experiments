import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item = {} }) => {
  const [showChildren, setShowChildren] = useState({});
  const show = showChildren[item.label];

  const handleShowChildren = () => {
    setShowChildren((prev) => ({
      ...prev,
      [item.label]: !show,
    }));
  };

  return (
    <>
      <li>
        <button onClick={() => handleShowChildren()}>
          {item.label} {item.children?.length > 0 && !show && <span>+</span>}
          {item.children?.length > 0 && show && <span>-</span>}
        </button>
      </li>
      {item.children?.length > 0 && show ? (
        <MenuList data={item.children} />
      ) : null}
    </>
  );
};

export default MenuItem;

// const MenuItem = ({ item }) => {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <li onClick={() => setShow((prev) => !prev)}>
//         {item.label} {item.children?.length > 0 && !show && <span>+</span>}
//         {item.children?.length > 0 && show && <span>-</span>}
//       </li>
//       {item.children?.length > 0 && show ? (
//         <MenuList data={item.children} />
//       ) : null}
//     </>
//   );
// };

// export default MenuItem;
