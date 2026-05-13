import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Once the element scrolls into view it gets the "is-visible" class,
 * triggering the .reveal CSS transition. Animates only once.
 *
 * rootMargin "0px 0px -60px 0px" means the animation fires
 * when the element is 60px from the bottom of the viewport —
 * this prevents the last section from staying invisible if it
 * never gets far enough into view.
 *
 * Usage:
 *   const ref = useReveal();
 *   <Box ref={ref} className="reveal" ...>
 */
export function useReveal(threshold = 0.05) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
