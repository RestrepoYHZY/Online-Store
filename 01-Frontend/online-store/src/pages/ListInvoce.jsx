import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CardInvoice from "../components/ListInvoice/TablesInvoices/CardInvoice";



const ListInvoce = () => {
const navigation = useNavigate();
  return (
    <>
      <Box style={{ margin: "2em", marginTop: "5em" }}>
        <Typography variant="h5">List Invoice</Typography>
        <Box align="right" style={{ marginBottom: "1em"}}>
          <Button variant="contained" onClick={() => navigation("/NewInvoce")}>
            New Invoice
          </Button>
        </Box>
        <CardInvoice/>
      
      </Box>
    </>
  );
};

export default ListInvoce;
