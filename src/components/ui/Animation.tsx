'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimationProps {
  children: React.ReactNode;
  type?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function Animation({
  children,
  type = 'fade-up',
  delay = 0,
  threshold = 0.1,
  className = '',
  ...props
}: AnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animations = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-in': 'opacity-0',
    'slide-in-right': 'opacity-0 translate-x-10',
    'slide-in-left': 'opacity-0 -translate-x-10',
  };

  const baseStyles = 'transition-all duration-700';
  const delayStyles = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${delayStyles} ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : animations[type]
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
