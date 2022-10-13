import { IconButton, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import {styleModalInvoice } from "../../styles/theme";

import TableModal from "./TableModal";

const ModalInvoice = () => {
  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Box align="right">
        <IconButton onClick={ openCloseModal}
          size="medium"
          edge="start"
          color="primary"
          aria-label="menu"
          sx={{ mr: 1 }}
         
        > 
          <IoEyeOutline />
        </IconButton>
      </Box>
      
      <Modal open={modal} onClose={openCloseModal}>
        <Box sx={styleModalInvoice}>
          <TableModal/>
        </Box>
      </Modal>
    </>
  );
};

export default ModalInvoice;
