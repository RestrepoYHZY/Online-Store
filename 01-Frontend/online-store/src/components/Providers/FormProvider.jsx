import { Button, CircularProgress, InputLabel, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

import * as Yup from "yup";
import { postProviders, putProviders, getProviderById } from "../../actions/providers.action";
import { useEntities } from "../../context/EntitiesContext";
import { ErrorMsg } from "../../ValidationForm/ErrorMsg";


const validationSchema = Yup.object().shape({
  provider: Yup.string().required("Sorry, this is required").trim(),
  nit: Yup.string().required("Sorry, this is required").trim(),
  indicative: Yup.string().required("Sorry, this is required").trim(),
  address: Yup.string().required("Sorry, this is required").trim(),
  phoneNumber: Yup.string().required("Sorry, this is required").trim(),
});

const FormProvider = ({ id: idProvider }) => {
  const [provider, setProvider] = useState({
    id: 0,
    provider: "",
    nit: "",
    indicative: 0,
    address: "",
    phoneNumber: 0,
  });

  const { getProvidersData, setSuccess, setError, loading, setLoading }= useEntities();

  const sendProviders = async (data) => {
    setLoading(true);
    try {
      const result = await postProviders(data);
      console.log(result);
      setSuccess(true);
      setLoading(false);
      getProvidersData();
    } catch (error) {
      setSuccess(true);
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  const updateProviders = async (id, data) => {
    setLoading(true);
    try {
      const result = await putProviders(id, data);
      console.log(result);
      setSuccess(true);
      setLoading(false);

      getProvidersData();
    } catch (error) {
      setSuccess(true);
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  const getProvider = async (id) => {
    try {
      const { data } = await getProviderById(id);
      const { id: idElement, phoneNumber, ...dataSend } = data;

      const destructuredPhone = ()=>{
        if(phoneNumber.includes("+")){
          return phoneNumber.split(" ");
        };

        return phoneNumber;
      };

      const dataToSend ={
        ...dataSend,
        indicative:phoneNumber.includes("+") ? +destructuredPhone()[0].replace("+",""):0,
        phoneNumber:phoneNumber.includes("+")? +destructuredPhone()[1]:destructuredPhone()
      }
      setProvider(dataToSend);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idProvider) {
      getProvider(idProvider);
      return;
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
          id: idProvider,
          provider: provider.provider,
          nit: provider.nit,
          indicative: provider.indicative,
          address: provider.address,
          phoneNumber: provider.phoneNumber,
        }}
        validationSchema={validationSchema}
        enableReinitialize

        onSubmit={(values) => {
          const {id, indicative, phoneNumber, ...dataSend} = values;

          if(idProvider){
            const dataToSend = {
              ...dataSend,
              phoneNumber:`+${ indicative } ${ phoneNumber }`
            };
  
            updateProviders(id, dataToSend);
            return 
          };

          const dataToSendP = {
            provider: values.provider,
            nit: values.nit,
            address: values.address,
            phoneNumber: `+${values.indicative} ${values.phoneNumber}`,
          };
          sendProviders(dataToSendP);
          console.log(dataToSendP);
        }}
      >
        {() => (
          <Form>
            <Stack spacing={2}>

              <Stack>
              <Field 
                as={ TextField } 
                label="Provider"
                type="text" 
                name="provider" 
                size="small"
                />
                <ErrorMessage name="provider" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
              </Stack>

              <Stack>
                
              <Field 
                as={ TextField } 
                label="Nit" 
                type="text" 
                name="nit" 
                size="small"
                />
                <ErrorMessage name="nit" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
                
              </Stack>
              <Stack>
              <Field 
                as={ TextField } 
                label="Address" 
                type="text" 
                name="address" 
                size="small"
                />
                 <ErrorMessage name="address" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
              </Stack>
              <Stack>
              <Field 
                as={ TextField } 
                label="Indicative" 
                type="number" 
                name="indicative" 
                size="small"
                />
                 <ErrorMessage name="indicative" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
              </Stack>
              <Stack>
              <Field 
                as={ TextField } 
                label="Phone Number" 
                type="number" 
                name="phoneNumber" 
                size="small"
                />
                 <ErrorMessage name="phoneNumber" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
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




export default FormProvider;
