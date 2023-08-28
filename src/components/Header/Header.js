import React from "react";
import "./index.scss";
import Colors from "../../Constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faUser,
  faCartShopping,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const menu = [
  "Home",
  "Chicken",
  "Mutton",
  "Fish & SeaFood",
  "Excotic Meats",
  "Cold Cuts",
  "Ready To Cook",
  "Eggs",
  "Country Chicken",
];

const Header = () => {
  return (
    <div className="div_header">
      <header className="header">
        
       <section className="sec_header">
          <div className="topads">
            <div className="topads1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 496.255 608.728"
                id="apple"
              >
                <path
                  fill="#fff"
                  d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"
                />
              </svg>

              <span>Get iOS App</span>
            </div>
            <div className="topads2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                id="playstore"
              >
                <path
                  fill="white"
                  stroke="#303c42"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M22.2 11.6c-5-2.8-15-8.3-20-11 0-.1-.1-.1-.2-.1-.3 0-.5.2-.5.5v22c0 .3.2.5.5.5.1 0 .2 0 .2-.1 5-2.7 15-8.2 20-11 .2-.1.3-.4.2-.6 0-.1-.1-.2-.2-.2h0z"
                />
                <path
                  fill="none"
                  stroke="#303c42"
                  stroke-linejoin="round"
                  d="m2.2.6 14.7 14.8M2.2 23.4 16.9 8.6"
                />
              </svg>

              <span>Get Android App</span>
            </div>
          </div>
          <div className="mainheader">
          <div className="logoimg">
            
              <img
              width={"100%"}
                src=" https://www.fleshkart.com/assets/images/logo.jpg"
                alt="dfsd"
              />
            </div>  
            <div className="together together_loc">
              <FontAwesomeIcon
                icon={faLocationDot}
                color={"#F56753"}
                style={{ fontSize: 25 }}
              />
              <span
                style={{ color: "#F56753", fontSize: 14, fontWeight: "bold" }}
              >
                Noida
              </span>
            </div>

<div className="view2">
              <div className="together">
                <FontAwesomeIcon icon={faUser} style={{ color: "#f8f9fc" }} />
                <span
                  style={{ color: "#F56753", fontSize: 14, fontWeight: "bold" }}
                >
                  Account
                </span>
              </div>

              <div className="together">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ color: "#eff0f0" }}
                />
                <span
                  style={{ color: "#F56753", fontSize: 14, fontWeight: "bold" }}
                >
                  My Cart
                </span>
              </div>

              <div className="together">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f8f9fc" }} />
                <span
                  style={{ color: "#F56753", fontSize: 14, fontWeight: "bold" }}
                >
                  sales@fleshkart.com
                </span>
              </div>

</div>
   

            <div classname="form">
              <form action="">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Search Product"
                />{" "}
              </form>
            </div>

          </div>

          <div className="btmheader">
            {menu.map((menuItem) => (
              <a href="https:www.google.com">{menuItem}</a>
            ))}
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
