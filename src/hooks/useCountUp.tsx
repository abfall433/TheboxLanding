
import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  startOnView?: boolean;
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  decimals = 0, 
  suffix = '',
  startOnView = true 
}: UseCountUpProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnView);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isVisible || hasStarted) return;

    setHasStarted(true);
    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (end - startValue) * easedProgress;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, hasStarted]);

  const formattedValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();

  return {
    value: formattedValue + suffix,
    setIsVisible,
    isVisible
  };
};
