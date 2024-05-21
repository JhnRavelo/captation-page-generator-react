import { useEffect } from "react";

const useAnimationNbr = (nbrTotal:number, totalRef:React.RefObject<HTMLSpanElement>) => {
  useEffect(() => {
    if (totalRef.current) {
      const interval = 4000;
      let startValue = 0;
      let endValue;
      if(nbrTotal < 0){
        endValue = Math.abs(nbrTotal)
      }else {
        endValue = nbrTotal;
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
