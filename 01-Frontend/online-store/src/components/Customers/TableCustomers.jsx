import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  IconButton,
} from "@mui/material";
import React from "react";
import { IoTrashOutline, IoCreateOutline } from "react-icons/io5";

const TableCustomers = () => {
  return (
    <>
      <Paper sx={{ width: "100%" }} elevation={0} style={{ marginTop: "1em" }}>
        <TableContainer>
          <Table>
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
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">Juan Antoncio</TableCell>
                <TableCell align="center">De los Andes</TableCell>
                <TableCell align="center">1059892005</TableCell>
                <TableCell align="center">+57 314 702 5444</TableCell>
                <TableCell align="center">correo@correo.com</TableCell>
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
      </Paper>
    </>
  );
};

export default TableCustomers;
