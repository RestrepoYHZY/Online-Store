import { Button, Modal, Typography, Tooltip, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEntities } from "../../context/EntitiesContext";
import { styleModal } from "../../styles/theme";
import FormProduct from "./FormProduct";
import { IoCreateOutline } from "react-icons/io5";
import Result from "../AlertModal/Result";

const ModalProduct = ({id}) => {
  const [open, setOpen] = useState(false);
 const {getProductsData, success, setSuccess, error, setError} = useEntities();

 const handleOpen = () => {
  setOpen((e) => !e);
  setSuccess(false);
  setError(false);
  getProductsData();//Aca llamo de entities
};
  return (
    <>
    {!id ? (
      <Box align='right'>
       <Button
       
         onClick={handleOpen}
         variant="contained"
         color="primary"
       >
         New Product
       </Button>
     </Box>
    ):(
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
          <Typography variant= "h5" style={{margin: "0.5em", marginBottom: "1em"}} align='center'>{!id ? "Add" : "Edit"} Product</Typography>
          {success?
            <Result hasError={ error } action={!id ? "Add " : "Edit "}>
              <Box align="end">
                <Button variant="contained" color="primary" onClick={ handleOpen }> OK</Button>
              </Box>
            </Result>
            :  
           
          <FormProduct id={id} />
        }
        </Box>
      </Modal>
    </>
  );
};

export default ModalProduct;
