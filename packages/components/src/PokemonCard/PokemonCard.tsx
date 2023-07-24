import React from "react";
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
  Link,
} from "@mui/material";
import {
  LinkStyle,
  TypoBoxStyle,
  ListItemStyle,
  CardStyle,
  Boxstyle,
  CardMediaStyle,
  CardContentStyle,
  CardContentTypoStyle,
  bottomTextStyle,
  BoxMarginStyle,
  ColumnTypoStyle,
} from "./PokemonCard.styles";
import { CardType } from "./PokemonCard.types";

export const PokemonCard = (props: CardType) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <Card sx={CardStyle}>
      {loading && (
        <Box sx={Boxstyle}>
          <CircularProgress color="secondary" />
        </Box>
      )}

      <CardMedia
        sx={CardMediaStyle}
        component="img"
        image={props.image}
        title={props.name}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
      <CardContent sx={CardContentStyle}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={CardContentTypoStyle}
        >
          {props.name}
        </Typography>
        <Box sx={bottomTextStyle}>
          <Typography variant="body2" color="text.secondary">
            Height: {props.height}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {props.weight}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={ColumnTypoStyle}>
          Location:
          <Link href={props.location} target="_blank" sx={LinkStyle}>
            {props.location}
          </Link>
        </Typography>
        <Box sx={BoxMarginStyle}>
          <Typography variant="h6" component="div" sx={TypoBoxStyle}>
            Abilities
          </Typography>
          <List dense={false} sx={ListItemStyle}>
            {props?.abilities?.map((ability, i) => (
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
