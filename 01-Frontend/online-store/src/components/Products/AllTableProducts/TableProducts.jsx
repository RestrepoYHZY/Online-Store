
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";


import TableBodyProducts from "./TableBodyProducts";
import { useEntities } from '../../../context/EntitiesContext';



const TableProducts = () => {

  const { products }= useEntities(); //llamado de entites Context

 



  return (
    <>
      <Paper sx={{ width: "100%" }} elevation={0} style={{ marginTop: "1em" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Date of Expiry</TableCell>
                <TableCell align="center">Provider</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>  

            <TableBody>

            {products.map(item=>(
              <TableBodyProducts
              key={item.id}
              id={item.id}
              nameProduct={item.nameProduct}
              price={item.price}
              amount={item.amount}
              expirationDate={item.expirationDate}
              provider={item.provider}
              />
            ))}
              
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TableProducts;
