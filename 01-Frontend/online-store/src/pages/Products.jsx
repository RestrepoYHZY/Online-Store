import { Box, Typography } from "@mui/material";
import React from "react";
import TableProducts from "../components/Products/AllTableProducts/TableProducts";
import ModalProduct from "../components/Products/ModalProduct";


const Products = () => {
  return (
    <>
      <Box style={{ margin: "2em" , marginTop: "5em"}}>
        <Typography variant="h5" >Products</Typography>
        <ModalProduct />
        <TableProducts />
      </Box>
    </>
  );
};

export default Products;
 