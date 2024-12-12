import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import AutoSizer from "./AutoSizer";

interface VirtualizedListProps {
  items: ReactNode[];
  itemHeight: number;
}

const VirtualizedList = ({ items, itemHeight }: VirtualizedListProps) => {
  const [scrollTop, setScrollTop] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!listRef.current) return;

      const { scrollTop } = listRef.current;
      setScrollTop(scrollTop);
    };

    const listEl = listRef.current;
    listEl?.addEventListener("scroll", handleScroll);

    return () => {
      listEl?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderList = ({ width, height }: { width: number; height: number }) => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      items.length - 1,
      Math.floor((scrollTop + height) / itemHeight),
    );

    const visibleItems = items.slice(startIndex, endIndex + 1);

    const totalHeight = items.length * itemHeight;
    const offsetY = startIndex * itemHeight;

    return (
      <div
        ref={listRef}
        style={{
          height: `${height}px`,
          width: `${width}px`,
          overflowY: "auto",
        }}
      >
        <div
          style={{
            height: `${totalHeight}px`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${offsetY}px)`,
            }}
          >
            {visibleItems.map((item, index) => (
              <div
                key={`${startIndex + index}id`}
                style={{
                  height: `${itemHeight}px`,
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  padding: "0 10px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <AutoSizer>{renderList}</AutoSizer>;
};

export default VirtualizedList;
