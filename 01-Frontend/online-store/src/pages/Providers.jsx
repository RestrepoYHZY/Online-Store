import { Box, Typography } from '@mui/material'
import ModalNew from '../components/Providers/ModalNew'
import TableProviders from '../components/Providers/TableProviders'

const Providers = () => {
  return (
    <>
    <Box style={{ margin: "2em" , marginTop: "5em"}}>
      <Typography variant="h5" >Providers</Typography>
      <ModalNew/>
     <TableProviders/>
     
     </Box>
  </>
  )
}

export default Providers