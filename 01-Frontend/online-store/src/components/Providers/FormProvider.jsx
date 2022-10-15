import { Button, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

import * as Yup from "yup";
import { postProviders, putProviders, getProviderById } from "../../actions/providers.action";


const validationSchema = Yup.object().shape({
  provider: Yup.string().required("Sorry, this is required").trim(),
  nit: Yup.string().required("Sorry, this is required").trim(),
  indicative: Yup.string().required("Sorry, this is required").trim(),
  address: Yup.string().required("Sorry, this is required").trim(),
  phoneNumber: Yup.string().required("Sorry, this is required").trim(),
});

const FormProvider = ({ id: idProvider }) => {
  const [provider, setProvider] = useState({
    id: idProvider,
    provider: "",
    nit: "",
    indicative: "",
    address: "",
    phoneNumber: "",
  });

  const sendProviders = async (data) => {
    try {
      const result = await postProviders(data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProviders = async (id, data) => {
    try {
      const result = await putProviders(id, data);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getProvider = async (id) => {
    try {
      const { data } = await getProviderById(id);
      const { id: idElement, ...dataToSend } = data;
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
          const {id, ...dataToSend} = values;

          if(idProvider){
            updateProviders(id,dataToSend);
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
                <InputLabel htmlFor="indicative">Indicative</InputLabel>
                <Field type="number" name="indicative" />
                <ErrorMessage name="indicative" />
              </Stack>
              <Stack>
                <InputLabel htmlFor="phoneNumber">Phone Number </InputLabel>
                <Field type="string" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" />
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

export default FormProvider;
