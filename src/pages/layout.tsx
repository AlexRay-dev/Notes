import React, {FC} from 'react';
import Header from "../components/header/header";
import {Outlet} from "react-router-dom";
import {Box, Container, CssBaseline} from "@mui/material";

const Layout: FC = () => {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Box sx={{backgroundColor: "#FAFAFA"}}>
        <Container sx={{backgroundColor: "white"}}>
          <Outlet/>
        </Container>
      </Box>
    </>
  );
};

export default Layout;