import React, { lazy } from "react";
import { styled } from "styled-components";

import {
  Caption1Bold,
  Caption2Bold,
} from "../../components/styleguide/styleguide";
import { RESPONSIVE } from "../../core/constants/responsive.const";

import Thema from "components/thema/Thema";
import Category from "components/category/Category";
import Visibles from "components/visibles/Visibles";
import HowItWorks from "components/open-telegram-bot/HowItWorks";
import SpriteAnimation from "components/open-telegram-bot/SpriteAnimation";
import PhoneSrc from "../../assets/how-it-works/real.png";
import Header from "components/header/Header";
// const Header = lazy(() => import("../../components/header/Header"));

const Home = () => {
  return (
    <>
      <Content>
        <Header />
        <Thema />
        <Category />
        <Visibles />
        <HowItWorks />
      </Content>
    </>
  );
};

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

export default Home;
