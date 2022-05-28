import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { useMediaQuery } from "react-responsive";
const footerVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 500, velocity: -100 },
    },
    zIndex: 9,
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 500 },
    },
  },
};

const style = {
  display: "flex",
  alignItems: "center",
  gridGap: "64px",
};

export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export const MainMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 992px)" });

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at ${isSmallScreen ? "29.1px" : "88.5%"
        } 30px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: `circle(0px at ${isSmallScreen ? "29.1px" : "88.5%"} 30px)`,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={`main-layout-menu ${isOpen ? "openModal" : "closeModal"}`}
    >
      <MenuToggle toggle={() => toggleOpen()} />
      <div className="pointerBlocker">
        <motion.div className="background" variants={sidebar} />
        <Navigation toggle={() => toggleOpen()} />
      </div>
    </motion.nav>
  );
};
