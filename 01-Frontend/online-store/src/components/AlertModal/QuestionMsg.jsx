
import { Stack, Typography } from "@mui/material";
import { IoAlertCircleOutline } from "react-icons/io5";

const QuestionMsg = ({ children, msg }) => {
  return (<>
  
    <Typography textAlign="center" color="primary">
      <IoAlertCircleOutline style={{ fontSize:"8rem" }} />
    </Typography>
    
    <Typography textAlign="center" variant="h5">Are you sure?</Typography>
    <Stack spacing={ 3 }>
    <Typography textAlign="center" variant="h6">{ msg } </Typography>
   

    <Stack spacing={ 2 } direction="row" justifyContent="center">
     {children}
    </Stack>
    </Stack>
  </>)
};

export default QuestionMsg;