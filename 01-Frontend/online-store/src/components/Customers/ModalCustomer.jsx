import { Box, Modal, Typography, Button, Tooltip, IconButton } from "@mui/material";
import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { useEntities } from "../../context/EntitiesContext";
import { styleModal } from "../../styles/theme";
import FormCustomer from "./FormCustomer";

const ModalCustomer = ({id}) => {
  const [open, setOpen] = useState(false);

  const {getCustomerData}= useEntities();

  const handleOpen = () => {
    setOpen((e) => !e);
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
         
          {!id ? 
         <Typography variant="h6" align="center">
         New Customer
       </Typography>

       : 
        <Typography variant="h6" align="center">
        Edit Customer
      </Typography>

      }

          <FormCustomer id={id}/>
        </Box>
      </Modal>
    </>
  );
};

export default ModalCustomer;
