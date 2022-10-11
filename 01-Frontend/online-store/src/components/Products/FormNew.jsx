import { Box, Button, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { Field, Form, Formik } from "formik";
import React from "react";

const FormNew = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          price: "",
          amount: "",
          date: "",
          provider: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Stack>
              
            <Box>
                <InputLabel htmlFor="name">Name Product</InputLabel>
                <Field type="text" name="name" />
              </Box>
              <Box>
                <InputLabel htmlFor="price">Price</InputLabel>
                <Field type="number" name="price" />
              </Box>
              <Box>
                <InputLabel htmlFor="amount">Amount</InputLabel>
                <Field type="number" name="amount" />
              </Box>
              <Box>
                <InputLabel htmlFor="date">Date of Expiry</InputLabel>
                <Field type="date" name="date" />
              </Box>
              <Box>
                <InputLabel htmlFor="provider">Providers</InputLabel>
                <Field as="select" name="provider">
                  <option value="">Choose a Provider</option> 
                  <option value="jose">Jose </option> 
                  <option value="antonela">Antonela </option> 
                </Field>
              </Box>
              <Button type='submit' variant='contained' color='primary'>Add Product</Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormNew;
