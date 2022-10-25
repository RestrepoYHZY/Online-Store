import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { useEntities } from '../../../context/EntitiesContext'
import Delete from '../../Delete/Delete'
import ModalCustomer from '../ModalCustomer'
import { deleteCustomer } from "../../../actions/customer.action";


const TableBodyCustomers = ({
    id: idCustomer,
    name,
    lastName,
    document,
    phoneNumber,
    email,
}) => {
  const { getCustomerData } = useEntities();
  return (
    <>
    <TableRow>
        <TableCell align="center">{ idCustomer }</TableCell>
        <TableCell align="center">{ name }</TableCell>
        <TableCell align="center">{ lastName }</TableCell>
        <TableCell align="center">{ document }</TableCell>
        <TableCell align="center">{ phoneNumber }</TableCell>
        <TableCell align="center">{ email }</TableCell>
        <TableCell align="center">
        <ModalCustomer id={ idCustomer }/>
          <Delete id={ idCustomer }
          name={ `${ name } ${ lastName }` }
          entity="customer"
          getData={ getCustomerData }
          deleteAction={ deleteCustomer }
          />
        </TableCell>
      </TableRow>
    </>
  )
}

export default TableBodyCustomers