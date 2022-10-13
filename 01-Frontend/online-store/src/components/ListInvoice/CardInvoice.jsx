import { Box, Paper, Stack, Typography } from "@mui/material"

const CardInvoice = () => {
  return (<>
    <Paper >
      <Stack direction="row" alignItems="center" justifyContent="space-around" padding={2}>
      <Box>
          <Typography fontWeight={700}>Code:</Typography>
          <p>1</p>
        </Box>
        <Box>
          <Typography fontWeight={700}>Date:</Typography>
          <p>12/10/2022</p>
        </Box>
        <Box>
          <Typography fontWeight={700}>Customer:</Typography>
          <p>Antonio Perez</p>
        </Box>
        <Box>
          <Typography fontWeight={700}>Total</Typography>
          <Typography fontWeight={700}>$40.000</Typography>
        </Box>
      </Stack>
    </Paper>
  </>)
}

export default CardInvoice