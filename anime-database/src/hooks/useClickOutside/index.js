import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function useOutsideAlerter(ref, performAction) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        performAction();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props.performAction);
  return <div display={{width: "100%", height: "100%"}} ref={wrapperRef}>{props.children}</div>
}

OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
};

export default OutsideAlerter