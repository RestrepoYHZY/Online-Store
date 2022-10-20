import { TableCell, TableRow, Typography, IconButton } from "@mui/material";
import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";

const TableDataInvoice = ({
  carrito,
  setCarrito,
  id,
  product,
  price,
  amount,
  subtotal,
}) => {
  const handleDelete = () => {
    const result = carrito.filter((item) => item.id !== id);
    setCarrito(result);
  };
  return (
    <>
      <TableRow>
        <TableCell>
          <Typography variant="subtitle2">{product}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{price}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{amount}</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="subtitle2">{subtotal}</Typography>
        </TableCell>
        <TableCell>
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
            onClick={handleDelete}
          >
            <IoTrashOutline />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableDataInvoice;
