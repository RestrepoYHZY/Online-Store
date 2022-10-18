
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";


import TableBodyProviders from './TableBodyProviders';
import { useEntities } from '../../../context/EntitiesContext';



  const TableProviders = () => {

   const { providers}= useEntities(); //llamado de entitesContext

   
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