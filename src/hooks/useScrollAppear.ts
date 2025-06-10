import { useEffect, useRef, RefObject } from 'react';

interface UseScrollAppearProps {
  threshold?: number;
  rootMargin?: string;
}

const useScrollAppear = ({ threshold = 0.2, rootMargin = "0px" }: UseScrollAppearProps = {}): RefObject<HTMLDivElement | null> => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target instanceof HTMLElement) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return elementRef;
};

export default useScrollAppear;
