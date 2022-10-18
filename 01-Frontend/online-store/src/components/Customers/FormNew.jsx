import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, InputLabel, Stack } from "@mui/material";
import * as Yup from "yup";

const FormProvider = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
     .required("Sorry, this is required")
     .trim(),
     lastName: Yup.string()
     .required("Sorry, this is required")
     .trim(),
     document: Yup.string()
     .required("Sorry, this is required")
     .trim(),
     phoneNumber: Yup.string()
     .required("Sorry, this is required")
     .trim(),
     email: Yup.string()
     .required("Sorry, this is required")
     .email("This email is not valid")
     .trim()
  });
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          document: "",
          phoneNumber: "",
          email: "",
        }}
        validationSchema={ validationSchema }
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Stack spacing={2}>
                <Stack>
                  <InputLabel htmlFor="name">Name Customer</InputLabel>
                  <Field type="text" name="name" />
                  <ErrorMessage name="name"/>  
                </Stack>
                <Stack>
                  <InputLabel htmlFor="lastName">Last Name </InputLabel>
                  <Field type="text" name="lastName" />
                  <ErrorMessage name="lastName"/>  
                </Stack>
            
                <Stack>
                  <InputLabel htmlFor="document">Document</InputLabel>
                  <Field type="text" name="document" />
                  <ErrorMessage name="document"/>  
                </Stack>
                <Stack>
                  <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                  <Field type="text" name="phoneNumber" />
                  <ErrorMessage name="phoneNumber"/>  
                </Stack>
                <Stack>
                  <InputLabel htmlFor="email">Mail</InputLabel>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email"/>  
                </Stack>
                < div align='right'>
                 <Button type="submit" variant="contained" color="primary">
                   Add Customer
                 </Button>
               </ div>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormProvider;
