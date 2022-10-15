import { Button, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styleModal } from "../../styles/theme";
import FormProvider from "./FormProvider";
import { IoCreateOutline } from "react-icons/io5";

const ModalProvider = ({ id}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((e) => !e);
  };

  return (
    <>
      {!id ? (
        <Box align="right">
          <Button onClick={() => handleOpen()} variant="contained">
            New Provider
          </Button>
        </Box>
      ) : (
        <Tooltip title="Edit">
          <IconButton
            onClick={() => handleOpen()}
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
         New Provider
       </Typography>

       : 
        <Typography variant="h6" align="center">
        Edit Provider
      </Typography>

      }

          <FormProvider id={id}/>
        </Box>
      </Modal>
    </>
  );
};

export default ModalProvider;
