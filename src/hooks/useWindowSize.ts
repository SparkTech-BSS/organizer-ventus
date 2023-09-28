import { useState, useEffect } from "react";

interface SizeProps {
  width: number | undefined;
  height: number | undefined;
}

export function useWindowSize(): SizeProps {
  const [windowSize, setWindowSize] = useState<SizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
