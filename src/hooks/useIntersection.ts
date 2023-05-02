import { RefObject, useEffect, useState } from 'react';

interface IntersectionOptions {
  repeat: boolean;
  threshold: number;
  rootMargin: string;
  root: Document | Element | null | undefined;
}

export default function useIntersection(
  ref: RefObject<HTMLDivElement>,
  options?: Partial<IntersectionOptions>
): IntersectionObserverEntry | undefined {
  const [entryResult, setEntryResult] = useState<
    IntersectionObserverEntry | undefined
  >(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntryResult((cur) => {
          if (!options?.repeat && cur?.isIntersecting) return cur;
          return entry;
        });
      },
      {
        root: options?.root,
        rootMargin: options?.rootMargin ?? '0px',
        threshold: options?.threshold ?? 0.2,
      }
    );

    if (ref && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return entryResult;
}
