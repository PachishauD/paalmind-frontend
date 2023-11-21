import { RESPONSIVE } from "core/constants/responsive.const";
import { colors } from "core/constants/styleguide.const";
import React from "react";
import { styled } from "styled-components";

const Visibles = () => {
  return (
    <Container>
      <Content>
        <StyledLeft>
          <Tracking />
          <SwapInTelegram />
        </StyledLeft>
        <StyledRight>
          <AnyAssets />
          <AdvancedFeatures />
          <Secure />
        </StyledRight>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    padding: 24px 100px;
  }
  @media screen and (min-width: ${RESPONSIVE.large}) {
    padding: 24px 200px;
  }
	
  background-color: black;
`;

const Content = styled.div`
	width: 100%;
  display: flex;
  flex-direction: column;

  gap: 24px;
  padding: 24px;
  @media screen and (min-width: ${RESPONSIVE.tablet}) {
    flex-direction: row;
    gap: 24px;
    padding: 24px;
  }
`;

const StyledLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const StyledRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const Tracking = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 32px;
  height: 840px;
  background-color: ${colors.lightBlack};
`;

const SwapInTelegram = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 32px;
  height: 840px;
  background-color: ${colors.lightBlack};
`;

const AnyAssets = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 32px;
  height: 546px;
  background-color: ${colors.lightBlack};
`;

const AdvancedFeatures = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 32px;
  height: 546px;
  background-color: ${colors.lightBlack};
`;

const Secure = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 32px;
  height: 546px;
  background-color: ${colors.lightBlack};
`;
export default Visibles;
