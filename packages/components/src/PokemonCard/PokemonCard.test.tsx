import React from "react";
import { render } from "@testing-library/react";
import { PokemonCard } from "./PokemonCard";

const mockCardData = {
  name: "Pikachu",
  height: 40,
  weight: 60,
  location: "https://example.com/pikachu",
  abilities: [
    {
      ability: {
        name: "Static",
        url: "https://example.com/ability/static",
      },
    },
    {
      ability: {
        name: "Lightning Rod",
        url: "https://example.com/ability/lightning-rod",
      },
    },
  ],
  image: "https://example.com/pikachu-image.jpg",
};

describe("PokemonCard component", () => {
  test("renders Pokemon name", () => {
    const { getByText } = render(<PokemonCard {...mockCardData} />);
    const nameElement = getByText("Pikachu");
    expect(nameElement).toBeInTheDocument();
  });

  test("renders Pokemon height and weight", () => {
    const { getByText } = render(<PokemonCard {...mockCardData} />);
    const heightElement = getByText("Height: 40");
    const weightElement = getByText("Weight: 60");
    expect(heightElement).toBeInTheDocument();
    expect(weightElement).toBeInTheDocument();
  });

  test("renders Pokemon location link", () => {
    const { getByText } = render(<PokemonCard {...mockCardData} />);
    const locationLinkElement = getByText("https://example.com/pikachu");
    expect(locationLinkElement).toBeInTheDocument();
    expect(locationLinkElement).toHaveAttribute(
      "href",
      "https://example.com/pikachu"
    );
  });

  test("renders Pokemon abilities", () => {
    const { getByText } = render(<PokemonCard {...mockCardData} />);
    const ability1Element = getByText("Static");
    const ability2Element = getByText("Lightning Rod");
    expect(ability1Element).toBeInTheDocument();
    expect(ability2Element).toBeInTheDocument();
    expect(getByText).toMatchSnapshot();
  });
});
