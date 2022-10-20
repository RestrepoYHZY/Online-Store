import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";


const CardTotal = ({ date, customer, total }) => {
  return (<>
     <Paper style={{ width:"91%" }}>
      <TableContainer component={ Paper }>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>
                  <Typography variant="h7" fontWeight={700}>
                    Date:
                  </Typography>
                </TableCell>
             
                <TableCell>
                  <Typography variant="h7" fontWeight={700}>
                   Customer:
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h7" fontWeight={700}>
                    Total:
                  </Typography>
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell><Typography>{ date }</Typography></TableCell>
              <TableCell><Typography>{ customer }</Typography></TableCell>
              <TableCell> <Typography>{ total }</Typography></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </>)
}

export default CardTotal