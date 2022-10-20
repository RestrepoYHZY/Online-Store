import React from "react";
import {  TableCell, TableRow } from "@mui/material";

import ModalProvider from "../ModalProvider";
import Delete from "../../Delete/Delete";
import { useEntities } from "../../../context/EntitiesContext";
import { deleteProviders } from "../../../actions/providers.action";

const TableBodyProviders = ({

  id: idProvider,
  provider,
  nit,
  address,
  phoneNumber,
}) => {
  const { getProvidersData } = useEntities();

  return (
    <>
      <TableRow>
        <TableCell align="center">{idProvider}</TableCell>
        <TableCell align="center">{provider}</TableCell>
        <TableCell align="center">{nit}</TableCell>
        <TableCell align="center">{address}</TableCell>
        <TableCell align="center">{phoneNumber}</TableCell>
        <TableCell align="center">
          <ModalProvider id={idProvider} />
          <Delete
           id={idProvider}
            name={provider} 
            entity="provider"
            getData= {getProvidersData}
            deleteAction={ deleteProviders } />
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableBodyProviders;
