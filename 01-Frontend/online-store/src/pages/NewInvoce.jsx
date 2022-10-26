import React, { Fragment, useEffect, useState } from "react";
import FormInvoice from "../components/Invoice/FormInvoice/FormInvoice";
import CardTotal from "../components/Invoice/CardTotal";

import { Stack, Typography, Container } from "@mui/material";
import TableInvoice from "../components/Invoice/TableInvoice/TableInvoice";
import TableDataInvoice from "../components/Invoice/TableInvoice/TableDataInvoice";
import { useInvoice } from "../context/InvoiceContext";


const NewInvoce = () => {
 
  const [total, setTotal] = useState(0);

  const { shoppingCart, purchaser, purchaseDate } = useInvoice();

  const getTotalPrice =()=>{
    const subTotals = shoppingCart.map(item=>item?.subTotal);

    if(subTotals.length >0){
      const result = subTotals.reduce((amount, item)=>amount+item,0);
      setTotal(result);
    };
  };

  useEffect(() => {
    getTotalPrice();
  }, [shoppingCart]);

  return (<>
    <Container style={{margin: "2em" , marginTop: "5em"}}>
    <Typography variant="h5" >New Invoice</Typography>
      <Stack spacing={ 4 }>
        <FormInvoice />
        {shoppingCart.length >0 &&
          <Fragment>
            <CardTotal 
              date={ purchaseDate }
              customer={ purchaser }
              total={ total }
            />
            <TableInvoice data={ shoppingCart }/> 
          </Fragment>
        }
      </Stack>
    </Container>
    </>)
};

export default NewInvoce;
