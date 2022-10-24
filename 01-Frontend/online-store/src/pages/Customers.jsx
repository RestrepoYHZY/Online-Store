import { Box, Typography } from "@mui/material";
import React from "react";
import TableCustomers from "../components/Customers/AllTablesCustomers/TableCustomers";
import ModalCustomer from "../components/Customers/ModalCustomer";




const Customers = () => {
  return (
    <>
      <Box style={{ margin: "2em", marginTop: "5em" }}>
        <Typography variant="h5">Customers</Typography>
        <ModalCustomer/>
        <TableCustomers/>
      </Box>
    </>
  );
};

export default Customers;
