import {Card, CardActionArea, CardContent, styled, Typography} from "@mui/material";

export const StyledNoteCard = styled(Card)(() => ({
  minWidth: "250px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
  borderRadius: "0",
  backgroundColor: "white",
  minHeight: "110px",
  height: "100%",

  "&:hover": {
    boxShadow: "0 16px 36px rgba(0, 0, 0, 0.05)",
  }
}));

export const StyledActionArea = styled(CardActionArea)(() => ({
  height: "100%",
}));

export const StyledCardContent = styled(CardContent)(() => ({
  padding: "19px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const StyledCardTitle = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "1.2",
  wordWrap: "break-word",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
}));