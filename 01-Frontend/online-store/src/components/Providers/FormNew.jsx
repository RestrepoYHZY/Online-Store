import { Button, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  provider: Yup.string().required("Sorry, this is required").trim(),
  nit: Yup.string().required("Sorry, this is required").trim(),
  address: Yup.string().required("Sorry, this is required").trim(),
  phoneNumber: Yup.string().required("Sorry, this is required").trim(),
});

const FormNew = () => {
  return (
    <>
      <Formik
        initialValues={{
          provider: "",
          nit: "",
          address: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Stack spacing={2}>
              <Stack>
                <InputLabel htmlFor="provider">Provider</InputLabel>
                <Field type="text" name="provider" />
                <ErrorMessage name="provider" />
              </Stack>

              <Stack>
                <InputLabel htmlFor="nit">Nit</InputLabel>
                <Field type="string" name="nit" />
                <ErrorMessage name="nit" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="address">Address</InputLabel>
                <Field type="string" name="address" />
                <ErrorMessage name="address" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="phoneNumber">Phone Number </InputLabel>
                <Field type="string" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" />
              </Stack>
              <div align="right">
                <Button type="submit" variant="contained" color="primary">
                  Add Provider
                </Button>
              </div>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormNew;
