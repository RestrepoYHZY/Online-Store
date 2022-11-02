import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getCustomerById } from "../../actions/customer.action";

const labels = ["DATE", "CUSTOMER", "TOTAL"];

const CardTotal = ({ date, customer = 0, total }) => {
  const [customerName, setCustomerName] = useState("");

  const getACustomer = async () => {
    try {
      const { data } = await getCustomerById(customer);
      setCustomerName(`${data.name} ${data.lastName}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getACustomer();
  }, [customer]);
  return (
    <>
      <Paper style={{ width: "70%", marginLeft: "13em",  marginTop: "1em"  }} elevation={ 1 }  >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {labels.map((item, index) => (
                  <ColumnHead key={index} label={item} />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">
                  <Typography>{date}</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>{customerName}</Typography>
                </TableCell>
                <TableCell align="center">
                  {" "}
                  <Typography fontWeight={700}> ${total}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

const ColumnHead = ({ label }) => (
  <TableCell>
    <Typography align="center" fontWeight={700}>{label}</Typography>
  </TableCell>
);

export default CardTotal;
