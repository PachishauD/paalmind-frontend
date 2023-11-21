import React from "react";
import { styled } from "styled-components";
import { colors } from "../../core/constants/styleguide.const";

import BottomSrc from "../../assets/thema/Header - Bottom.png";
import LogoSrc from "../../assets/thema/Logo.png";
import PhoneSrc from "../../assets/thema/iPhoneBot.png";
import { RESPONSIVE } from "core/constants/responsive.const";
import { H4 } from "components/styleguide/styleguide";

const Thema = () => {
  return (
    <Content>
      <Ellipse29 />
      <Ellipse21 />
      <Ellipse23 />
      <Ellipse25 />
      <Ellipse27 />
      <PhoneImage src={PhoneSrc} style={{ zIndex: 1, marginTop: "20px" }}/>
      {/* <img src={LogoSrc} alt="" style={{ zIndex: 1 }}></img> */}
      <H4 style={{ color: `${colors.neutrals8}`, fontFamily: "cursive" }}>{`Enjoy`}</H4>
      <TitleSection>
        <Title>{`pAalmInd`}</Title>
        <Body>{`Enjoy Betting, swap, and tracking assets on Telegram`}</Body>
      </TitleSection>
      <img src={BottomSrc} alt="" style={{ width: "100%", zIndex: 0 }}></img>
    </Content>
  );
};

const Content = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  gap: 100px;
  font-family: cursive;
  margin-top: 70px;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 90px;
  font-weight: 600;
  text-align: center;
  color: ${colors.neutrals8};
  margin: auto;
  z-index: 1;
  @media screen and (min-width: ${RESPONSIVE.small}) {
    font-size: 180px;
  }
`;

const Body = styled.p`
  font-size: 22px;
  line-height: 28px;
  font-weight: 500;
  color: ${colors.neutrals8};
  text-align: center;
  z-index: 1;
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

const PhoneImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
export default Thema;
