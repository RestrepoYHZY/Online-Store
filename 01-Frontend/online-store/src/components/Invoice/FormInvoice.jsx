import { Button, Grid, InputLabel } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  date: Yup.string().required("Sorry, this is required").trim(),
  customer: Yup.string().required("Sorry, this is required ").trim(),
  product: Yup.string().required("Sorry, this is required").trim(),
});
const Form = () => {
  return (
    <>
      <Formik
        initialValues={{
          date: "",
          customer: "",
          product: "",
          price: "",
          amount: "",
          subtotal: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Grid item container>
              <Grid  item xs={10}>
                <Grid item container>
                  <Grid item xs={4}>
                    <InputLabel htmlFor="date">Date: </InputLabel>
                    <Field type="date" name="date"  />
                    <ErrorMessage name="date"  />
                  </Grid>
                  <Grid item xs={4}>
                    <InputLabel htmlFor="customer">Customer: </InputLabel>
                    <Field as="select" name="customer" >
                      <option value="">Choose Customer</option>
                      <option value="juan">juan</option>
                      <option value="antonio">antonio</option>
                    </Field>
                    <ErrorMessage name="customer"  />
                  </Grid>
                  <Grid item xs={4}>
                    <InputLabel htmlFor="product">Products: </InputLabel>
                    <Field as="select" name="product" >
                      <option value="">Choose Product</option>
                      <option value="jale">jalea</option>
                      <option value="queso">queso</option>
                    </Field>
                    <ErrorMessage name="product"  />
                  </Grid>
                  <Grid item xs={4}>
                    <InputLabel htmlFor="price">Price: </InputLabel>
                    <Field
                      name="price"
                    type="number"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <InputLabel htmlFor="amount">Amount: </InputLabel>
                    <Field
                      name="amount"
                    type="number"
                    />
                  </Grid>
                  
                  <Grid item xs={4}>
                    <InputLabel htmlFor="subtotal">Subtotal: </InputLabel>
                    <Field
                      type="number"
                      name="subtotal"
                     
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1.5} alignSelf="center" justifySelf="center">
                <Button type="submit" variant="contained">Submit</Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Form;
