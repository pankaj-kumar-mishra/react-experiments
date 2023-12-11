import { useEffect, useRef } from "react";

const useWhyDidYouUpdate = (name, props) => {
  const prevPropsRef = useRef();

  useEffect(() => {
    if (prevPropsRef.current) {
      const keys = Object.keys({ ...prevPropsRef.current, ...props });
      const whyUpdated = {};

      keys.forEach((key) => {
        if (
          typeof prevPropsRef.current[key] === "object" &&
          typeof props[key] === "object"
        ) {
          //   if (
          //     JSON.stringify(prevPropsRef.current[key]) !==
          //     JSON.stringify(props[key])
          //   ) {
          //     whyUpdated[key] = {
          //       from: prevPropsRef.current[key],
          //       to: props[key],
          //     };
          //   }
          //   For DeepEqual checking
          if (
            JSON.stringify(
              prevPropsRef.current[key],
              Object.keys(prevPropsRef.current[key]).sort()
            ) !== JSON.stringify(props[key], Object.keys(props[key]).sort())
          ) {
            whyUpdated[key] = {
              from: prevPropsRef.current[key],
              to: props[key],
            };
          }
        } else {
          if (prevPropsRef[key] !== props[key]) {
            whyUpdated[key] = {
              from: prevPropsRef.current[key],
              to: props[key],
            };
          }
        }
      });

      if (Object.keys(whyUpdated).length > 0) {
        console.log(
          "Component ",
          name,
          "caused re-render because of : ",
          whyUpdated
        );
      }
    }

    prevPropsRef.current = props;
  }, [props, name]);
};

export default useWhyDidYouUpdate;
