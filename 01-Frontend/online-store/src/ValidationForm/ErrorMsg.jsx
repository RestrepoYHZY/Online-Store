import { Typography } from "@mui/material";

export const ErrorMsg =({msg})=>(
    <Typography style={{marginTop:"0.1em"}} variant="caption text" color="red">{msg}</Typography>
  )