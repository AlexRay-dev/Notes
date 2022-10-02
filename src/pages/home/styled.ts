import {Box, styled} from "@mui/material";

export const HomeInner = styled(Box)`
  min-height: calc(100vh - 72px);
  ${({theme}) => theme.breakpoints.up("xs")} {
    padding-top: 84px;
    font-size: 16px;
  },
  ${({theme}) => theme.breakpoints.up("sm")} {
    padding-top: 20px;
  },
`;

export const HomeList = styled(Box)`
  padding-bottom: 20px;
  ${({theme}) => theme.breakpoints.up("xs")} {
    padding-top: 20px;
  },
  ${({theme}) => theme.breakpoints.up("sm")} {
    padding-top: 40px;
  },
`;