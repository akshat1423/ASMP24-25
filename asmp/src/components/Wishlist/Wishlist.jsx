import React, { useState, useEffect } from "react";
import backgroundImage from "../../assets/asmp_bg.jpeg";
import Wishlist_Mentor from "./Wishlist_Mentor";
import CursorAnimation from "../CursorAnimation";
import "./Wishlist.css";
import { gsap } from "gsap";

const Wishlist = () => {
  // Use an array to store the input values for each field
  const [inputValues, setInputValues] = useState(["", "", "", "", ""]);

  useEffect(() => {
    const { to, set } = gsap;

    function delay(fn, ms) {
      let timer = 0;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(fn.bind(this, ...args), ms || 0);
      };
    }

    const getPoint = (point, i, a, smoothing) => {
      const cp = (current, previous, next, reverse) => {
        const p = previous || current,
          n = next || current,
          o = {
            length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
            angle: Math.atan2(n[1] - p[1], n[0] - p[0]),
          },
          angle = o.angle + (reverse ? Math.PI : 0),
          length = o.length * smoothing;
        return [
          current[0] + Math.cos(angle) * length,
          current[1] + Math.sin(angle) * length,
        ];
      };

      const cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
      return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
    };

    const getPath = (x, smoothing) => {
      return [
        [2, 2],
        [12 - x, 12 + x],
        [22, 22],
      ].reduce(
        (acc, point, i, a) =>
          i === 0
            ? `M ${point[0]},${point[1]}`
            : `${acc} ${getPoint(point, i, a, smoothing)}`,
        ""
      );
    };

    document.querySelectorAll(".input").forEach((elem) => {
      const clear = elem.querySelector(".clear"),
        input = elem.querySelector("input"),
        { classList } = elem,
        svgLine = clear.querySelector(".line"),
        svgLineProxy = new Proxy(
          {
            x: null,
          },
          {
            set(target, key, value) {
              target[key] = value;
              if (target.x !== null) {
                svgLine.setAttribute("d", getPath(target.x, 0.1925));
              }
              return true;
            },
            get(target, key) {
              return target[key];
            },
          }
        );

      svgLineProxy.x = 0;

      input.addEventListener(
        "input",
        delay(() => {
          const bool = input.value.length;
          to(elem, {
            "--clear-scale": bool ? 1 : 0,
            duration: bool ? 0.5 : 0.15,
            ease: bool ? "elastic.out(1, 0.7)" : "none",
          });
          to(elem, {
            "--clear-opacity": bool ? 1 : 0,
            duration: 0.15,
          });
        }, 250)
      );

      clear.addEventListener("click", () => {
        classList.add("clearing");
        set(elem, {
          "--clear-swipe-left": (input.offsetWidth - 16) * -1 + "px",
        });
        to(elem, {
          keyframes: [
            {
              "--clear-rotate": "45deg",
              duration: 0.25,
            },
            {
              "--clear-arrow-x": "2px",
              "--clear-arrow-y": "-2px",
              duration: 0.15,
            },
            {
              "--clear-arrow-x": "-3px",
              "--clear-arrow-y": "3px",
              "--clear-swipe": "-3px",
              duration: 0.15,
              onStart() {
                to(svgLineProxy, {
                  x: 3,
                  duration: 0.1,
                  delay: 0.05,
                });
              },
            },
            {
              "--clear-swipe-x": 1,
              "--clear-x": input.offsetWidth * -1 + "px",
              duration: 0.45,
              onComplete() {
                input.value = "";
                input.focus();
                to(elem, {
                  "--clear-arrow-offset": "4px",
                  "--clear-arrow-offset-second": "4px",
                  "--clear-line-array": "8.5px",
                  "--clear-line-offset": "27px",
                  "--clear-long-offset": "24px",
                  "--clear-rotate": "0deg",
                  "--clear-arrow-o": 1,
                  duration: 0,
                  delay: 0.7,
                  onStart() {
                    classList.remove("clearing");
                  },
                });
                to(elem, {
                  "--clear-opacity": 0,
                  duration: 0.2,
                  delay: 0.55,
                });
                to(elem, {
                  "--clear-arrow-o": 0,
                  "--clear-arrow-x": "0px",
                  "--clear-arrow-y": "0px",
                  "--clear-swipe": "0px",
                  duration: 0.15,
                });
                to(svgLineProxy, {
                  x: 0,
                  duration: 0.45,
                  ease: "elastic.out(1, 0.75)",
                });
              },
            },
            {
              "--clear-swipe-x": 0,
              "--clear-x": "0px",
              duration: 0.4,
              delay: 0.35,
            },
          ],
        });
        to(elem, {
          "--clear-arrow-offset": "0px",
          "--clear-arrow-offset-second": "8px",
          "--clear-line-array": "28.5px",
          "--clear-line-offset": "57px",
          "--clear-long-offset": "17px",
          duration: 0.2,
        });
      });
    });
  }, []);

  const handleInputChange = (index, event) => {
    // Create a new array with the updated input value at the specified index
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const clearInput = (index) => {
    // Clear the input value for the specified index
    const newInputValues = [...inputValues];
    newInputValues[index] = "";
    setInputValues(newInputValues);
  };

  return (
    <>
      <CursorAnimation />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200vh",
          zIndex: -1,
        }}
      >
        <div style={{ height: "10vh" }}></div>
        <div className="wishlist-headings-1">Wishlist</div>
        <Wishlist_Mentor />
        <div className="wishlist-headings-2">Preferences</div>

        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",}}>
          {inputValues.map((value, index) => (
            <div
              key={index}
              className={`input ${value ? "clearing" : ""}`}
              style={{
                backdropFilter: "blur(9px)",
                WebkitBackdropFilter: "blur(9px)",
              }}
            >
              <div className="text">
                <input
                  type="text"
                  placeholder={`Preference ID ${index + 1}`}
                  value={value}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <button className="clear" onClick={() => clearInput(index)}>
                <svg viewBox="0 0 24 24">
                  <path className="line" d="M2 2L22 22" />
                  <path className="long" d="M9 15L20 4" />
                  <path className="arrow" d="M13 11V7" />
                  <path className="arrow" d="M17 11H13" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;