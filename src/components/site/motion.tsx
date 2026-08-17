import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { gsap, SplitText, prefersReducedMotion } from "@/lib/scroll";

export function useRotator(words: string[], interval = 2400) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return words[i];
}

export function SplitReveal({
  as: Tag = "p",
  children,
  className,
  start = "top 85%",
  slideUp = true,
  by = "words",
}: {
  as?: "h1" | "h2" | "h3" | "p";
  children: ReactNode;
  className?: string;
  start?: string;
  slideUp?: boolean;
  by?: "words" | "lines";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) return;

    const split =
      by === "lines"
        ? new SplitText(el, { type: "lines", linesClass: "split-word", mask: "lines" })
        : new SplitText(el, { type: "words", wordsClass: "split-word" });
    const targets = by === "lines" ? split.lines : split.words;
    if (slideUp) gsap.set(targets, { yPercent: 100, opacity: 0 });
    else gsap.set(targets, { opacity: 0 });
    const tween = gsap.to(targets, {
      yPercent: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start,
        end: "bottom 15%",
        toggleActions: "play none none reverse",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
    };
  }, [start, slideUp, by]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

export function useScrollFade<T extends HTMLElement>(opts?: {
  y?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  start?: string;
  /** Animate the container's direct children instead of the container itself. */
  children?: boolean;
}) {
  const ref = useRef<T | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = opts?.children ? Array.from(el.children) : el;
    gsap.set(targets, { opacity: 0, y: opts?.y ?? 80, scale: opts?.scale ?? 1 });
    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: opts?.duration ?? 1,
      ease: opts?.ease ?? "power3.out",
      stagger: opts?.stagger ?? 0,
      scrollTrigger: {
        trigger: el,
        start: opts?.start ?? "top 85%",
        toggleActions: "play none none none",
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

export function RevealImage({
  src,
  alt,
  className,
  start = "top 90%",
}: {
  src: string;
  alt: string;
  className?: string;
  start?: string;
}) {
  const ref = useRef<HTMLImageElement | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    gsap.set(el, { scale: 1.15, opacity: 0, filter: "blur(16px)" });
    const tween = gsap.to(el, {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start, toggleActions: "play none none none" },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <img ref={ref} src={src} alt={alt} loading="lazy" className={className} />;
}

export function useCountUp(target: string, start = "top 85%") {
  const ref = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = target.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const [, numStr, suffix] = match;
    const value = parseFloat(numStr);
    const decimals = (numStr.split(".")[1] || "").length;

    if (prefersReducedMotion()) {
      el.textContent = target;
      return;
    }

    const counter = { n: 0 };
    el.textContent = `0${suffix}`;
    const tween = gsap.to(counter, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start, toggleActions: "play none none none" },
      onUpdate: () => {
        el.textContent = `${counter.n.toFixed(decimals)}${suffix}`;
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, start]);
  return ref;
}
