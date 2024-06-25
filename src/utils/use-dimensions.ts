import useResizeObserver from "@react-hook/resize-observer";

import { useState, useLayoutEffect, RefObject } from "react";

const INITIAL_DOM_RECT_VALUES: Omit<DOMRect, "toJSON"> = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const INITIAL_DOM_RECT: DOMRect = {
  ...INITIAL_DOM_RECT_VALUES,
  toJSON: () => JSON.stringify(INITIAL_DOM_RECT_VALUES),
};

/**
 * Provides information about the size of an element
 * and its position relative to the viewport.
 */
export function useDimensions(target: RefObject<any>): DOMRect {
  const [dimensions, setDimensions] = useState<DOMRect>(INITIAL_DOM_RECT);

  useLayoutEffect(() => {
    if (target.current) {
      setDimensions(target.current.getBoundingClientRect());
    }
  }, [target]);

  useResizeObserver(target, (entry) => {
    return setDimensions(entry.contentRect);
  });

  return dimensions;
}
