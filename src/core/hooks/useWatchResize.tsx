
import { useEffect, useState } from "react";
import { RESPONSIVE } from "../constants/responsive.const";
import { debouncer } from "../util/debouncer.util";

export const useWatchResize = (options?: { debouncer?: number; }) => {
  const [, setEmptyState] = useState({});
  const refresh = debouncer(() => setEmptyState({}), options?.debouncer || 0);

  useEffect(() => {
    const resizeListener = () => {
      refresh();
    };

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  });

  return {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    smallerThanMobile: window.innerWidth < pixelToNumber(RESPONSIVE.mobile),
    smallerThanTablet: window.innerWidth < pixelToNumber(RESPONSIVE.tablet),
    smallerThanLarge: window.innerWidth < pixelToNumber(RESPONSIVE.large),
    smallerThanXLarge: window.innerWidth < pixelToNumber(RESPONSIVE.xLarge),
  };
};

export const pixelToNumber = (pixelString: string) => {
  if (pixelString.length > 2) {
    return +pixelString.replace("px", "");
  }
  else return 0;
};