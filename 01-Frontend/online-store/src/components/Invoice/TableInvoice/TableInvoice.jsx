import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'
import TableDataInvoice from './TableDataInvoice';


const labels = ["Product", "Price", "Amount", "Subtotal", "Action"];

const TableInvoice = ({ data }) => {

  return (
    <>
    <TableContainer component={ Paper } elevation={ 0 }>
      <Table>
        <TableHead>
          <TableRow>
            { labels.map((item, index)=>(
              <TableCell key={ index }>
                  <Typography fontWeight={ 700 }>{ item }</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map(item=>(
            <TableDataInvoice
            key={item.id}
            id={item.id}
            product={item.product}
            price={item.price}
            amount={item.amount}
            subTotal={item.subTotal}
            
            />
          ))}
        </TableBody>

      </Table>
    </TableContainer>

    <Box align="end">
      <Button variant="contained" color="primary" type="submit">Send</Button>
    </Box >
    </>
  )
}

export default TableInvoice
