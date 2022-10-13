import { Box, Button, Pagination } from "@mui/material";

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import ModalInvoice from "./ModalInvoice";

const TableList = () => {
  return (
    <>
      <Box align="right">
        <Button variant="contained" color="primary">
          New Invoice
        
        </Button>
      </Box>
      <Paper sx={{ width: "99%" }} elevation={0} style={{ margin: "1%" }}>
        <TableContainer>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Customer</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">Pepito Juan Lopez</TableCell>
                <TableCell align="center">12/10/2022</TableCell>
                <TableCell align="center">20.000</TableCell>
                <TableCell align="center">
                  <ModalInvoice />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Pagination />
    </>
  );
};

export default TableList;
