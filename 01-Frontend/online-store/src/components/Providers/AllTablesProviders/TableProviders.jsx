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

import TableBodyProviders from "./TableBodyProviders";
import { useEntities } from "../../../context/EntitiesContext";

const labels = [
  "Code",
  "Provider",
  "Nit",
  "Address",
  "Phone Number",
  "Actions",
];

const TableProviders = () => {
  const { providers } = useEntities(); //llamado de entitesContext

  return (
    <>
      <Paper sx={{ width: "100%" }} elevation={0} style={{ marginTop: "1em" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {labels.map((item, index) => (
                  <TableCell key={index}>
                    <Typography align="center" fontWeight={700}>
                      {item}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {providers.map((item) => (
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
  );
};

export default TableProviders;
