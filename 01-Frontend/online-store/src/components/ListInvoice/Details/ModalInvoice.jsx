import { Button, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { styleModalInvoice } from "../../../styles/theme";
import TableProdInvoice from "./TableProdInvoice";
import TableTotal from "./TableTotal";

const ModalInvoice = ({data}) => {
  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
  };
  return (
    <>
    
      <Tooltip title="View Invoice">
        <Box align="center" style={{marginLeft:"-4em"}}>
          <IconButton
            onClick={openCloseModal}
            size="medium"
            edge="start"
            color="primary"
          >
            <IoEyeOutline />
          </IconButton>
        </Box>
      </Tooltip>

      <Modal open={modal} onClose={openCloseModal}>
        <Box sx={styleModalInvoice}>
        <Typography variant="h5" textAlign="center">Invoice Detail</Typography>
        <TableTotal data={ data } />
          <TableProdInvoice data={ data } />
         <Box  align="end"  style={{ marginTop: "1em"  }}>
           <Button variant="contained" onClick={openCloseModal}> Close </Button>
         </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalInvoice;
