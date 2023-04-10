import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo_img from "../assets/img/png/footer_logo.png";
import facebook_img from "../assets/img/facebook.svg";
import gogle_img from "../assets/img/gogle.svg";
import twiter from "../assets/img/twiter.svg";
function LastSection() {
  return (
    <section className="bg_black ">
      <Container className="pt-4 pb-5">
        <Row className="justify-content-between">
          <Col lg={4}>
            <img src={logo_img} alt="logo_img" />
            <p className="mb-0 ff_poppins fw_normal fs_md foter_pargraph_color">
              Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
              euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
              in leo ullamcorper, in finibus elit porta.{" "}
            </p>
            <div className="d-flex align-items-center pt-lg-4 mt-3">
              <a href="#">
                {" "}
                <img src={facebook_img} alt="facebook_img" />
              </a>
              <a className="ms-4" href="#">
                {" "}
                <img src={twiter} alt="twiter" />{" "}
              </a>{" "}
              <a className="ms-4" href="#">
                {" "}
                <img src={gogle_img} alt="gogle_img" />
              </a>{" "}
            </div>{" "}
          </Col>
          <Col lg={7} className="mt-lg-5 pt-5">
            <Row>
              <Col lg={3} md={3} xs={6}>
                <h2 className="mb-0 ff_poppins fw-semibold fs_md pt-1 text-white">
                  CUSTOM LINKS
                </h2>
                <ul>
                  <li className="pt-3">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={3} xs={6}>
                <h2 className="mb-0 ff_poppins fw-semibold fs_md pt-1 text-white">
                  CUSTOM LINKS
                </h2>
                <ul>
                  <li className="pt-3">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={3} xs={6} className="pt-4 pt-md-0">
                <h2 className="mb-0 ff_poppins fw-semibold fs_md pt-1 text-white">
                  CUSTOM LINKS
                </h2>
                <ul>
                  <li className="pt-3">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
              <Col lg={3} md={3} xs={6} className="pt-4 pt-md-0">
                <h2 className="mb-0 ff_poppins fw-semibold fs_md pt-1 text-white">
                  CUSTOM LINKS
                </h2>
                <ul>
                  <li className="pt-3">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                  <li className="pt-2">
                    <a
                      className="mb-0 ff_poppins fw-normal fs_md  color_brown footer_link"
                      href="#"
                    >
                      Lorem ipsum
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>{" "}
          </Col>
        </Row>
      </Container>
      <div className="bg_black2 py-4">
        <p className="mb-0 ff_poppins fw-normal fs_md text-center clr_copyright">
          © Copyright SNKRPLTS 2021.{" "}
        </p>
      </div>
    </section>
  );
}

export default LastSection;
