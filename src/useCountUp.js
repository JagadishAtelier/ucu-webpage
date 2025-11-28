import { useEffect, useState } from "react";

export default function useCountUp(endValue, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(endValue);  
    const totalMs = duration;
    const increment = end / (totalMs / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [endValue, duration]);

  return count;
}
