import { Button, Grid } from '@mui/material'
import FieldsForm from './FieldsForm'
import { useInvoice } from "../../../context/InvoiceContext";
import { v4 as uuidv4} from 'uuid';
import useFormInvoice from '../../../Hooks/useFormInvoice';
import { useEffect } from 'react';

const FormInvoice = () => {

  const {
    date,
    setDate,
    customer,
    setCustomer,
    customers,
    products,
    getAProduct,
    multiplyPrice,
    product,
    price,
    amount,
    subTotal,
    resetForm,
    elementId,
    setElementId
  }= useFormInvoice();

  const tools={
    date,
    setDate,
    customer,
    setCustomer,
    customers,
    products,
    getAProduct,
    multiplyPrice,
    product,
    price,
    amount,
    subTotal
  };

  const editBuy=(data, dataToSend)=>{
    let modifyingCart =[...data];

    const position = shoppingCart.findIndex(item=>item.id===elementId)
    modifyingCart[position]=dataToSend;
    return modifyingCart;
  };
  

  const {shoppingCart, setShoppingCart, infoToEdit, setInfoToEdit} = useInvoice()
  
  const handleSubmit = (e)=>{
    e.preventDefault();

    const dataToSend={
      id:uuidv4(),
      product,
      price:+price,
      amount:+amount,
      subTotal:+subTotal
    }
    
    resetForm();
    // console.log(dataToSend)
  
    let newShoppingCart;
    if(infoToEdit?.id){
      newShoppingCart=editBuy(shoppingCart, dataToSend)
      setShoppingCart([...newShoppingCart])
      return
    }
    setShoppingCart([...shoppingCart, dataToSend])

    setInfoToEdit({});
    setElementId("");

  };


  return (
    <>
    <form onSubmit={ handleSubmit} style={{ width:"100", marginLeft: "4em"  }}>
      <Grid container spacing={ 4 }>
        <FieldsForm tools={ tools }/>
          <Grid item xs={ 2 } alignSelf="center" justifyContent= "center">
              <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Grid>
      </Grid>
    </form>
    </>
  )
}

export default FormInvoice
