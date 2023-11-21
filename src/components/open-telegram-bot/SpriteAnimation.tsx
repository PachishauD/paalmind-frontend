import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { styled } from "styled-components";

gsap.registerPlugin(ScrollTrigger);

interface SpriteAnimationProps {
  spriteUrl: string;
  frameWidth: number;
  frameHeight: number;
  numFrames: number;
  frameRate: number;
}

const SpriteAnimation: React.FC<SpriteAnimationProps> = ({
  spriteUrl,
  frameWidth,
  frameHeight,
  numFrames,
  frameRate,
}) => {
  const spriteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spriteElement = spriteRef.current;

    if (spriteElement) {
      const spriteTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: spriteElement,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      const spriteAnimation = gsap.to(spriteElement, {
        backgroundPositionX: `-${frameWidth * (numFrames - 1)}px`,
        repeat: -1,
        duration: numFrames / frameRate,
        ease: "steps(" + 1 + ")",
      });

      spriteTimeline.add(spriteAnimation);
    }
  }, [frameWidth, frameHeight, numFrames, frameRate]);

  return (
      <div
        ref={spriteRef}
        style={{
          width: frameWidth,
          height: frameHeight,
          backgroundImage: `url(${spriteUrl})`,
          backgroundRepeat: "no-repeat",
        }}
      />
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SpriteAnimation;
