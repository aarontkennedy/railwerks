import * as React from "react";
import "./menuPulldown.scss";
import { useEffect, useRef, useState } from "react";

const INITIAL_MAX_HEIGHT = 10000;

/**
 * This Hook can be used for detecting clicks outside the Opened Menu
 */
const useClickOutside = (ref1, ref2, onClickOutside) => {
  useEffect(() => {
    /**
     * Invoke Function onClick outside of element
     */
    function handleClickOutside(event) {
      if (
        ref1.current &&
        !ref1.current.contains(event.target) &&
        ref2.current &&
        !ref2.current.contains(event.target)
      ) {
        onClickOutside();
      }
    }

    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref1, ref2, onClickOutside]);
};

const MenuPulldown = ({
  name,
  activeMenuName,
  setActiveMenuName,
  children,
}: {
  name: string;
  activeMenuName: string | false;
  setActiveMenuName: (name: string | false) => void;
  children: string | JSX.Element | JSX.Element[];
}): JSX.Element => {
  const linkRef = useRef<any>(null);
  const collapseMenuRef = useRef<any>(null);
  const isFirstRender = useRef(true);
  const maxHeightRef = useRef(INITIAL_MAX_HEIGHT);
  // const isActive = activeMenuName === name;

  const [isActive, setIsActive] = useState(false);

  useClickOutside(collapseMenuRef, linkRef, () => {
    setIsActive(false);
  });

  useEffect(() => {
    if (collapseMenuRef.current && !isFirstRender.current) {
      if (
        maxHeightRef.current > collapseMenuRef.current.offsetHeight &&
        maxHeightRef.current !== INITIAL_MAX_HEIGHT
      ) {
        // HALT!! // Someone collapsed the menu too early! // The offsetHeight is not full.
        return;
      }
      maxHeightRef.current = collapseMenuRef.current.offsetHeight;
    }
    if (isActive && isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [isActive]);

  return (
    <div className="menu-pulldown__wrapper">
      <div
        ref={linkRef}
        className="menu-pulldown__link"
        onClick={() => {
          // setActiveMenuName(isActive ? false : name);
          setIsActive((prev) => !prev);
        }}
      >
        {name}
      </div>
      <div
        ref={collapseMenuRef}
        className="menu-pulldown__container"
        style={
          isActive ? { maxHeight: maxHeightRef.current } : { maxHeight: 0 }
        }
      >
        {children}
      </div>
    </div>
  );
};

export default MenuPulldown;
