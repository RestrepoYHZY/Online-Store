import React, { Fragment, useEffect, useState } from "react";
import FormInvoice from "../components/Invoice/FormInvoice/FormInvoice";
import CardTotal from "../components/Invoice/CardTotal";

import { Stack, Typography, Container, Box, Button } from "@mui/material";
import TableInvoice from "../components/Invoice/TableInvoice/TableInvoice";
import TableDataInvoice from "../components/Invoice/TableInvoice/TableDataInvoice";
import { useInvoice } from "../context/InvoiceContext";
import { v4 as uuidV4 } from "uuid";
import { postInvoices } from "../actions/invoice.action";

const NewInvoce = () => {
  const [total, setTotal] = useState(0);

  const { shoppingCart, purchaser, purchaseDate } = useInvoice();

  const getTotalPrice = () => {
    const subTotals = shoppingCart.map((item) => item?.subTotal);

    if (subTotals.length > 0) {
      const result = subTotals.reduce((amount, item) => amount + item, 0);
      setTotal(result);
    }
  };
  const saveInvoice = async () =>{
    const dataToSend = {
      code: uuidV4(),
      customer: purchaser,
      date: purchaseDate,
      total: total,
      products:[...shoppingCart]
    };

    try{
      const data = await postInvoices(dataToSend)
      console.log(data);
    }catch(error){
      console.log(error);
    };
  };
  useEffect(() => {
    getTotalPrice();
  }, [shoppingCart]);

  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h5">New Invoice</Typography>
        <FormInvoice />
        <Box>
          {shoppingCart.length > 0 && (
            <Stack
              style={{ height: "100%" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Fragment>
                <CardTotal
                  date={purchaseDate}
                  customer={purchaser}
                  total={total}
                />
                <TableInvoice data={shoppingCart} />
              </Fragment>
              <Typography textAlign="end">
                <Button variant="contained" onClick={saveInvoice}>
                  Save Invoice
                </Button>
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
    </>
  );
};

export default NewInvoce;
