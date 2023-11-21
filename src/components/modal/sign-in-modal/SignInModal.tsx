import React, { ChangeEvent, useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { RESPONSIVE } from "../../../core/constants/responsive.const";
import { colors } from "../../../core/constants/styleguide.const";
import { useAppDispatch } from "../../../core/hooks/rtkHooks";
import { setShowSignInModalAction } from "../../../core/store/slices/modalSlice";
import {
  ButtonSecondary,
  Caption1,
  Caption2,
  Flex,
  H3,
  H4,
} from "../../styleguide/styleguide";
import Modal from "../Modal";
import ModalContent from "../children/modal-content/ModalContent";
import { adminPath } from "core/util/pathBuilder.util";

const SigningModal = () => {
  const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [isError, setIsError] = useState(false);
  
	const closeModal = () => {
    dispatch(setShowSignInModalAction(false));
  };

	const confirm = () => {
		if (emailValue === "newyork4life" && passwordValue === "Pass!234") {
			dispatch(setShowSignInModalAction(false));
			navigate(adminPath());
			localStorage.setItem("signed_email", emailValue);
		} else {
			setIsError(true);
		}
	};

	
	const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
		setEmailValue(event.target.value);
	}
	const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPasswordValue(event.target.value);
	}
  return (
    <Modal>
      <ModalContent onClose={closeModal}>
        <StyledContainer>
          <StyledTitle>{`Sign In`}</StyledTitle>
					{isError && <StyledErrorgMessage>{`Email or password are incorrect!`}</StyledErrorgMessage>}
					<StyledDiv>
						<StyledInput placeholder={`Enter Email`} type="text" value={emailValue} onChange={handleEmail}></StyledInput>
					</StyledDiv>
					<StyledDiv>
						<StyledInput placeholder={`Enter password`} type="password" value={passwordValue} onChange={handlePassword}></StyledInput>
					</StyledDiv>
					<StyledButton onClick={confirm}>{`Confirm`}</StyledButton>
        </StyledContainer>
      </ModalContent>
    </Modal>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledTitle = styled(H4)`
  font-family: cursive;
  color: ${colors.neutrals8};
`;

const StyledButton = styled(ButtonSecondary)`
	font-family: cursive;
	width: 100%;
`;

const StyledDiv = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	border-radius: 10px;
	border: 1px solid ${colors.neutrals3};
	width: 100%;
	height: 50px;
	background-color: ${colors.neutrals1};
`;

const StyledInput = styled.input`
	position: absolute;
	background-color: ${colors.neutrals1};
	width: 90%;
	top: 10px;
	font-size: 24px;
	font-family: cursive;
	color: ${colors.primaryGreen};
	border: 0px solid ${colors.neutrals1};
	border-width: 0px;
	&:focus {
		outline: none;
	}
`;	


const StyledErrorgMessage = styled(Caption1)`
  margin-top: 8px;
  height: 20px;
  color: ${colors.primaryPink};
  align-self: flex-start;
  &.invalid {
    margin-bottom: 12px;
    line-height: 16px;
  }
`;
export default SigningModal;
