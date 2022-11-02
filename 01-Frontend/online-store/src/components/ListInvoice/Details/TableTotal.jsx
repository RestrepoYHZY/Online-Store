import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCustomerById } from "../../../actions/customer.action";

const labels = [
  "Code",
  "Date",
  "Customer",
  "Total"
];

const TableTotal = ({ data }) => {
  const [customer, setCustomer] = useState("");

  const getACustomer = async () =>{
    try{
      const result = await getCustomerById(data.customer);
      setCustomer(`${ result.data?.name } ${ result.data?.lastName }`);
    }catch(error){
      console.log(error);
    }
  };

  useEffect(() => {
    getACustomer();
  }, []);

  return (<>
     <TableContainer component={ Paper }  style={{ width: "90%", marginLeft: "3em",  marginTop: "1em",  marginBottom:"1em"   }}>
      <Table>
        <TableHead>
          <TableRow>
            { labels.map((item,index)=>(
              <TableCell key={ index }>
                <Typography align="center" fontWeight={ 700 }>{ item }</Typography>
              </TableCell>
            )) }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" >
              <Typography>{ data.code }</Typography>
            </TableCell>
            <TableCell>
              <Typography align="center" >{ data.date }</Typography>
            </TableCell>
            <TableCell align="center" >
              <Typography>{ customer }</Typography>
            </TableCell>
            <TableCell align="center" >
              <Typography>{ data.total }</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </>)
};

export default TableTotal;