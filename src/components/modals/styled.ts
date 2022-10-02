import {Box, IconButton, Modal, styled, Typography} from "@mui/material";

export const StyledModal = styled(Modal)(() => ({
  backgroundColor: "rgba(69, 74, 99, .8)",
}));

export const ModalInner = styled(Box)(({theme}) => ({
  maxWidth: "470px",
  width: "100%",
  backgroundColor: 'white',
  padding: "40px 65px",
  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.16)",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  [theme.breakpoints.down('sm')]: {
    p: "20px"
  },
}));

export const ModalTitle = styled(Typography)(() => ({
  fontWeight: "500",
  textAlign: "center",
}));

export const ModalBackButton = styled(IconButton)(({theme}) => ({
  position: 'absolute',
  top: 12,
  right: 12,
  color: "#E5E5E5",
  ":hover": {
    color: theme.palette.secondary.light,
  },
}));