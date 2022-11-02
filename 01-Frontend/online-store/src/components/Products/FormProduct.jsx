import { Button, CircularProgress, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { getProductById, postProducts, putProducts } from "../../actions/products.action";
import { useEntities } from "../../context/EntitiesContext";
import { ErrorMsg } from "../../ValidationForm/ErrorMsg";

const validationSchema = Yup.object().shape({
  nameProduct: Yup.string().required("Sorry, this is required").trim(),
  price: Yup.string().required("Sorry, this is required").trim(),
  amount: Yup.string().required("Sorry, this is required").trim(),
  provider: Yup.string().required("Sorry, this is required").trim(),
});

const FormProduct = ({id:idProduct}) => {
  const { providers, getProductsData, setSuccess, setError, loading, setLoading} = useEntities();

  const [products, setProduct]=useState({
    id:0,
    nameProduct: "",
    price: "",
    amount: "",
    expirationDate: "",
    provider: ""
  });


  const sendProducts = async (data) => {
    setLoading(true);
    try {
      const result = await postProducts(data);
       console.log(result);
       setSuccess(true);
      setLoading(false);
      getProductsData();
    } catch (error) {
      setSuccess(true);
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };



  const updateProducts = async (id, data) => {
    setLoading(true);
    try {
      const result = await putProducts(id, data);
       console.log(result);
       setSuccess(true);
      setLoading(false);
      getProductsData();
    } catch (error) {
      setSuccess(true);
      setError(true);
      setLoading(false);
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
    {loading ? (
        <center>
          <CircularProgress color="primary" />
        </center>
      ) : (
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
              <Field 
                as={ TextField } 
                label="Name Product"
                type="text" 
                name="nameProduct" 
                size="small"
                />
                <ErrorMessage name="nameProduct" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
              </Stack>
              
              <Stack>
              <Field 
                as={ TextField } 
                label="Price"
                type="number" 
                name="price" 
                size="small"
                />
                <ErrorMessage name="price" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
              </Stack>
              <Stack>
              <Field 
                as={ TextField } 
                label="Amount"
                type="number" 
                name="amount" 
                size="small"
                />
                <ErrorMessage name="amount" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
              </Stack>
              <Stack>
              <InputLabel htmlFor="expirationDate">Expiration Date</InputLabel>
                <Field 
                as={ TextField } 
                type="date" 
                name="expirationDate" 
                size="small"
                />
              </Stack>
              <Stack>
                <Field 
                as={ TextField } 
                label="Providers"
                select
                type="date" 
                name="provider" 
                size="small"
                >

                  {providers.map((item) => (
                    <MenuItem key={item.id}  value={item.id}> 
                      {item.provider}
                    </MenuItem>
                  ))}
              </Field>
                <ErrorMessage name="provider" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
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
      )}
    </>
  );
};

export default FormProduct;
