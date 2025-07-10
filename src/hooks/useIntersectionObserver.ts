import { useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
}

export const useIntersectionObserver = <T extends HTMLElement>(
  { threshold = 0.1, rootMargin = '0px', onIntersect }: UseIntersectionObserverProps = {}
): RefObject<T> => {
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (onIntersect) {
              onIntersect(entry);
            } else {
              entry.target.classList.add('animate-fade-in');
            }
          }
        });
      },
      { threshold, rootMargin }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin, onIntersect]);
  
  return ref;
};