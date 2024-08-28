import { useState, useEffect, useRef } from "react";

interface Size {
  width: number;
  height: number;
}

export function useElementDimensions() {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      if (entries.length === 0 || !entries[0].contentRect) return;
      const { width, height } = entries[0].contentRect;
      setDimensions({ width, height });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, []);

  return { ref: elementRef, dimensions };
}
