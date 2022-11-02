import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import TableBodyProducts from "./TableBodyProducts";
import { useEntities } from "../../../context/EntitiesContext";

const labels = [
  "Code",
  "Product",
  "Price",
  "Amount",
  "Expiration Date",
  "Provider",
  "Actions",
];

const TableProducts = () => {
  const { products } = useEntities(); //llamado de entites Context

  return (
    <>
      <Paper sx={{ width: "100%" }} elevation={0} style={{ marginTop: "1em" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {labels.map((item, index) => (
                  <TableCell key={index}>
                    <Typography align="center" fontWeight={700}>
                      {item}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((item) => (
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
