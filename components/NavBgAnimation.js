import { motion, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const variants = {
  hidden: {},
  show: {
    transition: { delay: 1, duration: 2, ease: "easeInOut" },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: {
      delay: 0.7,
      duration: 1,
      ease: "easeInOut",
      // yoyo: Infinity,
    },
  },
};

export const NavBgAnimation = ({ state }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <Box className={state ? "visible" : ""}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        id="svg"
        variants={variants}
        initial="hidden"
        animate="show"
        ref={ref}
      >
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(-1.6 0 0 1.14 718.84 648.67)"
          d="m.605-105.422-1.21 210.844"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(1.38 0 0 1.38 851.53 648.33)"
          d="M-95.87-86.91 95.806-16.928 95.87 86.91"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(1.38 0 0 1.38 1004.77 605.75)"
          d="M-206.13-55.632 4.536-117.687l201.594 68.52-4.213 166.854"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(1.38 0 0 1.38 1137.8 581.53)"
          d="m-110.477 31.09 220.954-62.18"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(1.05 0 0 -.88 1106.87 58.61)"
          d="M.552-67.326-.552 67.326"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="rotate(180 502.17 29.74) scale(1.07)"
          d="M-95.838-55.1 95.838 14.882V55.1"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(-1.07 0 0 -1.07 885.89 91.47)"
          d="M-206.13-24.668 7.236-85.372l198.894 67.17V85.371"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(-1.07 0 0 -1.07 783.1 76.95)"
          d="m-110.477 31.09 220.954-62.18"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(-.76 0 0 .64 174.7 254.68)"
          d="m-.837-164.825 1.674 329.65"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.78 0 0 .78 255.72 280.26)"
          d="m-104.34-168.596 208.68 48.76-1.185 288.432"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.78 0 0 .78 336.01 137.02)"
          d="M-206.13 15.89.633-22.355l205.497 44.71"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.73 0 0 .73 416.96 170.71)"
          d="m-108.948 21.605 217.896-43.21"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.77 0 0 -.77 335.55 282.78)"
          d="M-208.481-100.135.594-165.62 207.345-95.2l1.136 260.82"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(-.27 0 0 .23 751.72 331.5)"
          d="m-.837-164.825 1.674 329.65"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.28 0 0 .28 780.66 340.64)"
          d="m-104.34-168.596 208.68 48.76-1.185 288.432"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.28 0 0 .28 809.35 289.46)"
          d="M-206.13 15.89.633-22.355l205.497 44.71"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.26 0 0 .26 838.27 301.5)"
          d="m-108.948 21.605 217.896-43.21"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.28 0 0 -.28 809.19 341.54)"
          d="M-208.481-100.135.594-165.62 207.345-95.2l1.136 260.82"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(-.37 0 0 .32 60.58 629.97)"
          d="m-.837-164.825 1.674 329.65"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.39 0 0 .39 100.79 642.68)"
          d="m-104.34-168.596 208.68 48.76-1.185 288.432"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.39 0 0 .39 140.65 571.58)"
          d="M-206.13 15.89.633-22.355l205.497 44.71"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.36 0 0 .36 180.82 588.3)"
          d="m-108.948 21.605 217.896-43.21"
        />
        <motion.path
          variants={pathVariants}
          animate={controls}
          transform="matrix(.39 0 0 -.39 140.42 643.92)"
          d="M-208.481-100.135.594-165.62 207.345-95.2l1.136 260.82"
        />
      </motion.svg>
    </Box>
  );
};

const Box = styled.div`
  width: 95vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  left: 0;

  &.visible {
  }

  #svg {
    width: 1300px;
    height: 700px;

    @media screen and (max-width: 900px) {
      transform: translateX(-200px);
    }

    @media screen and (max-width: 600px) {
      transform: translateX(-520px);
    }

    path {
      fill: none;
      stroke: gray;
      stroke-width: 1px;
    }
  }
`;
