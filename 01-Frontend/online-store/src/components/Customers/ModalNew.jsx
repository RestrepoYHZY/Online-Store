import { Box, Modal, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { styleModal } from "../../styles/theme";
import FormNew from "./FormCustomer";

const ModalNew = () => {
  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Box align="right">
        <Button
          onClick={() => openCloseModal()}
          variant="contained"
          color="primary"
        >
          New Customer
        </Button>
        </Box>
        <Modal open={modal} onClose={openCloseModal}>
          <Box sx={styleModal}>
          <Typography variant= "h6" align='center'>New Customer</Typography>
          <FormNew />
        </Box>
      </Modal>
    </>
  );
};

export default ModalNew;
