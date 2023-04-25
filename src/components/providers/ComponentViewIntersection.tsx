import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface Props {
  repeat?: boolean;
  threshold?: number;
  rootMargin?: string;
  root?: Document | Element | null | undefined;
  children?: React.ReactNode | ((result: IntersectionResult) => JSX.Element);
  updateState?: Dispatch<SetStateAction<IntersectionResult>>;
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
          const intersection = {
            isVisible: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio
          }

          const next = props.repeat ? intersection : !current.isVisible ? intersection : current;
          if (props.updateState) {
            props.updateState(next);
          }

          return next;
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={parentRef}>
      {props.children ? typeof props.children === 'function' ? props.children(intersectionResult) : props.children : <></>}
    </div>
  )

}

export default ComponentViewIntersection;
