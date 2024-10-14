"use client";

import React, { useEffect, useState } from "react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  }

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY >= 200 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      className={`${isVisible ? "inline-flex" : "hidden"} scrollToTop-button`}
      onClick={scrollToTop}
    >
      <svg className="rotate-180 w-5 h-5 text-white">
        <use href="#chevron-down"></use>
      </svg>
    </button>
  );
}

export default ScrollToTop;
