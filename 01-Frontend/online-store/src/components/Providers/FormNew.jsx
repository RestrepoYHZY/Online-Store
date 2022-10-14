import { Button, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { postProviders } from "../../actions/providers.action";

const validationSchema = Yup.object().shape({
  provider: Yup.string().required("Sorry, this is required").trim(),
  nit: Yup.string().required("Sorry, this is required").trim(),
  indicative: Yup.string().required("Sorry, this is required").trim(),
  address: Yup.string().required("Sorry, this is required").trim(),
  phoneNumber: Yup.string().required("Sorry, this is required").trim(),
});

const FormNew = () => {

  const sendProviders = async (data)=>{
    try{
      const result = await postProviders(data);
      console.log(result);
    }catch(error){
      console.log(error);
    };
  };


  return (
    <>
      <Formik
        initialValues={{
          provider: "",
          nit: "",
          indicative: "",
          address: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}

        onSubmit={(values)=>{
          const dataToSend = {
            "name":values.name,
            "nit":values.nit,
            "address":values.address,
            "phone":`+${values.indicative} ${values.phone}`
          };
          sendProviders(dataToSend);
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
