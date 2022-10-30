import {
  Box,
  Modal,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { useEntities } from "../../context/EntitiesContext";
import { styleModal } from "../../styles/theme";
import Result from "../AlertModal/Result";
import FormCustomer from "./FormCustomer";

const ModalCustomer = ({ id }) => {
  const [open, setOpen] = useState(false);
 

  const { getCustomerData, success, setSuccess, error, setError } = useEntities();

  const handleOpen = () => {
    setOpen((e) => !e);
    setSuccess(false);
    setError(false);
    getCustomerData();
  };

  return (
    <>
      {!id ? (
        <Box align="right">
          <Button onClick={() => handleOpen()} variant="contained">
            New Customer
          </Button>
        </Box>
      ) : (
        <Tooltip title="Edit">
          <IconButton
            onClick={handleOpen}
            size="medium"
            edge="start"
            color="primary"
          >
            <IoCreateOutline />
          </IconButton>
        </Tooltip>
      )}

      <Modal open={open} onClose={handleOpen}>
        <Box sx={styleModal}>
          <Typography variant="h6" align="center">
            {!id ? "Add" : "Edit"} Customer
          </Typography>
          {success?
            <Result hasError={ error } action={!id ? "Add" : "Edit"}>
              <Box align="end">
                <Button variant="contained" color="primary" onClick={ handleOpen }> OK</Button>
              </Box>
            </Result>
            : 
          <FormCustomer id={id} />
          }

        </Box>
      </Modal>
    </>
  );
};

export default ModalCustomer;
