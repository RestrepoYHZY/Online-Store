import { Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <Container>
      <Paper style={style}>
        <Typography
          variant="h4"
          textAlign="center"
          style={{ marginBottom: "1rem" }}
        >
          Uh-Oh...
        </Typography>
        <Typography
          variant="h2"
          textAlign="center"
          style={{ fontWeight: "700" }}
        >
          404
        </Typography>
        <Typography variant="h4" textAlign="center">
          Page not found
        </Typography>
      </Paper>
    </Container>
  );
};

const style = {
  position: "absolute",
  width: "40%",
  height: "40%",
  backgroundColor: "#fff",
  padding: "60px 40px",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "8px",
};
export default PageNotFound;
