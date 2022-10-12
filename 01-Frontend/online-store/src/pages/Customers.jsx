import { Box, Typography } from "@mui/material";
import React from "react";
import ModalNew from "../components/Customers/ModalNew";
import TableCustomers from "../components/Customers/TableCustomers";

const Customers = () => {
  return (
    <>
      <Box style={{ margin: "2em", marginTop: "5em" }}>
        <Typography variant="h5">Customers</Typography>
        <ModalNew/>
        <TableCustomers/>
      </Box>
    </>
  );
};

export default Customers;
