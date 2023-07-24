import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Typography,
  Container,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type IProps = { data: string };

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: " #ff6600", 
  top: "auto",
  bottom: 0,
  color: "#000",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
}));
export const Footer: React.FC<IProps> = ({ data }) => {
  return (
    <StyledAppBar
      position="static"
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          All rights reserved
        </Typography>
        <div style={{ display: "flex", gap: "5px" }}>
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </div>
      </Container>
    </StyledAppBar>
  );
};
