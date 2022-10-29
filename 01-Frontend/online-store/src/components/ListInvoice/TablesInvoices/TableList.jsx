import { Pagination, Typography } from "@mui/material";

import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import ModalInvoice from "../Details/ModalInvoice";
import { getCustomerById } from "../../../actions/customer.action";
import { useEffect, useState } from "react";

const TableList = ({ data, code, customer: Idcustomer, date, total }) => {
  const [customer, setCustomer] = useState("");

  const getACustomer = async () => {
    try {
      const { data } = await getCustomerById(Idcustomer);
      setCustomer(`${data?.name} ${data?.lastName}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getACustomer();
  }, []);

  return (
    <>
      <TableRow>
      <TableCell>
        <Typography>{ code }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ customer }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ date }</Typography>
      </TableCell>
      <TableCell>
        <Typography>{ total }</Typography>
      </TableCell>
      <TableCell>
        <ModalInvoice data={ data }/>
      </TableCell>
    </TableRow>
    
    </>
  );
};

export default TableList;
