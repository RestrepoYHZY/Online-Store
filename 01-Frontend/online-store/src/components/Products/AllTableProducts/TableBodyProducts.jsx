import React, { useEffect, useState } from "react";
import { IconButton, TableCell, TableRow, Tooltip } from "@mui/material";

import { IoCreateOutline, IoTrashOutline } from "react-icons/io5";
import { getProviderById } from "../../../actions/providers.action";
import Delete from "../../Delete/Delete";
import { useEntities } from "../../../context/EntitiesContext";
import { deleteProducts } from "../../../actions/products.action";

const TableBodyProducts = ({
  id:idProduct, nameProduct, price, amount, expirationDate, provider:idProvider
}) => {

  const [provider, setProvider]= useState("");
  const {getProductsData} =useEntities();

  const getProviderInfo = async ()=>{
    try{
      const { data }= await getProviderById(idProvider);
      const { provider:name } = data;
      setProvider(name)
      console.log(data)
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    getProviderInfo()
  }, [])
 
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
          <Tooltip title="Edit">
            <IconButton
              size="medium"
              edge="start"
              color="primary"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <IoCreateOutline />
            </IconButton>
          </Tooltip>

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
