import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";

import CardInvoice from "./CardInvoice";

const TableModal = () => {
  return (
    <> 
    <Typography variant="h3" align="center">
        Invoice Detail
      </Typography>
    <Stack spacing={8}>
      
      <CardInvoice/>
      <Paper sx={{ width: "98%" }} elevation={0} style={{ margin: "1%" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Subtotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Jalea de Durazno</TableCell>
                <TableCell align="center">10.000</TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">20.000</TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell align="center">Jalea de Durazno</TableCell>
                <TableCell align="center">10.000</TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">20.000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box align="right">
        <Button variant="contained" color="primary">
         Close
        </Button>
      </Box>
      </Stack>
  
    </>
  );
};

export default TableModal;
