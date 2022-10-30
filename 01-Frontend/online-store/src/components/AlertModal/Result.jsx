import {  Stack, Typography } from "@mui/material";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

const Result = ({ action, hasError, children }) => {
  return (<>
    { hasError?
      <ResultComponent 
        Icon={ IoCloseCircleOutline }
        msg="Something was wrong!"
      />
      :
      <ResultComponent 
        Icon={ IoCheckmarkCircleOutline }
        msg={`Succesfully ${ action }`}
      />
    }
    <Stack spacing={ 2 }>
      { children }
    </Stack>
  </>)
};

const ResultComponent = ({ Icon, msg }) =>(<>
  <Typography textAlign="center" color='primary'>
    <Icon style={{ fontSize:"8rem" }} />
  </Typography>
  <Typography variant="h5" textAlign="center">{ msg }</Typography>
</>);

export default Result;