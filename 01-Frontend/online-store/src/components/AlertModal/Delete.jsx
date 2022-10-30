import { Tooltip, IconButton, Modal, Paper, Button, Box, CircularProgress } from "@mui/material";
import React, { Fragment, useState } from "react";

import { IoTrashOutline } from "react-icons/io5";
import { useEntities } from "../../context/EntitiesContext";
import QuestionMsg from "./QuestionMsg";
import Result from "./Result";


const Delete = ({ id, name, entity, getData, deleteAction }) => {
  const [open, setOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  

  const { success, setSuccess, setError, loading, setLoading } = useEntities();

  const handleOpen = () => {
    setSuccess(false);
    setError(false)
    setHasError(false);
    setOpen((e) => !e);
    getData();
  };

  const deleteFn = async () => {
    setLoading(true);
    try {
      const data = await deleteAction(id);
      setSuccess(true);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setError(true);
      setSuccess(true);
      setLoading(false);
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
          {loading?
          <center>
            <CircularProgress color="primary" />
          </center>
          :

            <div>
              
            {!success ? (
              <QuestionMsg 
              msg={ `You are going to delete the ${ entity } "${ name }"` }>
                <Button variant="contained" color="primary" onClick={deleteFn}>
                  Confirm
                </Button>
                <Button variant="contained" color="primary" onClick={handleOpen}>
                  Cancel
                </Button>
              </QuestionMsg>
            ) : (
              <Fragment>
                <Result hasError={hasError} action="Delete">
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
        </div>
}
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
