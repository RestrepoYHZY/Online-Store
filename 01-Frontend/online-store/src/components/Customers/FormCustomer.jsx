import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, InputLabel, Stack } from "@mui/material";
import * as Yup from "yup";
import { useEntities } from "../../context/EntitiesContext";
import { getCustomerById, postCustomer, putCustomer } from "../../actions/customer.action";
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
const FormCustomer = ({id: idCustomer}) => {
  const [customers, setCustomer] = useState({
    id:0,
    name: "",
    lastName: "",
    document: "",
    indicative: 0,
    phoneNumber: 0,
    email: "",
  });

  const {getCustomerData} = useEntities();

  const updateCustomer= async (id, data) => {
    try {
      const result = await putCustomer(id, data);
      console.log(result);
      getCustomerData();
    } catch (error) {
      console.log(error);
    }
  };
  const sendCustomer = async (data) => {
    try {
      const result = await postCustomer(data);
      console.log(result);
      getCustomerData();
    } catch (error) {
      console.log(error);
    }
  };
   const getCustomer = async (id)=> {
    try {
      const { data} =await getCustomerById(id);
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
      setCustomer(dataToSend);
      
    } catch (error) {
      console.log(error);
    }
   }
   useEffect(() => {
    if (idCustomer) {
      getCustomer(idCustomer);
      return;
    }
  }, []);
  return (
    <>
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
          const {id, indicative, phoneNumber, ...dataSend} = values;

          if(idCustomer){
            const dataToSend = {
              ...dataSend,
              phoneNumber:`+${ indicative } ${ phoneNumber }`
            };
  
            updateCustomer(id, dataToSend)
            return 
          };

          const dataToSendC = {
           name: values.name,
          lastName: values.lastName,
          document: values.document,
          email: values.email,
            phoneNumber: `+${values.indicative} ${values.phoneNumber}`,
          };
          sendCustomer(dataToSendC)
          console.log(dataToSendC);
        }}
      >
        {() => (
          <Form>
            <Stack spacing={2}>
              <Stack>
                <InputLabel htmlFor="name">Name Customer</InputLabel>
                <Field type="text" name="name" />
                <ErrorMessage name="name" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="lastName">Last Name </InputLabel>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" />
              </Stack>

              <Stack>
                <InputLabel htmlFor="document">Document</InputLabel>
                <Field type="text" name="document" />
                <ErrorMessage name="document" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="indicative">Indicative</InputLabel>
                <Field type="number" name="indicative" />
                <ErrorMessage name="indicative" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
                <Field type="number" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="email">Mail</InputLabel>
                <Field type="email" name="email" />
                <ErrorMessage name="email" />
              </Stack>
              <div align="right">
                <Button type="submit" variant="contained" color="primary">
                  Add Customer
                </Button>
              </div>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormCustomer;
