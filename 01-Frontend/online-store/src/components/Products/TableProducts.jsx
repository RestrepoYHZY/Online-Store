import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip
} from "@mui/material";

import { IoTrashOutline, IoCreateOutline } from "react-icons/io5";

const TableProducts = () => {
  return (
    <>
      <Paper sx={{ width: "100%" }} elevation={0} style={{ marginTop: "1em" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell align="center">Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Date of Expery</TableCell>
                <TableCell align="center">Provider</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell align="center">Jalea de Manzana</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Date of Expery</TableCell>
                <TableCell align="center">Josefina antonia </TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit">
                    <IconButton
                      size="medium"
                      edge="start"
                      color="primary"
                      aria-label="menu"
                      sx={{ mr: 1 }}
                    >
                      <IoCreateOutline />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton
                      size="medium"
                      edge="start"
                      color="primary"
                      aria-label="menu"
                      sx={{ mr: 1 }}
                    >
                      <IoTrashOutline />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default TableProducts;
