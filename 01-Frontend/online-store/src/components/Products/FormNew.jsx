import { Button, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";



const validationSchema = Yup.object().shape({
  name: Yup.string()
   .required("Sorry, this is required")
   .trim(),
   price: Yup.string()
   .required("Sorry, this is required")
   .trim(),
   amount: Yup.string()
   .required("Sorry, this is required")
   .trim(),
   date: Yup.string()
   .required("Sorry, this is required")
   .trim(),
   provider: Yup.string()
   .required("Sorry, this is required")
   .trim(),

});

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

        validationSchema={ validationSchema }

        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {( ) => (
          <Form>
            <Stack spacing={2}>
                <Stack >
                  <InputLabel htmlFor="name">Name Product</InputLabel>
                  <Field 
                  type="text" 
                  name="name" 
                  />
                   <ErrorMessage name="name" render={(msg)=>(<p>{msg}</p>)}/> 
                </Stack>
                

                <Stack>
                  <InputLabel htmlFor="price">Price</InputLabel>
                  <Field type="number" name="price" />
                  <ErrorMessage name="price"/>  
                </Stack>
               <Stack>
                 <InputLabel htmlFor="amount">Amount</InputLabel>
                 <Field type="number" name="amount" />
                 <ErrorMessage name="amount"/> 
               </Stack>
                <Stack>
                  <InputLabel htmlFor="date">Date of Expiry</InputLabel>
                  <Field type="date" name="date" />
                  <ErrorMessage name="date"/> 
                </Stack>
               <Stack>
                 <InputLabel htmlFor="provider">Providers</InputLabel>
                 <Field as="select" name="provider">
                   <option value="">Choose a Provider</option>
                   <option value="jose">Jose </option>
                   <option value="antonela">Antonela </option>
                   
                 </Field>
                 <ErrorMessage name="provider"/> 
               </Stack>
               < div align='right'>
                 <Button type="submit" variant="contained" color="primary">
                   Add Product
                 </Button>
               </ div>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormNew;
