import React from 'react'
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";

  import { IoTrashOutline, IoCreateOutline } from "react-icons/io5";
const TableProviders = () => {
  return (
    <>
    <Paper sx={{ width: "100%" }} elevation={0} style={{marginTop: '1em'}} >
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead> 
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell align="center">Provider</TableCell>
                <TableCell align="center">Nit</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>Code</TableCell>
                <TableCell align="center">Distribuidores All</TableCell>
                <TableCell align="center">434343443</TableCell>
                <TableCell align="center">cr 10a #23-5</TableCell>
                <TableCell align="center">+57 323 394 7895 </TableCell>
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
  )
}

export default TableProviders