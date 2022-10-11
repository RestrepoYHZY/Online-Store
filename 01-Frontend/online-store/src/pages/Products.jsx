import { Box, Typography } from "@mui/material";
import React from "react";
import ModalNew from "../components/Products/ModalNew";
import TableProducts from "../components/Products/TableProducts";

const Products = () => {
  return (
    <>
      <Box style={{ margin: "2em" , marginTop: "5em"}}>
        <Typography variant="h5" >Products</Typography>

        <ModalNew />
        <TableProducts />
      </Box>
    </>
  );
};

export default Products;
