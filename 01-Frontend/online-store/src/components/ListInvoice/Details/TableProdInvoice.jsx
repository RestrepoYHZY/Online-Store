import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import ProdInvoiceRow from './ProdInvoiceRow'


const labels = [
    "Product",
    "Price",
    "Amount",
    "SubTotal"
  ];
const TableProdInvoice = ({data}) => {
  return (<>

<TableContainer component={ Paper }>
      <Table>
        <TableHead>
          <TableRow>
            { labels.map((item, index)=>(
              <TableCell key={ index }>
                <Typography fontWeight={ 700 }>{ item }</Typography>
              </TableCell>
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          { data?.products?.map(item=>(
            <ProdInvoiceRow 
              key={ item.id }
              product={ item.product }
              price={ item.price }
              amount={ item.amount }
              subTotal={ item.subTotal }
            />
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  </>
    
  )
}

export default TableProdInvoice