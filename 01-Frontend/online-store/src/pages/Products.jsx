import { Typography } from "@mui/material";
import React from "react";
import ModalNew from "../components/Products/ModalNew";
import TableProducts from "../components/Products/TableProducts";

const Products = () => {
  return (
    <>
      <Typography variant="h5">Products</Typography>
      <ModalNew />
      <TableProducts />
    </>
  );
};

export default Products;
