import { useEffect, useRef, RefObject } from 'react';

interface UseScrollAppearProps {
  threshold?: number;
  rootMargin?: string;
}

const useScrollAppear = <T extends HTMLElement = HTMLDivElement>({ threshold = 0.2, rootMargin = "0px" }: UseScrollAppearProps = {}): RefObject<T | null> => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Une fois apparu, l'élément reste visible
          if (entry.target instanceof HTMLElement && entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
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
