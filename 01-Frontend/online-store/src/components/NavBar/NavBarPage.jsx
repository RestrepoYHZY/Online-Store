import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { IoStorefrontOutline } from "react-icons/io5";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

import "./index.css";

import { Link } from "react-router-dom";

const NavBarPage = () => {

  const navigation = useNavigate();

  const [anchorElm, setAnchoElm] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchoElm(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchoElm(e.currentTarget);
    setOpen(true);
  };
  return (
    <>
      <AppBar elevation={0} color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigation("/NewInvoce")}
          >
            <IoStorefrontOutline />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Online Store
          </Typography>

          {/* Link */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
          >
            <Typography
              variant="h6"
              component="div"
              onClick={handleClick}
              sx={{ flexGrow: 1, cursor: "pointer" }}
            >
              Invoce
            </Typography>

            <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  to="/NewInvoce"
                >
                  New Invoce
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  style={{
                    color: "black",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  to="/ListInvoce"
                >
                  List Invoice
                </Link>
              </MenuItem>
            </Menu>
            <Typography variant="h6">
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                to="/Products"
              >
                Products
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                to="/Customers"
              >
                Costumers
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                to="/Providers"
              >
                Providers
              </Link>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBarPage;
