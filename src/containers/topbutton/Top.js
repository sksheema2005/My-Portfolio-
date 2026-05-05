import React, {useEffect, useRef} from "react";
import "./Top.scss";

export default function Top() {
  const topButtonRef = useRef(null);

  function TopEvent() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    // When the user scrolls down 20px from the top of the document, show the button
    const scrollFunction = () => {
      if (topButtonRef.current) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          topButtonRef.current.style.visibility = "visible";
        } else {
          topButtonRef.current.style.visibility = "hidden";
        }
      }
    };

    window.addEventListener("scroll", scrollFunction);
    // Initial check
    scrollFunction();

    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <button
      onClick={TopEvent}
      id="topButton"
      ref={topButtonRef}
      title="Go to top"
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
