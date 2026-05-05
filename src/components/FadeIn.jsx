import { useEffect, useRef, useState } from "react";

/**
 * Fade + slide profissional ao entrar na viewport
 */
export default function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ativa quando aparece
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2, // porcentagem visível
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade ${visible ? "fade--visible" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}