import React, { useEffect, useState } from "react";
import {  TableCell, TableRow } from "@mui/material";

import { getProviderById } from "../../../actions/providers.action";
import Delete from "../../Delete/Delete";
import { useEntities } from "../../../context/EntitiesContext";
import { deleteProducts } from "../../../actions/products.action";
import ModalProduct from "../ModalProduct";

const TableBodyProducts = ({
  id:idProduct, nameProduct, price, amount, expirationDate, provider:idProvider
}) => {

  const {getProductsData} =useEntities();
  

 
  return (
    <>
      <TableRow>
        <TableCell align="center">{idProduct}</TableCell>
        <TableCell align="center">{nameProduct}</TableCell>
        <TableCell align="center">{price}</TableCell>
        <TableCell align="center">{amount}</TableCell>
        <TableCell align="center">{expirationDate}</TableCell>
        <TableCell align="center">{provider} </TableCell>
        <TableCell align="center">
        <ModalProduct id={idProduct} />

          <Delete
           id={idProduct}
            name={nameProduct} 
            entity="product"
            getData= {getProductsData}
            deleteAction={ deleteProducts } />
        </TableCell>
      </TableRow>
    </>
  );
};

export default TableBodyProducts;
