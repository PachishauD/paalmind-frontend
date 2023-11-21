import { colors } from "core/constants/styleguide.const";
import React from "react";
import styled from "styled-components";
import UsersInformation from "./children/UsersInformation";

const DashboardTable = () => {
	const mockData = [
		{
			username: "daniel",
			walletAddress: "0xD22fcc81E96B70Dd51ea238d361e19DA6d7B2D2C",
			won: 5,
			loss: 4,
			pending: 8,
		},
		{
			username: "newyork4life",
			walletAddress: "0xD22fcc81E96B70Dd51ea238d361e19DA6d7B2D2C",
			won: 1,
			loss: 6,
			pending: 0,
		},
		{
			username: "thomas",
			walletAddress: "0xD22fcc81E96B70Dd51ea238d361e19DA6d7B2D2C",
			won: 10,
			loss: 4,
			pending: 2,
		},
		{
			username: "mula",
			walletAddress: "0xD22fcc81E96B70Dd51ea238d361e19DA6d7B2D2C",
			won: 10,
			loss: 4,
			pending: 2,
		},
		{
			username: "michal",
			walletAddress: "0xD22fcc81E96B70Dd51ea238d361e19DA6d7B2D2C",
			won: 1,
			loss: 5,
			pending: 7,
		},
		// {
		// 	username: "chang",
		// 	walletAddress: "0xD22fcc81E96B70Dd51ea238d361e19DA6d7B2D2C",
		// 	won: 5,
		// 	loss: 6,
		// 	pending: 1,
		// },
		// {
		// 	username: "wrochan",
		// 	walletAddress: "0xD22fcc81E96B70Dd51ea238d361e19DA6d7B2D2C",
		// 	won: 6,
		// 	loss: 4,
		// 	pending: 10,
		// },
	]
	return (
		<StyledContainter>
      <Ellipse29 />
      <Ellipse21 />
      <Ellipse23 />
      <Ellipse25 />
      <Ellipse27 />
			{mockData.map((mock, i) => {
				return(
					<UsersInformation 
						key={i + 1}
						no={i + 1}
						username={mock.username}
						walletAddress={mock.walletAddress}
						won={mock.won}
						loss={mock.loss}
						pending={mock.pending}
					/>
				)
			})}
		</StyledContainter>
	);
};

const StyledContainter = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 300px;
`;


const Ellipse29 = styled.div`
  width: 1072px;
  height: 1072px;
  border: 1px solid ${colors.neutrals1};
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Ellipse27 = styled.div`
  width: 919.42px;
  height: 919.42px;
  border: 1px solid ${colors.neutrals1};
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Ellipse25 = styled.div`
  width: 776px;
  height: 776px;
  border: 1px solid ${colors.neutrals1};
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Ellipse23 = styled.div`
  width: 470px;
  height: 470px;
  border: 1px solid ${colors.neutrals1};
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Ellipse21 = styled.div`
  width: 642px;
  height: 642px;
  border: 1px solid ${colors.neutrals1};
  border-radius: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default DashboardTable;
