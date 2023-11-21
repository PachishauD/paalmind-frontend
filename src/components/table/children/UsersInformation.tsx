import { colors } from "core/constants/styleguide.const";
import React from "react";
import styled from "styled-components";

interface Props {
  no: number;
  username: string;
  walletAddress: string;
	won: number,
	loss: number,
	pending: number
}

const UsersInformation = (props: Props) => {
  const { no, username, walletAddress, won, loss, pending } = props;
  return (
    <StyledContanier className={no % 2 === 0 ? "odd" : ""}>
      <StyledNo>
        <h3>{no}</h3>
      </StyledNo>
      <StyledUserName>
        <h3>{username}</h3>
      </StyledUserName>
      <StyledWalletAddress>
        <h3>{walletAddress}</h3>
      </StyledWalletAddress>
			<StyledWon>
				<h3>{won} won</h3>
			</StyledWon>
			<StyledLoss>
				<h3>{loss} loss</h3>
			</StyledLoss>
			<StyledPending>
				<h3>{pending} pending</h3>
			</StyledPending>
    </StyledContanier>
  );
};

const StyledContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${colors.neutrals1};
  color: ${colors.neutrals7};
  font-family: cursive;
  height: 80px;
  z-index: 0;
  border-radius: 20px;
	&:hover {
		background-color: ${colors.neutrals2};
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
  &.odd {
    background-color: ${colors.neutrals3};
    z-index: 1;
		&:hover {
			background-color: ${colors.neutrals2};
			transition: all 0.2s ease-in-out;
			cursor: pointer;
		}
  }
`;

const StyledNo = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUserName = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWalletAddress = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWon = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
	color: ${colors.primaryGreen};
`;

const StyledLoss = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
	color: ${colors.primaryPink};
`;

const StyledPending = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
	color: ${colors.accentTan};
`;

export default UsersInformation;
