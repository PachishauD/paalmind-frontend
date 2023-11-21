import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { CSSTransition } from "react-transition-group";

import { colors } from "core/constants/styleguide.const";
import { howItWorksData } from "./consts/HowItWorks.const";
import { RESPONSIVE } from "core/constants/responsive.const";
import { useWatchResize } from "core/hooks/useWatchResize";

const HowItWorks = () => {
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const { smallerThanTablet } = useWatchResize();

  const [currentHIWIndex, setCurrentHIWIndex] = useState(0);

  const handleScroll = () => {
    const bodyTop = document.body.getBoundingClientRect().top || 0;
    // quote module
    const currentPosition = window.scrollY;

    // how it works module
    const step1Bottom =
      (step1Ref.current?.getBoundingClientRect().bottom || 0) - bodyTop;
    const step2Bottom =
      (step2Ref.current?.getBoundingClientRect().bottom || 0) - bodyTop;
    const threshold = currentPosition + 98;
    setCurrentHIWIndex(
      step1Bottom > threshold ? 0 : step2Bottom > threshold ? 1 : 2
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <StyledHowItWorksModule>
        {!smallerThanTablet && (
          <>
            <div className="right">
              <div className="sticky-image-container">
                {howItWorksData.map((data, index) => (
                  <CSSTransition
                    key={index}
                    classNames="imagetransition"
                    timeout={500}
                    in={index === currentHIWIndex}
                  >
                    <img
                      src={data.imageSrc}
                      alt="hiw"
                      style={{
                        display: index === currentHIWIndex ? "block" : "none",
                      }}
                    />
                  </CSSTransition>
                ))}
              </div>
            </div>
          </>
        )}
        <div className="left">
          {howItWorksData.map((data, index) => (
            <div
              key={index}
              ref={index === 0 ? step1Ref : index === 1 ? step2Ref : step3Ref}
            >
              <StyledCard
                key={index}
                ref={index === 0 ? step1Ref : index === 1 ? step2Ref : step3Ref}
              >
                <img src={howItWorksData[index].logoSrc} alt=""></img>
                <StyledTitle>{data.title}</StyledTitle>
                <StyledDescription>{data.description}</StyledDescription>
              </StyledCard>
              <br />
              {smallerThanTablet && (
                <div
                  style={{
                    marginTop: "87px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={howItWorksData[index].imageSrc}
                    alt="hiw"
                    style={{ transition: `opacity 0.5s ease-in-out` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </StyledHowItWorksModule>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 30px;
  color: ${colors.neutrals8};
  text-align: center;
`;

const StyledDescription = styled.h1`
  font-size: 15px;
  color: ${colors.neutrals5};
  text-align: center;
  font-weight: 400;
`;
const StyledLeft = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

const StyledRight = styled.div`
  width: 40%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 300px;
`;

const StyledCard = styled.div`
  width: 80%;
  background-color: ${colors.lightBlack};
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 10px;
`;

export const StyledHowItWorksModule = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  max-width: 100%;
  .left {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 248px;
    @media screen and (min-width: ${RESPONSIVE.tablet}) {
      gap: 440px;
    }
    .title {
      display: block;
      margin: 12px 0px 24px;
    }
    @media screen and (min-width: ${RESPONSIVE.tablet}) {
      margin: 10px 0px 24px;
      padding: 250px 0px;
    }
  }
  .right {
    position: relative;
    .sticky-image-container {
      position: sticky;
      top: 150px;
      width: fit-content;
      margin-left: auto;
      .imagetransition-enter {
        opacity: 0;
      }
      .imagetransition-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in;
      }
      .imagetransition-exit {
        opacity: 1;
      }
      .imagetransition-exit-active {
        opacity: 0;
        transition: opacity 300ms ease-in;
      }
    }
  }
`;
export default HowItWorks;
