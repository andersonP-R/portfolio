import React, { useEffect, useRef } from "react";
import Styles from "../styles/LoaderStyles.module.css";
import { gsap } from "gsap";

export const Loader = (props) => {
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const letterA = useRef();
  const letterR = useRef();

  const svg = useRef();
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(box1.current, {
      opacity: 1,
      delay: 0.5,
      duration: 0.3,
      ease: "expo",
    });
    tl.to(box2.current, { opacity: 1, duration: 0.2, ease: "expo" });
    tl.to(box3.current, { opacity: 1, duration: 0.3, ease: "expo" });
    tl.to(letterA.current, { opacity: 1, delay: 0.5, duration: 1 });
    tl.to(
      letterR.current,
      {
        opacity: 1,
        duration: 1,
        ease: "back",
      },
      "<"
    );
    tl.to(svg.current, { scale: 0.7, opacity: 0 }, "+=0.7");
  }, [box1, box2, box3, letterA, letterR, svg]);

  return (
    <div className={Styles.container}>
      <svg
        ref={svg}
        className={Styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        width={300}
        height={300}
        xmlSpace="preserve"
        {...props}
      >
        <path
          ref={box2}
          className={Styles.box2}
          style={{
            stroke: "#eeeef8",
            strokeWidth: 2,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "none",
            fillRule: "nonzero",
            // opacity: 1,
          }}
          vectorEffect="non-scaling-stroke"
          transform="matrix(.98 0 0 .98 155.5 77.32)"
          d="M-37.81-37.81h75.62v75.62h-75.62z"
          strokeLinecap="round"
        />
        <path
          ref={box1}
          className={Styles.box1}
          style={{
            stroke: "#910001",
            strokeWidth: 3,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "none",
            fillRule: "nonzero",
            // opacity: 1,
          }}
          vectorEffect="non-scaling-stroke"
          transform="matrix(1.49 0 0 1.49 91.93 224.64)"
          d="M-37.81-37.81h75.62v75.62h-75.62z"
          strokeLinecap="round"
        />
        <path
          ref={box3}
          className={Styles.box3}
          style={{
            stroke: "#0062ae",
            strokeWidth: 1,
            strokeDasharray: "none",
            strokeLinecap: "butt",
            strokeDashoffset: 0,
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            fill: "none",
            fillRule: "nonzero",
            // opacity: 1,
          }}
          vectorEffect="non-scaling-stroke"
          transform="matrix(.59 0 0 .59 227.56 163.24)"
          d="M-37.81-37.81h75.62v75.62h-75.62z"
          strokeLinecap="round"
        />
        <g>
          <text
            className={Styles.letterA}
            ref={letterA}
            xmlSpace="preserve"
            fontFamily="Crimson Text"
            fontSize={192}
            fontWeight={200}
            letterSpacing={0.384}
            style={{
              stroke: "#000",
              strokeWidth: 3,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "#fff",
              fillRule: "nonzero",
              // opacity: 1,
              whiteSpace: "pre",
            }}
            transform="translate(163.85 126.22)"
          >
            <tspan x={-75} y={76.29} className={Styles.letter}>
              {"A"}
            </tspan>
          </text>
        </g>
        <g>
          <text
            className={Styles.letterR}
            ref={letterR}
            xmlSpace="preserve"
            fontFamily="Crimson Text"
            fontSize={92}
            fontWeight={200}
            letterSpacing={0.184}
            style={{
              stroke: "#fff",
              strokeWidth: 2,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeDashoffset: 0,
              strokeLinejoin: "miter",
              strokeMiterlimit: 4,
              fill: "#000",
              fillRule: "nonzero",
              // opacity: 1,
              whiteSpace: "pre",
            }}
            transform="translate(204.85 121.82)"
          >
            <tspan x={-35.5} y={36.88} className={Styles.letter}>
              {"R"}
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  );
};
