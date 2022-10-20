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
  Box,
  Tooltip,
  Typography,
} from "@mui/material";


const TableInvoice = ({ children }) => {
  return (
    <>
      <Paper sx={{ width: "90%" }} elevation={0} style={{ margin: "1%" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h7" fontWeight={700}>
                    Product
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7" fontWeight={700}>
                    Price
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7" fontWeight={700}>
                    Amount
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7" fontWeight={700}>
                    SubTotal
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7" fontWeight={700}>
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          { children }
        </TableBody>
          </Table>
        </TableContainer>  
        <Box align="right">
    <Button type="submit" variant="contained">
      Save invoice
    </Button>
  </Box>
      </Paper>
    
    </>
  );
};

export default TableInvoice;
