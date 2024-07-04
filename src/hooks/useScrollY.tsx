import { useState } from "react";

const useScrollY = (threshold?: (scroll: number) => boolean) => {
  const [scrollData, setScrollData] = useState<number | boolean>(
    threshold ? threshold(window.scrollY) : window.scrollY
  );

  window.addEventListener("scroll", () =>
    setScrollData(threshold ? threshold(window.scrollY) : window.scrollY)
  );

  return scrollData;
};

export default useScrollY;
