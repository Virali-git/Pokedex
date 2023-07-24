import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "./PrimaryButton";

describe("PrimaryButton", () => {
  const buttonText = "Click me";
  const onClickFunction = jest.fn();

  test("renders button with correct text", () => {
    const { getByText } = render(
      <PrimaryButton
        buttonText={buttonText}
        onClickFunction={onClickFunction}
        className={undefined}
      />
    );
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders button with correct class name", () => {
    const customClassName = "custom-button";
    const { container } = render(
      <PrimaryButton
        className={customClassName}
        buttonText={buttonText}
        onClickFunction={onClickFunction}
      />
    );
    const buttonWrapperElement = container.firstChild;
    expect(buttonWrapperElement).toHaveClass(customClassName);
  });

  test("calls onClickFunction when the button is clicked", () => {
    const { getByText } = render(
      <PrimaryButton
        buttonText={buttonText}
        onClickFunction={onClickFunction}
        className={undefined}
      />
    );
    const buttonElement = getByText(buttonText);
    fireEvent.click(buttonElement);
    expect(onClickFunction).toHaveBeenCalled();
  });

  test("applies the correct styles to the button", () => {
    const { getByText } = render(
      <PrimaryButton
        buttonText={buttonText}
        onClickFunction={onClickFunction}
        className={undefined}
      />
    );
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toHaveStyle({
      border: "2px solid #000",
      backgroundColor: "#ADD8E6",
      color: "#000",
    });
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <PrimaryButton
        buttonText={buttonText}
        onClickFunction={onClickFunction}
        className={undefined}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
