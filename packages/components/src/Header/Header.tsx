import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

type PropsType = { data: string };

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "linear-gradient(135deg, #ff6600 30%, #ffad33 90%)", 
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", 
}));
export const Header: React.FC<PropsType> = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", 
              fontFamily: "Pacifico, cursive", 
              fontSize: "24px",
            }}
          >
            {data}
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};
