import { useEffect, useState } from "react";

const useDeviceWidth = () => {
  const [widthData, setWidthData] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthData(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return widthData;
};

export default useDeviceWidth;
