import React from "react";
import {
  IconButton,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";

import { IoTrashOutline, IoCreateOutline } from "react-icons/io5";

const TableBodyProviders = ({ id:idProvider, provider, nit, address, phoneNumber}) => {
  return (
    <>
      <TableRow>
        <TableCell align="center">{idProvider}</TableCell>
        <TableCell align="center">{provider}</TableCell>
        <TableCell align="center">{nit}</TableCell>
        <TableCell align="center">{address}</TableCell>
        <TableCell align="center">{phoneNumber}</TableCell>
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
    </>
  );
};

export default TableBodyProviders;
