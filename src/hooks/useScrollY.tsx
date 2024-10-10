import { useEffect, useState } from "react";

function useScrollY(threshold: (width: number) => boolean): boolean;
function useScrollY(): number;

function useScrollY(threshold?: (scroll: number) => boolean) {
  const [scrollData, setScrollData] = useState<number | boolean>(
    threshold ? threshold(window.scrollY) : window.scrollY
  );

  useEffect(() => {
    const handleScroll = () =>
      setScrollData(threshold ? threshold(window.scrollY) : window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrollData;
}

export default useScrollY;
