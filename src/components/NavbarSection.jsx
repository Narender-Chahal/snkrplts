import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import logo_img from "../assets/img/png/pagelogo.png";
import nav_img from "../assets/img/png/nav_img.png";
import { First } from "react-bootstrap/esm/PageItem";
import cross_icon from "../assets/img/png/cross-sign.png";
function NavbarSection() {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <section>
      <Container>
        <nav className="py-3">
          <div className="d-flex justify-content-between align-items-center">
            <a href="#">
              <img className="w-100" src={logo_img} alt="logo_img" />
            </a>
            <div className="ps-5">
              <img className="w-100" src={nav_img} alt="nav_img" />
            </div>
            <div className="d-flex flex-column h_20 justify-content-between ms-5 d-lg-none">
              <a
                onClick={() => setfirst(false)}
                className="d-flex flex-column h_20 justify-content-between"
                href="#"
              >
                <span className="icons"></span>
                <span className="icons"></span>
                <span className="icons"></span>
              </a>
            </div>
          </div>
        </nav>
      </Container>
      <nav
        className={
          first
            ? "hide_nav d-flex flex-column  flex-lg-row align-items-center justify-content-center mb-0 nav2_bg py-4"
            : "show_nav d-flex flex-column  flex-lg-row align-items-center justify-content-center mb-0 nav2_bg  "
        }
      >
        <Container>
          <ul className="d-flex flex-lg-row align-items-center justify-content-center flex-column justify-content-lg-end">
            {" "}
            <a
              className="position-absolute top-0 end-0 m-4 d-lg-none d-flex"
              onClick={() => setfirst(true)}
              href="#"
            >
              <img src={cross_icon} alt="cross_icon" />
            </a>
            <li>
              <a className="nav_link" href="#">
                HOME
              </a>
            </li>
            <li className="ps-lg-3 mt-4 mt-lg-0">
              <a className="nav_link" href="#">
                SNEAKERS KOPEN
              </a>
            </li>
            <li className="ps-lg-3 mt-4 mt-lg-0">
              <a className="nav_link" href="#">
                INTERVIEWS
              </a>
            </li>
            <li className="ps-lg-3 mt-4 mt-lg-0">
              <a className="nav_link" href="#">
                SALE
              </a>
            </li>
            <li className="ps-lg-3 mt-4 mt-lg-0">
              <a className="nav_link" href="#">
                SNEAKER VAN DE DAG
              </a>
            </li>
            <li className="ps-lg-3 mt-4 mt-lg-0">
              <a className="nav_link" href="#">
                SNEAKER FORUM
              </a>
            </li>
            <li className="ps-lg-3 mt-4 mt-lg-0">
              <a className="nav_link" href="#">
                BLOG
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </section>
  );
}

export default NavbarSection;
