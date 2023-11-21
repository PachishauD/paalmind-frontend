import { styled } from "styled-components";

import { RESPONSIVE } from "core/constants/responsive.const";
import { colors } from "core/constants/styleguide.const";
import IconSrc from "../../assets/category/Icon.png";
const Category = () => {
  return (
    <Content>
      <img src={IconSrc} alt=""></img>
      <SubTitleSection>
        <SubTitle style={{ color: `${colors.neutrals4}` }}>{`Incredible web3`}</SubTitle>
        <SubTitle style={{ color: `${colors.neutrals4}` }}>{`experience inside`}</SubTitle>
        <SubTitle>{`Telegram BOT`}</SubTitle>
      </SubTitleSection>
    </Content>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
	padding: 200px 0px;
`;

const SubTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	margin-top: -70px;
`;

const SubTitle = styled.h1`
  font-size: 44px;
  font-weight: 700;
  color: ${colors.neutrals8};
	margin: auto;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    font-size: 98px;
    font-weight: 700;
  }
`;

export default Category;
