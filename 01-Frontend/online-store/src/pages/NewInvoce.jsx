import React, { Fragment, useState } from "react";
import FormInvoice from "../components/Invoice/FormInvoice";
import CardTotal from "../components/Invoice/CardTotal";
import { Stack, Typography, Container } from "@mui/material";
import TableInvoice from "../components/Invoice/TableInvoice";
import TableDataInvoice from "../components/Invoice/TableDataInvoice";




const NewInvoce = () => {
  const [carrito, setCarrito] = useState([]);
  const [date, setDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [total, setTotal] = useState(0);

  return (<>
    <Container style={{margin:"3rem 0"}}>
      <Stack spacing={ 5}>
        <FormInvoice 
          carrito={ carrito }
          setCarrito={ setCarrito }
          setDate={ setDate }
          setCustomer={ setCustomer }
          setTotal={ setTotal }
        />
        {carrito.length >=1 &&
          <Fragment>
            <CardTotal 
              date={ date }
              customer={ customer }
              total={ total }
            />
            <TableInvoice>
              {  carrito.map(item=>(
                <TableDataInvoice 
                  key={ item.id }
                  id={ item.id }
                  product={ item.product }
                  price={ item.price }
                  amount={ item.amount }
                  subtotal={ item.subtotal }
                  carrito={ carrito }
                  setCarrito={ setCarrito }
                />
              )) }
            </TableInvoice>
          </Fragment>
        }
      </Stack>
    </Container>
    </>)
};

export default NewInvoce;
