"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from './styles/TextCust.css'

gsap.registerPlugin(ScrollTrigger);

// Instead of strings, use JSX for each item
const items = [
  <div className="textAnimation">
    <h3>The Offer</h3>
    <div className="offer-checklist">
      <p>
        <span className="check-icon">✓</span> A pool of 1100+ pre-vetted developers across web, mobile, blockchain and AI.
      </p>
      <p>
        <span className="check-icon">✓</span> Available in a simple month to month.
      </p>
      <p>
        <span className="check-icon">✓</span> Subscription based model.
      </p>
    </div>

  </div>,
  <div className="textAnimation">
    <h3>Direct Developers</h3>
    <img src={'/direct.svg'} alt="direct" />
  </div>,
  <div className="textAnimation">
    <h3>Software Development Team</h3>
    <img src={'/development.svg'} alt="development" />
  </div>,
  <div className="textAnimation">
    <h3>Agile Squad</h3>
    <img src={'/agile.svg'} alt="agile" />
  </div>
];

function TextCust() {
  const itemRefs = useRef([]);
  const pinContainerRef = useRef();

  useEffect(() => {
    const stayDuration = 2.5;
    const animDuration = 1.2;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      },
    });

    itemRefs.current.forEach((el, i) => {
      const start = i * (stayDuration + animDuration);
      tl.fromTo(
        el,
        { scale: 0, opacity: 0, filter: "blur(20px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: animDuration, ease: "power2.out" },
        start
      ).to(
        el,
        { scale: 1.6, opacity: 0, filter: "blur(20px)", duration: animDuration, ease: "power2.in" },
        start + stayDuration
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={pinContainerRef}
      style={{
        width: "82vw",
        height: "100vh",
        backgroundColor: "#0B1C23",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "1rem",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0,
            filter: "blur(20px)",
            textAlign: "center",
            willChange: "transform, opacity, filter",
          }}
        >
          {item}
        </div>
      ))}
    </section>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", overflow: "hidden" }}>
      <div style={{ height: "200vh" }}>
        <TextCust />
      </div>
    </div>
  );
}
