import {Box, FormControl, styled} from "@mui/material";
import {CustomButton} from "../../../core/styled-components/custom-button";

export const FormInner = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px",
}));

export const FormItem = styled(FormControl)(() => ({
  marginBottom: "24px",
}));

export const FormButton = styled(CustomButton)(() => ({
  maxWidth: "177px",
  marginTop: "16px",
}));