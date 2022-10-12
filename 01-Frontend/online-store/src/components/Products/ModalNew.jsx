import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styleModal } from "../../styles/theme";
import FormNew from "./FormNew";

const ModalNew = () => {
  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  };
  return (
    <>
     <Box align='right'>
       <Button
       
         onClick={() => openCloseModal()}
         variant="contained"
         color="primary"
       >
         New Product
       </Button>
     </Box>

      <Modal open={modal} onClose={openCloseModal}>
        <Box sx={styleModal}>
           <Box align='center'>
             <Typography variant= "subtitle1">New Product</Typography>
           </Box >
          <FormNew />
        </Box>
      </Modal>
    </>
  );
};

export default ModalNew;
