import { Button, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { getProductById, postProducts, putProducts } from "../../actions/products.action";
import { useEntities } from "../../context/EntitiesContext";

const validationSchema = Yup.object().shape({
  nameProduct: Yup.string().required("Sorry, this is required").trim(),
  price: Yup.string().required("Sorry, this is required").trim(),
  amount: Yup.string().required("Sorry, this is required").trim(),
  provider: Yup.string().required("Sorry, this is required").trim(),
});

const FormProduct = ({id:idProduct}) => {
  const { providers, getProductsData } = useEntities();

  const [products, setProduct]=useState({
    id:0,
    nameProduct: "",
    price: "",
    amount: "",
    expirationDate: "",
    provider: ""
  });


  const sendProducts = async (data) => {
    try {
      const result = await postProducts(data);
       console.log(result);
      getProductsData();
    } catch (error) {
      console.log(error);
    }
  };



  const updateProducts = async (id, data) => {
    try {
      const result = await putProducts(id, data);
       console.log(result);
      getProductsData();
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id)=>{
    try{
      const { data } = await getProductById(id)
      const { id:idElement, ...dataToSend} = data
      setProduct(dataToSend)
    }catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(idProduct){
      getProduct(idProduct);
      return
    }
    
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          id:idProduct,
          nameProduct: products.nameProduct,
          price: products.price,
          amount: products.amount,
          expirationDate:products.expirationDate,
          provider: products.provider,
        }}
        enableReinitialize
        validationSchema={validationSchema}

        onSubmit={(values) => {
          const {id, ...dataToSend}=values;

          if(idProduct){
            updateProducts(id,dataToSend);
            return
          }
          
          sendProducts(values);
          
        }}
      >
        {() => (
          <Form>
            <Stack spacing={2}>
              <Stack>
                <InputLabel htmlFor="nameProduct">Name Product</InputLabel>
                <Field type="text" name="nameProduct" />
                <ErrorMessage name="nameProduct" render={(msg) => <p>{msg}</p>} />
              </Stack>

              <Stack>
                <InputLabel htmlFor="price">Price</InputLabel>
                <Field type="number" name="price" />
                <ErrorMessage name="price" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="amount">Amount</InputLabel>
                <Field type="number" name="amount" />
                <ErrorMessage name="amount" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="expirationDate">Expiration Date</InputLabel>
                <Field type="date" name="expirationDate" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="provider">Providers</InputLabel>
                <Field as="select" name="provider">
                  <option value="">Choose a Provider</option>
                  {providers.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.provider}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="provider" />
              </Stack>
              <div align="right">
                <Button type="submit" variant="contained" color="primary">
                  Send
                </Button>
              </div>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormProduct;
