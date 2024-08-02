import { useEffect } from "react";

const useAnimationNbr = (
  nbrTotal: number,
  totalRef: React.RefObject<HTMLSpanElement>
) => {
  useEffect(() => {
    if (totalRef.current) {
      const interval = Math.abs(nbrTotal) < 10 ? 1000 : Math.abs(nbrTotal) < 20 ? 2000 : 3000;
      let startValue = 0;
      totalRef.current.textContent = String(startValue);
      const endValue: number = Math.abs(nbrTotal);
      if (startValue == nbrTotal) {
        return;
      }
      const duration = Math.floor(interval / endValue);
      const counter = setInterval(function () {
        startValue += 1;
        if (totalRef.current) {
          totalRef.current.textContent = String(startValue);
        }
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => clearInterval(counter);
    }
  }, [totalRef, nbrTotal]);
};

export default useAnimationNbr;
