
import React, { useEffect } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
  label: string;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  suffix = '',
  decimals = 0,
  label,
  duration = 2000
}) => {
  const [ref, isIntersecting] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const { value, setIsVisible } = useCountUp({
    end,
    suffix,
    decimals,
    duration,
    startOnView: true
  });

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true);
    }
  }, [isIntersecting, setIsVisible]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-black text-red-500 mb-2">
        {value}
      </div>
      <div className="text-gray-400 font-semibold uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
