import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useEntities } from "../../../context/EntitiesContext";
import TableBodyCustomers from "./TableBodyCustomers";


 
const TableCustomers = () => {
  const {customers} =useEntities();
  return (
    <>
      <Paper sx={{ width: "100%" }} elevation={0} style={{ marginTop: "1em" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Last Name</TableCell>
                <TableCell align="center">Document</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {customers.map(item=>(
                <TableBodyCustomers
                key={item.id}
                id={item.id}
                name={item.name}
                lastName={item.lastName}
                document={item.document}
                phoneNumber={item.phoneNumber}
                email={item.email}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TableCustomers;
