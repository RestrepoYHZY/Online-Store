import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Typography,
} from "@mui/material";
import React from "react";
import { useEntities } from "../../../context/EntitiesContext";
import TableBodyCustomers from "./TableBodyCustomers";

const labels = [
  "Code",
  "Name",
  "Last Name",
  "Document",
  "Phone Number",
  "Email",
  "Actions",
];

const TableCustomers = () => {
  const { customers } = useEntities();
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
              {customers.map((item) => (
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
