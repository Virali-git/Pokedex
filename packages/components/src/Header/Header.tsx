import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { HeaderTypoStyle, AppBarStyle } from "./Header.styles";

type PropsType = { data: string };

const StyledAppBar = styled(AppBar)(() => AppBarStyle);
export const Header: React.FC<PropsType> = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={HeaderTypoStyle}>
            {data}
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
