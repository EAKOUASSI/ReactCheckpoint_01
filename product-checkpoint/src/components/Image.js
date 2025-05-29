import { React } from "react";
import product from "./product";

const Image = () => {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      style={{
        width: "100%",
        height: "13rem",
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
        cursor: "pointer"
      }}
    />
  );
};

export default Image;
