import { Button, Modal, Typography, Tooltip, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEntities } from "../../context/EntitiesContext";
import { styleModal } from "../../styles/theme";
import FormProduct from "./FormProduct";
import { IoCreateOutline } from "react-icons/io5";

const ModalProduct = ({id}) => {
  const [open, setOpen] = useState(false);
 const {getProductsData} = useEntities();

 const handleOpen = () => {
  setOpen((e) => !e);
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
           

           {!id ? 
             <Typography variant= "h6" align='center'>New Product</Typography>
             :
             <Typography variant= "h6" align='center'>Edit Product</Typography>
           }
           
          <FormProduct id={id} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalProduct;
