import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEntities } from "../../../context/EntitiesContext";
import TableList from "./TableList";
 
const labels =[
  "Cade",
  "Customers",
  "Date",
  "Total",
  "Actions"
];

const CardInvoice = () => {
  const {listInvoices} = useEntities();
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
          { listInvoices.map(item=>(
            <TableList
              key={ item.id }
              code={ item.code }
              customer={ item.customer }
              date={ item.date }
              total={ item.total }              
              data={ item }              
            />
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  </>)
}

export default CardInvoice