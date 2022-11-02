import { Grid, InputLabel, Menu, MenuItem, Select, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const FieldsForm = ({ tools }) => {
  return (
    <>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack>
              <InputLabel htmlFor="date">Date: </InputLabel>
              <TextField
                type="date"
                name="date"
                size="small"
                onChange={(e) => tools.setDate(e.target.value)}
                value={tools.date}
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
            <InputLabel htmlFor="date">Customers: </InputLabel>
              <Select name="customer"   size="small"
                onChange={(e) => tools.setCustomer(e.target.value)}
                value={tools.customer}>
               
                {tools.customers.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {" "}
                    {`${item.name} ${item.lastName}`}
                  </MenuItem>
                ))}
              </Select>
             
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
              <InputLabel id="product">Product: </InputLabel>
            
              <Select
                name="product" size="small"
                onChange={(e) => tools.getAProduct(e.target.value)}
                value={tools.product}
               
              >
                
                {tools.products.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {" "}
                    {item.nameProduct}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
              <InputLabel id="price">Price: </InputLabel>
              <TextField name="price" type="number"  size="small" value={tools.price} disabled />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
              <InputLabel id="amount">Amount: </InputLabel>
              <TextField
                name="amount"
                type="number"
                size="small"
                onChange={(e) => tools.multiplyPrice(e.target.value)}
                value={tools.amount}
                min={0}
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack>
              <InputLabel htmlFor="subTotal">SubTotal: </InputLabel>
              <TextField
                type="number"
                name="subTotal"
                size="small"
                value={tools.subTotal}
                disabled
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default FieldsForm;
