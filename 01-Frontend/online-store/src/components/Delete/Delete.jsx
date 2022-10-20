import { Tooltip, IconButton, Modal, Paper, Button, Box } from "@mui/material";
import React, { Fragment, useState } from "react";

import { IoTrashOutline } from "react-icons/io5";
import QuestionMsg from "./QuestionMsg";
import Result from "./Result";


const Delete = ({ id, name, entity, getData, deleteAction }) => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  

  const handleOpen = () => {
    setSuccess(false);
    setHasError(false);
    setOpen((e) => !e);
    getData();
  };

  const deleteFn = async () => {
    try {
      const data = await deleteAction(id);
      setSuccess(true);
      console.log(data);
    } catch (error) {
      setSuccess(true);
      setHasError(true);
      console.log(error);
    }
  };
  return (
    <>
      <Tooltip title="Delete">
        <IconButton
          onClick={handleOpen}
          size="medium"
          edge="start"
          color="primary"
        >
          <IoTrashOutline />
        </IconButton>
      </Tooltip>

      <Modal open={open} onClose={handleOpen}>
        <Paper style={style}>
       
       
            
          {!success ? (
            <QuestionMsg name={name} entity={entity}>
              <Button variant="contained" color="primary" onClick={deleteFn}>
                Confirm
              </Button>
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Cancel
              </Button>
            </QuestionMsg>
          ) : (
            <Fragment>
              <Result hasError={hasError}>
               <Box align="end"  >
                 <Button
                   variant="contained"
                   color="primary"
                   onClick={handleOpen}
                  
                   
                 >OK
                 </Button>
               </Box >
              </Result>
            </Fragment>
          )} 
        </Paper>
      </Modal>
    </>
  );
};

const style = {
  position: "absolute",
  width: "36%",
  top: "24%",
  left: "32%",
  padding: "1.5rem",
};

export default Delete;
