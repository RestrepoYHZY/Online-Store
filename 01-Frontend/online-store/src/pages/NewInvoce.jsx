import React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";

const validationSchema = Yup.object().shape({
  date: Yup.string().required("Sorry, this is required").trim(),
  customer: Yup.string().required("Sorry, this is required ").trim(),
  product: Yup.string().required("Sorry, this is required").trim(),
});

const NewInvoce = () => {
  return (
    <>
      <Formik
        initialValues={{
          date: "",
          customer: "",
          product: "",
          price: "",
          amount: "",
          subtotal: "",
        }}
         validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, values, errors, touched, handleBlur }) => (
          <Form>
            <div>
              <Field
                type="date"
                name="date"
                value={values.date}
                onChange={ handleChange}
              />
              <select name="customer"  value={values.customer} id="customer" onChange={handleChange}>
                <option value="">Choose Customer</option>
                <option value="juan">juan</option>
                <option value="antonio">antonio</option>
              </select>
              {/* <Field
                as="select"
                name="customer"
                values={values.customer}
                handlers={{
                  handleChange
              
                }}
              >
                <option value="">Choose Customer</option>
                <option value="">juan</option>
                <option value="">antonio</option>
              </Field>*/}
              <select name="product" value={values.product} id="product" onChange={handleChange}>
                <option value="">Choose Product</option>
                <option value="jalea">jalea</option>
                <option value="queso">queso</option>
              </select>
              {/* <Field as="select" name="product">
                <option value="">Choose Product</option>
                <option value="">jalea</option>
                <option value="">queso</option>
            </Field>*/}
            </div>
            <Field
              name="price"
              value={values.price}
              onChange={ handleChange}
             
            />

            <Field
              name="amount"
              value={values.amount}
              
               onChange={ handleChange}
              
            />
            <Field
              type="number"
              name="subtotal"
              value={values.subtotal}
              onChange={ handleChange}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default NewInvoce;
