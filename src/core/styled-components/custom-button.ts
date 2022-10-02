import {Button, styled} from "@mui/material";

export const CustomButton = styled(Button)(() => ({
  display: "flex",
  width: "100%",
  color: "white",
  padding: "15px 32px",
  boxShadow: "none",
  borderRadius: "25px",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: 1.2,
  textTransform: "none",
  whiteSpace: "nowrap",
}));

export const CustomHidingButton = styled(CustomButton)(({theme}) => ({
  maxWidth: "230px",
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));