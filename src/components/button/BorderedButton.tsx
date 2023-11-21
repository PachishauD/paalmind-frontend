import React from "react";

import "./bordered-button.scss";
import styled from "styled-components";
import { colors } from "core/constants/styleguide.const";
import { H4 } from "components/styleguide/styleguide";

const BorderedButton = (props: {
//   iconSrc: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <StyledButton
      {...props.buttonProps}
      className={`bordered-button ${props.buttonProps?.className || ""}`}
    >
      {/* <img src={props.iconSrc} alt=""/> */}
      <H4 style={{ fontFamily: "cursive" }}>{`X`}</H4>
    </StyledButton>
  );
};

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.neutrals4};
    background-color: ${colors.neutrals1};
    &:hover {
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-color: ${colors.neutrals3};
    }
`;

export default BorderedButton;
