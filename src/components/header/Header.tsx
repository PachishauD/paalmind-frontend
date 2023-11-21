import { ButtonSecondary, H3, H4 } from "components/styleguide/styleguide";
import { colors } from "core/constants/styleguide.const";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "core/hooks/rtkHooks";
import { adminPath, homePath } from "core/util/pathBuilder.util";
import SigningModal from "components/modal/sign-in-modal/SignInModal";
import { setShowSignInModalAction } from "core/store/slices/modalSlice";
import { Sign } from "crypto";
import { NULL } from "sass";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showSignInModal } = useAppSelector((state) => state.modal);

  const signIn = () => {
    dispatch(setShowSignInModalAction(true));
  };

  const handleBack = () => {
    navigate(homePath());
		localStorage.removeItem("signed_email")
  };

  useEffect(() => {
    localStorage.getItem("signed_email");
  }, []);

	console.log('useLocation().pathname', useLocation().pathname === adminPath())
  return (
    <StyledContainer>
      <H4
        style={{ color: `${colors.neutrals7}`, fontFamily: "cursive" }}
      >{`pAal mInd`}</H4>
      {useLocation().pathname !== adminPath() ? (
        <StyledSignInButton onClick={signIn}>{`Sign In`}</StyledSignInButton>
      ) : (
        <StyledSignInButton
          onClick={handleBack}
        >{`Back`}</StyledSignInButton>
      )}
      {showSignInModal && <SigningModal />}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${colors.neutrals1};
  padding: 15px 0px;
  z-index: 2;
  margin-top: 0px;
`;

const StyledSignInButton = styled(ButtonSecondary)`
  background-color: ${colors.neutrals2};
  color: ${colors.neutrals8};
  font-family: cursive;
`;
export default Header;
