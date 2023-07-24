import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

 type AbilitiesType = {
    ability: {
      name: string;
      url: string;
    };
  };
 interface CardType {
    name: string;
    height?: number;
    weight?: number;
    location?: string;
    abilities?: AbilitiesType[];
    image?:string;
  }

export const PokemonCard  = (props: CardType) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {loading && (
        <Box
          sx={{
            width: "100%",
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f3f3f3",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}

      <CardMedia
        sx={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
        component="img"
        image={props.image}
        title={props.name}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {props.name}
        </Typography>
        <Box sx={{ display: "flex", gap: 5, justifyContent: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Height: {props.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {props.weight}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", flexDirection: "column", marginTop: "10px" }}
        >
          Location:
          <a
            href={props.location}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#007bff",
              fontWeight: "bold",
            }}
          >
            {props.location}
          </a>
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#333" }}
          >
            Abilities
          </Typography>
          <List dense={false} sx={{ lineHeight: "1px", textAlign: "left" }}>
            {props.abilities.map((ability, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={ability.ability.name}
                  secondary={ability.ability.url}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );
};

