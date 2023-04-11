import { useEffect, useRef, useState } from "react";

interface Props {
  repeat?: boolean;
  threshold?: number;
  rootMargin?: string;
  root?: Document | Element | null | undefined;
  children: (result: IntersectionResult) => JSX.Element;
}

export interface IntersectionResult {
  intersectionRatio: number;
  isVisible: boolean;
}

const ComponentViewIntersection = (props: Props) => {

  const parentRef = useRef<HTMLDivElement>(null);

  const [intersectionResult, setIntersectionResult] = useState<IntersectionResult>({ intersectionRatio: 0, isVisible: false });

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersectionResult((current) => {
          const next = {
            isVisible: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio
          }
          return props.repeat ? next : !current.isVisible ? next : current;
        })
      },
      {
        root: props.root,
        rootMargin: props.rootMargin ?? '0px',
        threshold: props.threshold ?? 0.2,
      }

    );

    if (parentRef && parentRef.current) {
      observer.observe(parentRef.current);
    }

  }, []);

  return (
    <div ref={parentRef}>
      {props.children(intersectionResult)}
    </div>
  )

}

export default ComponentViewIntersection;
