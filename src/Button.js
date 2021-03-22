import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  //fill, outline, ghost
  let width = "93px";
  let height = "35px";
  let fontSize = "16px";
  if (size === "medium") {
    width = "117px";
    height = "53px";
    fontSize = "18px";
  }
  if (size === "large") {
    width = "152px";
    height = "65px";
    fontSize = "25px";
  }

  let backgroundColor = `${COLORS.primary}`;
  let textColor = `${COLORS.white}`;
  let border = "none";
  let borderColor = `${COLORS.primary}`;
  let hoverColor = `${COLORS.primaryLight}`;
  let hoverTextColor = `${COLORS.white}`;
  let outline = "1px solid";
  let outlineColor = `${COLORS.primary}`;
  let focusBorder = "none";
  let focusBorderColor = `${COLORS.primary}`;
  if (variant === "outline") {
    backgroundColor = `${COLORS.white}`;
    textColor = `${COLORS.primary}`;
    hoverTextColor = `${COLORS.primary}`;
    border = "2px solid";
    focusBorder = border;
    borderColor = `${COLORS.primary}`;
    focusBorderColor = borderColor;
    hoverColor = `${COLORS.offwhite}`;
  }

  if (variant === "ghost") {
    backgroundColor = "#e5e5e5";
    textColor = `${COLORS.transparentGray75}`;
    hoverTextColor = `${COLORS.black}`;
    hoverColor = `${COLORS.transparentGray15}`;
    borderColor = `${COLORS.transparentGray75}`;
    outline = "none";
    focusBorder = "2px solid";
    focusBorderColor = `${COLORS.transparentGray75}`;
  }

  return (
    <Base
      style={{
        "--width": width,
        "--height": height,
        "--background": backgroundColor,
        "--border": border,
        "--border-color": borderColor,
        "--hover-color": hoverColor,
        "--outline": outline,
        "--outline-color": outlineColor,
        "--focus-border": focusBorder,
        "--focus-border-color": focusBorderColor
      }}
    >
      <Text
        style={{
          "--color": textColor,
          "--hover-color": hoverTextColor,
          "--font-size": fontSize
        }}
      >
        {children}
      </Text>
    </Base>
  );
};

const Base = styled.button`
  width: var(--width);
  height: var(--height);

  /* primary */
  background: var(--background);
  border-radius: 4px;
  box-sizing: border-box;
  border: var(--border);
  border-color: var(--border-color);

  &:hover {
    background: var(--hover-color);
  }

  &:focus {
    outline: var(--outline);
    outline-color: var(--outline-color);
    outline-offset: 5px;
    border: var(--focus-border);
    border-color: var(--focus-border-color);
  }
`;

const Text = styled.span`
  width: 61px;
  height: 19px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: var(--font-size);
  line-height: 19px;
  /* identical to box height */
  letter-spacing: -0.02em;
  text-transform: uppercase;

  /* white */
  color: var(--color);

  &:hover {
    color: var(--hover-color);
  }
`;

export default Button;
