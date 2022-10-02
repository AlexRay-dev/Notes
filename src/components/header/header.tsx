import React, {FC} from 'react';
import {AppBar} from "@mui/material";
import {StyledToolbar} from "./styled";

const Header: FC = () => {
  return (
    <AppBar position="static">
      <StyledToolbar/>
    </AppBar>
  );
};

export default Header;