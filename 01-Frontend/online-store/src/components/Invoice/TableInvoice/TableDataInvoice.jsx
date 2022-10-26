import { TableCell, TableRow, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import { getProductById } from "../../../actions/products.action";
import { useInvoice } from "../../../context/InvoiceContext";


const TableDataInvoice = ({ id, product, price, amount, subTotal }) => {
  const [productName, setProductName] = useState();
  const getAProduct = async () => {
    try {
      const { data } = await getProductById(product);
      setProductName(data.nameProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const { deleteElement } = useInvoice();

  useEffect(() => {
    getAProduct();
  }, [product]);
  return (
    <>
      <TableRow>
        <TableCell>
          <Typography variant="subtitle2">{productName}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{price}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{amount}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{subTotal}</Typography>
        </TableCell>
        <TableCell>
          <IconButton size="medium" edge="start" color="primary">
            <IoCreateOutline />
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="primary"
            onClick={() => deleteElement(id)}
          >
            <IoTrashOutline />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableDataInvoice;
