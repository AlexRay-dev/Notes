import {Box, IconButton, styled, Typography} from "@mui/material";

export const NoteInfoInner = styled(Box)(() => ({
  paddingTop: "27px",
  minHeight: "calc(100vh - 72px)",
}));

export const NoteInfoTitle = styled(Typography)(({theme}) => ({
  lineHeight: "1.2",
  wordWrap: "break-word",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    fontSize: "28px",
  },
}));

export const NoteInfoBackButton = styled(IconButton)(({theme}) => ({
  color: "#E6E6E6",
  "&:hover": {
    color: theme.palette.secondary.light
  },
}));