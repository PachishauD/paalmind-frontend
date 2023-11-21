import Header from "components/header/Header";
import DashboardTable from "components/table/DashboardTable";
import { colors } from "core/constants/styleguide.const";
import React from "react";
import styled from "styled-components";

const Admin = () => {
	return (
		<StyledContainter>
			<Header />
			<DashboardTable />
		</StyledContainter>
	);
};

const StyledContainter = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	background-color: ${colors.neutrals3};
	width: 100%;
	height: 10000px;
`;

export default Admin;