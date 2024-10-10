import { useEffect, useState } from "react";

function useDeviceWidth(threshold: (width: number) => boolean): boolean;
function useDeviceWidth(): number;

function useDeviceWidth(threshold?: (width: number) => boolean) {
  const [widthData, setWidthData] = useState<number | boolean>(
    threshold ? threshold(window.innerWidth) : window.innerWidth
  );

  useEffect(() => {
    const handleResize = () =>
      setWidthData(
        threshold ? threshold(window.innerWidth) : window.innerWidth
      );

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [threshold]);

  return widthData;
}

export default useDeviceWidth;
