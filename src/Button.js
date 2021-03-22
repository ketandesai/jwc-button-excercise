import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  //fill, outline, ghost
  let width = "93px";
  let height = "35px";

  if (size === "medium") {
    width = "117px";
    height = "53px";
  }
  if (size === "large") {
    width = "152px";
    height = "65px";
  }

  let backgroundColor = `${COLORS.primary}`;
  let textColor = `${COLORS.white}`;
  let border = "none";
  let borderColor = `${COLORS.primary}`;
  if (variant === "outline") {
    backgroundColor = `${COLORS.white}`;
    textColor = `${COLORS.primary}`;
    border = "2px solid";
    borderColor = `${COLORS.primary}`;
  }

  if (variant === "ghost") {
    backgroundColor = `${COLORS.transparentGray15}`;
    textColor = `${COLORS.transparentGray75}`;
  }

  return (
    <Base
      style={{
        "--width": width,
        "--height": height,
        "--background": backgroundColor,
        "--border": border,
        "--border-color": borderColor
      }}
    >
      <Text
        style={{
          "--textcolor": textColor
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
`;

const PrimaryButton = styled(Base)`
  background: ${COLORS.primary};
`;

const Text = styled.span`
  width: 61px;
  height: 19px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  letter-spacing: -0.02em;
  text-transform: uppercase;

  /* white */
  color: var(--textcolor);
`;

export default Button;
