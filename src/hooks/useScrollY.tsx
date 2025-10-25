import { useEffect, useState } from "react";

const useScrollY = () => {
  const [scrollData, setScrollData] = useState<number>(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setScrollData(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollData;
};

export default useScrollY;
