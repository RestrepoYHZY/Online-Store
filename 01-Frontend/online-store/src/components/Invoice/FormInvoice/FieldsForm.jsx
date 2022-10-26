import { Grid  } from "@mui/material";
import { Stack } from "@mui/system";


const FieldsForm = ({ tools }) => {
  return (
    <>
      
      <Grid item xs={10}>
        <Grid container spacing ={ 2 }>
          <Grid item xs={4}>
            <Stack>
            <label htmlFor="date">Date: </label>
            <input type="date" name="date"  onChange={ e=>tools.setDate(e.target.value) } value={ tools.date }/>
            </Stack>
          </Grid>
          <Grid item xs={4}>
          <Stack>
            <label htmlFor="customer">Customer: </label>
            <select  name="customer" onChange={ e=>tools.setCustomer(e.target.value) } value={ tools.customer }>
              <option value="">Choose customer</option>
              { tools.customers.map(item=>(
              <option key={ item.id } value={item.id }> { `${ item.name } ${ item.lastName }` }</option>
              ))}

            </select>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
            <label htmlFor="product">Product: </label>
            <select  name="product" onChange={ e=>tools.getAProduct(e.target.value) } value={ tools.nameProduct }>
              <option value="">Choose Product</option>
              { tools.products.map(item=>(
              <option key={ item.id } value={item.id }> { item.nameProduct }</option>
              ))}

            </select>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
            <label htmlFor="price">Price: </label>
            <input name="price" type="number" value={ tools.price } disabled/>
            </Stack>
          </Grid>
          <Grid item xs={4}>
          <Stack>
            <label htmlFor="amount">Amount: </label>
            <input name="amount" type="number" onChange={ e=>tools.multiplyPrice(e.target.value) } value={ tools.amount } min={ 0 }/>
            </Stack>
          </Grid>
          <Grid item xs={4}>
          <Stack>
            <label htmlFor="subTotal">SubTotal: </label>
            <input type="number" name="subTotal"  value={ tools.subTotal }disabled/>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FieldsForm;
