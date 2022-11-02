import React, { Fragment, useEffect, useState } from "react";
import FormInvoice from "../components/Invoice/FormInvoice/FormInvoice";
import CardTotal from "../components/Invoice/CardTotal";

import { Stack, Typography, Container, Box, Button } from "@mui/material";
import TableInvoice from "../components/Invoice/TableInvoice/TableInvoice";

import { useInvoice } from "../context/InvoiceContext";

import CreateInvoiceModal from "../components/Invoice/CreateInvoice/CreateInvoiceModal";

const NewInvoce = () => {
  const [total, setTotal] = useState(0);

  const { shoppingCart, purchaser, purchaseDate } = useInvoice();

  const getTotalPrice = () => {
    const subTotals = shoppingCart?.map((item) => item?.subTotal);

    if (subTotals.length > 0) {
      const result = subTotals.reduce((amount, item) => amount + item, 0);
      setTotal(result);
    }
  };
  
  useEffect(() => {
    getTotalPrice();
  }, [shoppingCart]);

  return (
    <>
      <Stack spacing={4}  style={{ margin: "2em" , marginTop: "5em"}}>
        <Typography variant="h5">New Invoice</Typography>
          <FormInvoice />
        <Box align="center">
          {shoppingCart?.length > 0 && (
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
              <CreateInvoiceModal
              total={ total }/>
            </Stack>
          )}
        </Box>
      </Stack>
    </>
  );
};

export default NewInvoce;
