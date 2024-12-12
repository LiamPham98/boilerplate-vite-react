import React, { useEffect, useRef, useState } from "react";

interface AutoSizerProps {
  children: (size: { width: number; height: number }) => React.ReactNode;
}

const AutoSizer = ({ children }: AutoSizerProps) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    const currentRef = containerRef.current;

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {children({ width: size.width, height: size.height })}
    </div>
  );
};

export default AutoSizer;
