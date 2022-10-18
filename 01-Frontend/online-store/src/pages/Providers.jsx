import { Box, Typography } from '@mui/material'
import TableProviders from '../components/Providers/AllTablesProviders/TableProviders'
import ModalProvider from '../components/Providers/ModalProvider'

const Providers = () => {
 
  return (
    <>
    <Box style={{ margin: "2em" , marginTop: "5em"}}>
      <Typography variant="h5" >Providers </Typography>
      <ModalProvider/>
      
     
     <TableProviders/>
     
     </Box>
  </>
  )
}

export default Providers