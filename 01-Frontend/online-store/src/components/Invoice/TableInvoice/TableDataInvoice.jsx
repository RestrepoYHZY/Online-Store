import { TableCell, TableRow, Typography, IconButton, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import { getProductById } from "../../../actions/products.action";
import { useInvoice } from "../../../context/InvoiceContext";
import useFormInvoice from "../../../Hooks/useFormInvoice";


const TableDataInvoice = ({ id, product, price, amount, subTotal }) => {
  const [productName, setProductName] = useState();

  const { shoppingCart }= useInvoice();


  const getAProduct = async () => {
    try {
      const { data } = await getProductById(product);
      setProductName(data.nameProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const { deleteElement, setInfoToEdit } = useInvoice();

  const filterShoppingCart=()=>{
      const result = shoppingCart.find(item=>item.id===id);
      setInfoToEdit(result);
  };

  useEffect(() => {
    getAProduct();
  }, [product]);
  return (
    <>
      <TableRow>
        <TableCell>
          <Typography variant="subtitle2">{ productName }</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{ price }</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{ amount }</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{ subTotal }</Typography>
        </TableCell>
        <TableCell>
        <Tooltip title="Edit">
          <IconButton size="medium" edge="start" color="primary" onClick={ filterShoppingCart }>
            <IoCreateOutline />
          </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
          <IconButton
            size="medium"
            edge="start"
            color="primary"
            onClick={() => deleteElement(id)}
          >
            <IoTrashOutline />
          </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableDataInvoice;
