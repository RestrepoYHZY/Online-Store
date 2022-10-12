import React from "react";
import FormInvoice from "../components/Invoice/FormInvoice";
import CardTotal from "../components/Invoice/CardTotal";
import { Stack, Typography, Container } from "@mui/material";
import TableInvoice from "../components/Invoice/TableInvoice";




const NewInvoce = () => {
  return (
    <>
    <Container>
    <Typography variant="h5">New Invoice</Typography>
    <Stack spacing={8}>
    <FormInvoice/>
     <CardTotal/>   
     <TableInvoice/>
      </Stack>
    </Container>
  
      
    </>
  );
};

export default NewInvoce;
