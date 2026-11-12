import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

function shouldShowImmediately(immediate: boolean): boolean {
  if (immediate) return true;
  if (typeof window === 'undefined') return true;
  if (!('IntersectionObserver' in window)) return true;
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  immediate = false,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => shouldShowImmediately(immediate));

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    // Reveal above-the-fold sections immediately on mount for LCP & Googlebot rendering.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={immediate ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
