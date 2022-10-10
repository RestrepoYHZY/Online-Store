import React, {useState} from "react";
import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { IoStorefrontOutline } from "react-icons/io5";
import { Box, Stack } from "@mui/system";
 
import { Link } from "react-router-dom";

const NavBarPage = () => {

  const [anchorElm, setAnchoElm] = useState(null);
  const [open, setOpen] = useState(false);
   
  const handleClose = ()=>{
    setAnchoElm(null);
    setOpen(false);
  }

  const  handleClick =(e)=>{
    setAnchoElm(e.currentTarget);
    setOpen(true);
  }
  return (
    <>
      <AppBar elevation={0} color='secondary'>
        <Toolbar>
          <Box sx={{display:'flex', justifyContent:'space-between', width:'100%'}} componet='div'>
            
          <Stack direction='row' alignItems='center' justifyContent='center' spacing={1}>
            {/* Icon and title */}
            <IoStorefrontOutline/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Online Store
            </Typography>
            </Stack>
           
             
            
            {/* Link */}
            <Box>
              <Stack direction='row' alignItems='center' justifyContent='center' spacing={4}>
            <Typography variant="h6" component="div" onClick={handleClick} sx={{ flexGrow: 1, cursor:'pointer' }}>
                  Invoce
            </Typography>
            <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose} to='/NewInvoce'>New Invoce</MenuItem> 
              <MenuItem onClick={handleClose}  to='/ListInvoce'>List Invoce</MenuItem> 
            </Menu>

          <Link  style={{color:'white', textDecoration:'none', cursor:'pointer'}} to='/Products'>Products</Link>
          <Link  style={{color:'white', textDecoration:'none', cursor:'pointer'}} to='/Costumers'>Costumers</Link>
          <Link  style={{color:'white', textDecoration:'none', cursor:'pointer'}} to='/Providers'>Providers</Link>


            </Stack>

            </Box>
          </Box>

        
        </Toolbar>
      </AppBar>
   
    </>
    
  )
}

export default NavBarPage
