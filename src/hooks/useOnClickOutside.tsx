import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (e: React.MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener as any);
    document.addEventListener("touchstart", listener as any);

    return () => {
      document.removeEventListener("mousedown", listener as any);
      document.removeEventListener("touchstart", listener as any);
    };
  }, [ref, handler]);
};
