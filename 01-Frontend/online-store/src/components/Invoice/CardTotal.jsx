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

const labels = ["DATE", "Customer", "Total"];

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
      <Paper style={{ width: "91%" }}>
        <TableContainer component={Paper}>
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
                <TableCell>
                  <Typography>{date}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{customerName}</Typography>
                </TableCell>
                <TableCell>
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
    <Typography fontWeight={700}>{label}</Typography>
  </TableCell>
);

export default CardTotal;
