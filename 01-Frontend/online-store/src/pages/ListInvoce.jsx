import { Box, Typography } from "@mui/material";
import React from "react";

import TableList from "../components/ListInvoice/TableList";

const ListInvoce = () => {
  return (
    <>
      <Box style={{ margin: "2em", marginTop: "5em" }}>
        <Typography variant="h5">List Invoice</Typography>

        <TableList />
      </Box>
      
    </>
  );
};

export default ListInvoce;
