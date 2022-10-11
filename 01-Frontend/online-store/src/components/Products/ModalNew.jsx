import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styleModal } from "../../styles/theme";
import FormNew from "./FormNew";

const ModalNew = () => {
  const [modal, setModal] = useState(false);

  const abrirCerrarModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Button
        onClick={() => abrirCerrarModal()}
        variant="contained"
        color="primary"
      >
        New Product
      </Button>

      <Modal open={modal} onClose={abrirCerrarModal}>
        <Box sx={styleModal}>
            <Typography variant= "subtitle1">New Product</Typography>
          <FormNew />
        </Box>
      </Modal>
    </>
  );
};

export default ModalNew;
