
import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import { colors } from "../../core/constants/styleguide.const";

interface Props {
	placeholder: string,
	type: string,
	value: string
}

const Input = ( props: Props ) => {
	const [elementValue, setElementValue] = useState("")
	const { placeholder , type } = props;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setElementValue(event.target.value)
	}
	return (
		<StyledContainer>
			<StyledInput placeholder={placeholder} type={type} value={elementValue} onChange={handleChange}/>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
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

export default Input;