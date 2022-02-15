import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Dropdown from "../nav/Dropdown";

const NavigationDesktop = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredText, setHoveredText] = useState("");
  const location = useLocation();

  useEffect(() => {
    setDropdownOpen(false); //handle route change
  }, [location?.pathname]);

  const mouseEnterHandler = (event, title, item, i) => {
    if (!item.handleEnter) {
      setDropdownOpen(false);
      setHoveredText("");
      return;
    }
    setHoveredText(title);
    setDropdownOpen(true);
  };

  const mouseLeaveHandler = () => {
    setHoveredText("");
    setDropdownOpen(false);
  };

  const navLinks = [
    {
      link: "our-work",
      title: "OUR WORK",
      arrowDown: true,
      handleEnter: true,
    },
    {
      link: "initiatives",
      title: "INITIATIVES",
      arrowDown: true,
      handleEnter: true,
    },
    {
      link: "resource-library",
      title: "RESOURCE LIBRARY",
      arrowDown: false,
      handleEnter: false,
    },
    {
      link: "press",
      title: "PRESS",
      arrowDown: false,
      handleEnter: false,
    },
    {
      link: "about-us",
      title: "ABOUT US",
      arrowDown: true,
      handleEnter: true,
    },
  ];

  const refs = useRef([]);
  // https://www.youtube.com/watch?v=ygPIjzhKB2s
  // need to remove the ref.current = []

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <Nav>
      <Ul className="list-unstyled">
        {navLinks.map((item, i) => {
          return (
            <li
              key={item.link}
              index={i}
              onMouseEnter={(event) =>
                mouseEnterHandler(
                  event,
                  item.handleEnter ? item.link : null,
                  item,
                  i
                )
              }
              ref={addToRefs}
              onMouseLeave={!item.handleEnter ? mouseLeaveHandler : null}
            >
              <StyledLink to={`/${item.link}`}> {item.title}</StyledLink>
              {item.arrowDown && <Svg src="/assets/images/svg/down-arrow.svg" />}
            </li>
          );
        })}
      </Ul>

      {dropdownOpen && hoveredText !== "" && (
        <Dropdown 
          mouseLeaveHandler={mouseLeaveHandler}
          hoveredText={hoveredText}
          initRef={refs?.current[1]}
          aboutRef={refs?.current[4]}
        />
      )}
    </Nav>
  );
};

export default NavigationDesktop;

const Nav = styled.nav`
    display: flex; 
    width: 100%;

    .m-down {
        margin-bottom: 20px !important;
    }
`;

const Ul = styled.ul`
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding-left: 40px;
  min-width: 600px;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 5px;
  margin-left: 30px;

  li {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  color: #003354;
  transition: 0.4s ease-all;
  position: relative;
  padding-bottom: 4px;
  border-bottom: 3px solid white; //this is to keep text from moving up on hover.

  :hover {
    color: #1187ba;
    border-bottom: 3px solid #669935;
  }
`;

const Svg = styled.img`
  width: 20px;
  margin-left: 10px;
  margin-bottom: 4px;
`;
