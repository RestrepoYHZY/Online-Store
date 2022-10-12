import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  TableBody,
  Button,
} from "@mui/material";
import { IoTrashOutline, IoCreateOutline } from "react-icons/io5";

const TableInvoice = () => {
  return (
    <>
      <Paper sx={{ width: "98%" }} elevation={0} style={{ margin: "1%" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Subtotal</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Jalea de Durazno</TableCell>
                <TableCell align="center">10.000</TableCell>
                <TableCell align="center">2</TableCell>
                <TableCell align="center">20.000</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="medium"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <IoCreateOutline />
                  </IconButton>
                  <IconButton
                    size="medium"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <IoTrashOutline />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Paper>
    </>
  );
};

export default TableInvoice;
