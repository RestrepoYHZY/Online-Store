import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, CircularProgress, InputLabel, Stack, TextField } from "@mui/material";
import * as Yup from "yup";
import { useEntities } from "../../context/EntitiesContext";
import {
  getCustomerById,
  postCustomer,
  putCustomer,
} from "../../actions/customer.action";
import { ErrorMsg } from "../../ValidationForm/ErrorMsg";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Sorry, this is required").trim(),
  lastName: Yup.string().required("Sorry, this is required").trim(),
  document: Yup.string().required("Sorry, this is required").trim(),
  indicative: Yup.string().required("Sorry, this is required").trim(),
  phoneNumber: Yup.string().required("Sorry, this is required").trim(),
  email: Yup.string()
    .required("Sorry, this is required")
    .email("This email is not valid")
    .trim(),
});
const FormCustomer = ({ id: idCustomer }) => {

  const [customers, setCustomer] = useState({
    id: 0,
    name: "",
    lastName: "",
    document: "",
    indicative: 0,
    phoneNumber: 0,
    email: "",
  });

  const { getCustomerData, setSuccess, setError, loading, setLoading } = useEntities();

  const updateCustomer = async (id, data) => {
    setLoading(true);
    try {
      const result = await putCustomer(id, data);
      console.log(result);
      setSuccess(true);
      setLoading(false);

      getCustomerData();
    } catch (error) {
      setSuccess(true);
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };
  const sendCustomer = async (data) => {
    setLoading(true);
    try {
     
      const result = await postCustomer(data);
      console.log(result);
      setSuccess(true);
      setLoading(false);
      
      getCustomerData();
    } catch (error) {
      setSuccess(true);
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };
  const getCustomer = async (id) => {
    try {
      const { data } = await getCustomerById(id);
      const { id: idElement, phoneNumber, ...dataSend } = data;

      const destructuredPhone = () => {
        if (phoneNumber.includes("+")) {
          return phoneNumber.split(" ");
        }

        return phoneNumber;
      };

      const dataToSend = {
        ...dataSend,
        indicative: phoneNumber.includes("+")
          ? +destructuredPhone()[0].replace("+", "")
          : 0,
        phoneNumber: phoneNumber.includes("+")
          ? +destructuredPhone()[1]
          : destructuredPhone(),
      };
      setCustomer(dataToSend);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (idCustomer) {
      getCustomer(idCustomer);
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
            id: idCustomer,
            name: customers.name,
            lastName: customers.lastName,
            document: customers.document,
            phoneNumber: customers.phoneNumber,
            indicative: customers.indicative,
            email: customers.email,
          }}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values) => {
            const { id, indicative, phoneNumber, ...dataSend } = values;

            if (idCustomer) {
              const dataToSend = {
                ...dataSend,
                phoneNumber: `+${indicative} ${phoneNumber}`,
              };

              updateCustomer(id, dataToSend);
              return;
            }

            const dataToSendC = {
              name: values.name,
              lastName: values.lastName,
              document: values.document,
              email: values.email,
              phoneNumber: `+${values.indicative} ${values.phoneNumber}`,
            };
            sendCustomer(dataToSendC);
            console.log(dataToSendC);
          }}
        >
          {() => (
            <Form>
              <Stack spacing={2}>
                <Stack>
               
                  <Field as={ TextField }  label="Name Customer"  type="text" name="name"  size="small" />
                  <ErrorMessage name="name" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
                </Stack>
                <Stack>
                
                  <Field as={ TextField }  type="text" label="Last Name"  name="lastName" size="small"/>
                  <ErrorMessage name="lastName" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
                
                </Stack>

                <Stack>
            
                  <Field as={ TextField }  type="text" name="document" label="Document" size="small" />
                  <ErrorMessage name="document" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
                </Stack>
                <Stack>
                
                  <Field as={ TextField } type="number" label="Indicative" name="indicative" size="small" />
                  <ErrorMessage name="indicative" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
                </Stack>

                <Stack>
                 
                  <Field as={ TextField } type="number" label="Phone Number" name="phoneNumber" size="small"/>
                  <ErrorMessage name="phoneNumber" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
                </Stack>
                <Stack>
       
                  <Field as={ TextField } type="email" name="email" label="Mail" size="small" />
                  <ErrorMessage name="email" render={(msg)=>(<ErrorMsg msg={msg}/>)} />
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

export default FormCustomer;
