import React, {FC} from 'react';
import {AppBar, Toolbar} from "@mui/material";

const Header:FC = () => {
  return (
    <AppBar position={"static"} >
      <Toolbar sx={{
          bgcolor: "white",
          minHeight: "72px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.06)",
        }}>
      </Toolbar>
    </AppBar>
  );
};

export default Header;