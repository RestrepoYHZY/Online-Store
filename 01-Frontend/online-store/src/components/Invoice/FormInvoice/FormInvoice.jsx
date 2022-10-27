import { Button, Grid } from '@mui/material'
import FieldsForm from './FieldsForm'
import { useInvoice } from "../../../context/InvoiceContext";
import { v4 as uuidv4} from 'uuid';
import useFormInvoice from '../../../Hooks/useFormInvoice';

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
    subTotal
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


  const {shoppingCart, setShoppingCart} = useInvoice()
  
  const handleSubmit = (e)=>{
    e.preventDefault();

    const dataToSend={
      id:uuidv4(),
      product,
      price:+price,
      amount:+amount,
      subTotal:+subTotal
    }
    setShoppingCart([...shoppingCart, dataToSend])
    console.log(dataToSend)
  }


  return (
    <>
    <form onSubmit={ handleSubmit} style={{ width:"100%" }}>
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
