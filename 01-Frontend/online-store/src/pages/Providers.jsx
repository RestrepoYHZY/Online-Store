import { Box, Typography } from '@mui/material'
import TableProviders from '../components/Providers/AllTablesProviders/TableProviders'
import ModalNew from '../components/Providers/ModalNew'


const Providers = () => {
  return (
    <>
    <Box style={{ margin: "2em" , marginTop: "5em"}}>
      <Typography variant="h5" >Providers </Typography>
      <ModalNew/>
     <TableProviders/>
     
     </Box>
  </>
  )
}

export default Providers