import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import red_shoes from "../assets/img/png/red_shoes.png";
import black_shoes from "../assets/img/png/black_shoes.png";
import img1 from "../assets/img/png/img1.png";
import black_star from "../assets/img/png/black_start.png";
import Slider from "react-slick";
import precent_img from "../assets/img/png/percent_img.png";

function Related() {
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
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
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
    <section className="py-xl-5 py-4 mb-lg-5">
      <Container>
        <h2 className="mb-0 ff_poppins fw-semibold fs_4xl">RELATED PRODUCT</h2>
        <Slider {...settings} className="row">
          <Col lg={3} sm={4} className="pt-lg-4 mt-2 px-2">
            <div className="shoes_box ">
              <div className="position-relative ">
                <img className="w-100" src={red_shoes} alt="red_shoes" />
                <button className="ff_poppins fw-normal fs_sm new_button position-absolute new_btn_adjust">
                  NEW
                </button>
                <img
                  className="precent_img percent_box_set "
                  src={precent_img}
                  alt="precent_img"
                />
              </div>
              <div className="px-3 pb-4">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="">
                    <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_browndark2">
                      Quickiins Mens Shoes
                    </h3>
                    <div className="d-flex pt-3">
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_darkbrown3">
                        $90.00
                      </h3>
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_red ps-1">
                        $70.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="img1" />
                  </div>
                </div>
                <div className="pt-3">
                  <img src={black_star} alt="black_star" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={4} className="pt-lg-4 mt-2 px-2">
            <div className="shoes_box ">
              <div className="position-relative overfolow_hidden">
                <img className="w-100" src={black_shoes} alt="black_shoes" />
                <button className="ff_poppins fw-normal fs_sm new_button position-absolute new_btn_adjust">
                  NEW
                </button>
                <img
                  className="precent_img percent_box_set "
                  src={precent_img}
                  alt="precent_img"
                />
              </div>
              <div className="px-3 pb-4">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="">
                    <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_browndark2">
                      Quickiins Mens Shoes
                    </h3>
                    <div className="d-flex pt-3">
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_darkbrown3">
                        $90.00
                      </h3>
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_red ps-1">
                        $70.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="img1" />
                  </div>
                </div>
                <div className="pt-3">
                  <img src={black_star} alt="black_star" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={4} className="pt-lg-4 mt-2 px-2">
            <div className="shoes_box ">
              <div className="position-relative overfolow_hidden">
                <img className="w-100" src={red_shoes} alt="red_shoes" />
                <button className="ff_poppins fw-normal fs_sm new_button position-absolute new_btn_adjust">
                  NEW
                </button>
                <img
                  className="precent_img percent_box_set "
                  src={precent_img}
                  alt="precent_img"
                />
              </div>
              <div className="px-3 pb-4">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="">
                    <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_browndark2">
                      Quickiins Mens Shoes
                    </h3>
                    <div className="d-flex pt-3">
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_darkbrown3">
                        $90.00
                      </h3>
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_red ps-1">
                        $70.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="img1" />
                  </div>
                </div>
                <div className="pt-3">
                  <img src={black_star} alt="black_star" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={4} className="pt-lg-4 mt-2 px-2">
            <div className="shoes_box ">
              <div className="position-relative overfolow_hidden">
                <img className="w-100" src={black_shoes} alt="black_shoes" />
                <button className="ff_poppins fw-normal fs_sm new_button position-absolute new_btn_adjust">
                  NEW
                </button>
                <img
                  className="precent_img percent_box_set "
                  src={precent_img}
                  alt="precent_img"
                />
              </div>
              <div className="px-3 pb-4">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="">
                    <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_browndark2">
                      Quickiins Mens Shoes
                    </h3>
                    <div className="d-flex pt-3">
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_darkbrown3">
                        $90.00
                      </h3>
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_red ps-1">
                        $70.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="img1" />
                  </div>
                </div>
                <div className="pt-3">
                  <img src={black_star} alt="black_star" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={4} className="pt-lg-4 mt-2 px-2">
            <div className="shoes_box ">
              <div className="position-relative overfolow_hidden">
                <img className="w-100" src={red_shoes} alt="red_shoes" />
                <button className="ff_poppins fw-normal fs_sm new_button position-absolute new_btn_adjust">
                  NEW
                </button>
                <img
                  className="precent_img percent_box_set "
                  src={precent_img}
                  alt="precent_img"
                />
              </div>
              <div className="px-3 pb-4">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="">
                    <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_browndark2">
                      Quickiins Mens Shoes
                    </h3>
                    <div className="d-flex pt-3">
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_darkbrown3">
                        $90.00
                      </h3>
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_red ps-1">
                        $70.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="img1" />
                  </div>
                </div>
                <div className="pt-3">
                  <img src={black_star} alt="black_star" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={4} className="pt-lg-4 mt-2 px-2">
            <div className="shoes_box ">
              <div className="position-relative overfolow_hidden">
                <img className="w-100" src={black_shoes} alt="black_shoes" />
                <button className="ff_poppins fw-normal fs_sm new_button position-absolute new_btn_adjust">
                  NEW
                </button>
                <img
                  className="precent_img percent_box_set "
                  src={precent_img}
                  alt="precent_img"
                />
              </div>
              <div className="px-3 pb-4">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="">
                    <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_browndark2">
                      Quickiins Mens Shoes
                    </h3>
                    <div className="d-flex pt-3">
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_darkbrown3">
                        $90.00
                      </h3>
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_red ps-1">
                        $70.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="img1" />
                  </div>
                </div>
                <div className="pt-3">
                  <img src={black_star} alt="black_star" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={4} className="pt-lg-4 mt-2 px-2">
            <div className="shoes_box ">
              <div className="position-relative overfolow_hidden">
                <img className="w-100" src={red_shoes} alt="red_shoes" />
                <button className="ff_poppins fw-normal fs_sm new_button position-absolute new_btn_adjust">
                  NEW
                </button>
                <img
                  className="precent_img percent_box_set "
                  src={precent_img}
                  alt="precent_img"
                />
              </div>
              <div className="px-3 pb-4">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="">
                    <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_browndark2">
                      Quickiins Mens Shoes
                    </h3>
                    <div className="d-flex pt-3">
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_darkbrown3">
                        $90.00
                      </h3>
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_red ps-1">
                        $70.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="img1" />
                  </div>
                </div>
                <div className="pt-3">
                  <img src={black_star} alt="black_star" />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} sm={4} className="pt-lg-4 mt-2 px-2">
            <div className="shoes_box ">
              <div className="position-relative overfolow_hidden">
                <img className="w-100" src={black_shoes} alt="black_shoes" />
                <button className="ff_poppins fw-normal fs_sm new_button position-absolute new_btn_adjust">
                  NEW
                </button>
                <img
                  className="precent_img percent_box_set "
                  src={precent_img}
                  alt="precent_img"
                />
              </div>
              <div className="px-3 pb-4">
                {" "}
                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="">
                    <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_browndark2">
                      Quickiins Mens Shoes
                    </h3>
                    <div className="d-flex pt-3">
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_darkbrown3">
                        $90.00
                      </h3>
                      <h3 className="mb-0 ff_poppins fw-medium fs_lg clr_red ps-1">
                        $70.00
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="img1" />
                  </div>
                </div>
                <div className="pt-3">
                  <img src={black_star} alt="black_star" />
                </div>
              </div>
            </div>
          </Col>
        </Slider>
        <div className="d-flex justify-content-end align-items-center pt-sm-5 mt-xl-5 pt-5">
          {" "}
          <button className="ff_poppins fw-semibold fs_xxl button_count">
            1
          </button>
          <button className="ff_poppins fw-semibold fs_xxl button_count ms-2">
            2
          </button>
          <button className="ff_poppins fw-semibold fs_xxl button_count ms-2">
            3
          </button>
          <button className="ff_poppins fw-normal fs_md button_next ms-3">
            Next &gt;&gt;
          </button>
        </div>
      </Container>
    </section>
  );
}

export default Related;
