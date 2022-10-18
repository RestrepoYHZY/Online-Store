import { Box, Paper, Stack, Typography } from "@mui/material"

const CardTotal = () => {
  return (<>
    <Paper >
      <Stack direction="row" alignItems="center" justifyContent="space-around" padding={2}>
        <Box>
          <Typography fontWeight={700}>Date</Typography>
          <Typography>12/10/2022</Typography>
        </Box>
        <Box>
          <Typography fontWeight={700}>Customer:</Typography>
          <Typography>Antonio Perez</Typography>
        </Box>
        <Box>
          <Typography fontWeight={700}>Total</Typography>
          <Typography fontWeight={700}>$20.000</Typography>
        </Box>
      </Stack>
    </Paper>
  </>)
}

export default CardTotal