import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer Component", () => {
  it("renders the 'All rights reserved' text", () => {
    render(<Footer data="Test Data" />);
    const allRightsReservedText = screen.getByText(/All rights reserved/i);
    expect(allRightsReservedText).toBeInTheDocument();
  });

  it("renders the social media icons", () => {
    const {getByText} =render(<Footer data="Test Data" />);
    const facebookIcon = screen.getByLabelText("Facebook");
    const instagramIcon = screen.getByLabelText("Instagram");
    const linkedInIcon = screen.getByLabelText("LinkedIn");

    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
    expect(getByText).toMatchSnapshot();
  });
});
