import React, { useEffect, useState } from 'react'
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";


import { getProviders } from '../../../actions/providers.action';
import TableBodyProviders from './TableBodyProviders';



  const TableProviders = () => {

    const [providers, setProviders]= useState([]);

    const getProvidersData = async ()=>{
      try{
        const { data } = await getProviders();
        setProviders(data);
      }catch(error){
        console.log(error);
      };
    };
    useEffect(()=>{
      getProvidersData();
    }, []);

  return (
    <>
    <Paper sx={{ width: "100%" }} elevation={0} style={{marginTop: '1em'}} >
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead> 
              <TableRow>
                <TableCell align="center">Code</TableCell>
                <TableCell align="center">Provider</TableCell>
                <TableCell align="center">Nit</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              
              { providers.map(item=>(
                <TableBodyProviders 
                key={item.id}
                id={item.id}
                provider={item.provider}
                nit={item.nit}
                address={item.address}
                phoneNumber={item.phoneNumber}
                />

              ))}
              
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    
    </>
  )
}

export default TableProviders