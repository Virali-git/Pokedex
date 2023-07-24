import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header Component", () => {

  it("renders the app bar with correct props", () => {
    const  getByText  = render(<Header data="pokedex" />);

    expect(screen.getByText("pokedex")).toBeInTheDocument();
    expect(getByText).toMatchSnapshot();
  });
  it("render the correct styles required for header", () => {
    const { getByText } = render(<Header data="pokedex"/>);
    const appNameElement = getByText("pokedex");
    //testCases to check the required styles from CMS
    expect(appNameElement).toHaveStyle("font-size: 24px");
  });
});
