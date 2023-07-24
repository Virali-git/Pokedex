import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Typography, Container, IconButton, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { appBarStyle, ContainerStyle } from "./Footer.styles";
import { PropsType } from "./Footer.types";

//type PropsType = { data: string };

const StyledAppBar = styled(AppBar)(({ theme }) => appBarStyle);
export const Footer: React.FC<PropsType> = ({ data }) => {
  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg" sx={ContainerStyle}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          All rights reserved
        </Typography>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </StyledAppBar>
  );
};
