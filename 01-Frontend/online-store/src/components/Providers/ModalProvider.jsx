import { Button, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { styleModal } from "../../styles/theme";
import FormProvider from "./FormProvider";
import { IoCreateOutline } from "react-icons/io5";
import { useEntities } from "../../context/EntitiesContext";
import Result from "../AlertModal/Result";

const ModalProvider = ({ id}) => {
  const [open, setOpen] = useState(false);

  const { getProvidersData, success, setSuccess, error, setError }= useEntities();

  const handleOpen = () => {
    setOpen((e) => !e);
    setSuccess(false);
    setError(false);
    getProvidersData();//Aca llamo de entities
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
         
         <Typography variant= "h5" style={{margin: "0.5em"}} align="center">
          {!id ? "Add" : "Edit"} Provider
       </Typography>
       {success?
            <Result hasError={ error } action={!id ? "Add" : "Edit"}>
              <Box align="end">
                <Button variant="contained" color="primary" onClick={ handleOpen }> OK</Button>
              </Box>
            </Result>
            : 

          <FormProvider id={id}/>
       }
        </Box>
      </Modal>
    </>
  );
};

export default ModalProvider;
