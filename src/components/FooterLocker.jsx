import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footlocker from "../assets/img/png/footlocker.png";
import sidestep_img from "../assets/img/png/sidestep.png";
import Slider from "react-slick";

function FooterLocker() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="py-5  mt-2">
      <Container>
        <h3 className="mb-0 ff_poppins fw-medium fs_3xl">
          You can buy the Nike Air Max 97 Men's Shoe - White here:
        </h3>
        <Slider {...settings} className="row">
          <Col
            xl={3}
            md={6}
            lg={4}
            className="pt-xl-4 mt-3 mb-3  ps-md-4 pe-xl-0 px-3 "
          >
            {" "}
            <div className="img_box h-100 mb-2">
              <div className="locker_border d-flex align-items-center justify-content-center py-4">
                <img src={footlocker} alt="footlocker" />
              </div>
              <div className="py-4 px-3">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-4">
                  <div className="d-flex">
                    <h5 className="mb-0 ff_poppins fw-normal fs_md">Price:</h5>
                    <h5 className="mb-0 ff_poppins fw-semibold fs_xl ps-3">
                      €179,99
                    </h5>
                  </div>
                  <button className="best_price_button ff_poppins fw-normal fs_xsm ">
                    Best Price
                  </button>
                </div>
                <h5 className="mb-0 ff_poppins fw-normal fs_md">Size:</h5>
                <div className="d-flex justify-content-between pt-2">
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    41
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    42
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md ">
                    43
                  </button>
                </div>
                <div className="d-flex justify-content-between mt-2 pt-1">
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    44
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    45
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md ">
                    46
                  </button>
                </div>
                <p className="mb-0 fw-normal ff_poppins fs_md pt-3">
                  View this product as:
                </p>
                <a
                  className="mb-0 ff_poppins fw_semibold fs_md color_blue locker_hover pt-2"
                  href="#"
                >
                  Foot Locker NL
                </a>
              </div>
            </div>
          </Col>
          <Col
            xl={3}
            md={6}
            lg={4}
            className="pt-xl-4 mt-3 mb-3  ps-md-4 pe-xl-0 px-3 "
          >
            {" "}
            <div className="img_box h-100">
              <div className="locker_border d-flex align-items-center justify-content-center py-4">
                <img src={sidestep_img} alt="sidestep_img" />
              </div>
              <div className="py-4 px-3">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-4">
                  <div className="d-flex">
                    <h5 className="mb-0 ff_poppins fw-normal fs_md">Price:</h5>
                    <h5 className="mb-0 ff_poppins fw-semibold fs_xl ps-3">
                      €179,99
                    </h5>
                  </div>
                  <button className="best_price_button ff_poppins fw-normal fs_xsm ">
                    Best Price
                  </button>
                </div>
                <h5 className="mb-0 ff_poppins fw-normal fs_md">Size:</h5>
                <div className="d-flex justify-content-between pt-2">
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    41
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    42
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md ">
                    43
                  </button>
                </div>
                <div className="d-flex justify-content-between mt-2 pt-1">
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    44
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    45
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md ">
                    46
                  </button>
                </div>
                <p className="mb-0 fw-normal ff_poppins fs_md pt-3">
                  View this product as:
                </p>
                <a
                  className="mb-0 ff_poppins fw_semibold fs_md color_blue locker_hover pt-2"
                  href="#"
                >
                  Foot Locker NL
                </a>
              </div>
            </div>
          </Col>
          <Col
            xl={3}
            md={6}
            lg={4}
            className="pt-xl-4 mt-3 mb-xl-3 mb-4 pb-4 pb-xl-0   ps-md-4 pe-xl-0 px-3 "
          >
            {" "}
            <div className="img_box h-100">
              <div className="locker_border d-flex align-items-center justify-content-center py-4">
                <img src={footlocker} alt="footlocker" />
              </div>
              <div className="py-4 px-3">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-4">
                  <div className="d-flex">
                    <h5 className="mb-0 ff_poppins fw-normal fs_md">Price:</h5>
                    <h5 className="mb-0 ff_poppins fw-semibold fs_xl ps-3">
                      €179,99
                    </h5>
                  </div>
                  <button className="best_price_button ff_poppins fw-normal fs_xsm ">
                    Best Price
                  </button>
                </div>
                <h5 className="mb-0 ff_poppins fw-normal fs_md">Size:</h5>
                <div className="d-flex justify-content-between pt-2">
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    41
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    42
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md ">
                    43
                  </button>
                </div>
                <div className="d-flex justify-content-between mt-2 pt-1">
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    44
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    45
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md ">
                    46
                  </button>
                </div>
                <p className="mb-0 fw-normal ff_poppins fs_md pt-3">
                  View this product as:
                </p>
                <a
                  className="mb-0 ff_poppins fw_semibold fs_md color_blue locker_hover pt-2"
                  href="#"
                >
                  Foot Locker NL
                </a>
              </div>
            </div>
          </Col>
          <Col
            xl={3}
            md={6}
            lg={4}
            className="pt-xl-4 mt-3 mb-3  ps-md-4 pe-xl-0 px-3 "
          >
            {" "}
            <div className="img_box h-100">
              <div className="locker_border d-flex align-items-center justify-content-center py-4">
                <img src={sidestep_img} alt="sidestep_img" />
              </div>
              <div className="py-4 px-3">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-4">
                  <div className="d-flex">
                    <h5 className="mb-0 ff_poppins fw-normal fs_md">Price:</h5>
                    <h5 className="mb-0 ff_poppins fw-semibold fs_xl ps-3">
                      €179,99
                    </h5>
                  </div>
                  <button className="best_price_button ff_poppins fw-normal fs_xsm  ff_poppins fw-normal fs_xsm ">
                    Best Price
                  </button>
                </div>
                <h5 className="mb-0 ff_poppins fw-normal fs_md">Size:</h5>
                <div className="d-flex justify-content-between pt-2">
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    41
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    42
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md ">
                    43
                  </button>
                </div>
                <div className="d-flex justify-content-between mt-2 pt-1">
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    44
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md  me-2">
                    45
                  </button>{" "}
                  <button className="mb-0 ff_poppins fw-medium common_size_button fs_md ">
                    46
                  </button>
                </div>
                <p className="mb-0 fw-normal ff_poppins fs_md pt-3">
                  View this product as:
                </p>
                <a
                  className="mb-0 ff_poppins fw_semibold fs_md color_blue locker_hover pt-2"
                  href="#"
                >
                  Foot Locker NL
                </a>
              </div>
            </div>
          </Col>
        </Slider>
      </Container>
    </section>
  );
}

export default FooterLocker;
