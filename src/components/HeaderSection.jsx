import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import head_img from "../assets/img/png/head_img.png";
import start_img from "../assets/img/png/start_img.png";
import head_shoes1 from "../assets/img/png/head_shoes1.png";
import head_shoes2 from "../assets/img/png/head_shoes2.png";
import head_shoes3 from "../assets/img/png/head_shoes3.png";
import head_shoes4 from "../assets/img/png/head_shoes4.png";
import whishlist_img from "../assets/img/png/wishlist.png";
import compair_img from "../assets/img/png/compair_img.png";
import google from "../assets/img/png/google.png";
import fb_img from "../assets/img/png/fb.png";
import share from "../assets/img/png/share.png";
import twiter from "../assets/img/png/twiter.png";
import pinterset from "../assets/img/png/pinterest.png";
function HeaderSection() {
  const [first, setfirst] = useState(1);
  const [ch, setch] = useState(2);
  let minus = () => {
    if (first === 1) {
      setfirst(1);
    } else {
      setfirst(first - 1);
    }
  };
  return (
    <>
      <section className="pt-lg-5 mt-xl-4">
        <Container>
          <Row className="justify-content-center ">
            <Col lg={6}>
              <div className="text-center d-flex justify-content-center">
                <img
                  className={
                    ch === 2
                      ? "d-block  head_img_width head_img_height"
                      : "d-none"
                  }
                  src={head_img}
                  alt="head_img"
                />
                <img
                  className={
                    ch === 3
                      ? "d-block head_img_width head_img_height"
                      : "d-none"
                  }
                  width="100%"
                  src={head_shoes3}
                  alt="head_shoes3"
                />
                <img
                  className={
                    ch === 4
                      ? "d-block head_img_width head_img_height"
                      : "d-none"
                  }
                  width="100%"
                  src={head_shoes4}
                  alt="head_shoes4"
                />
                <div className={ch === 1 ? "d-block " : "d-none"}>
                  {" "}
                  <img
                    className="head_img_width head_img_height"
                    width="100%"
                    src={head_shoes1}
                    alt="head_shoes1"
                  />
                </div>
              </div>
              <Row className="pt-4">
                <Col sm={3} xs={3}>
                  <img
                    onClick={() => setch(1)}
                    className="w-100  cursor_pointer"
                    src={head_shoes1}
                    alt="head_shoes1"
                  />
                </Col>
                <Col sm={3} xs={3}>
                  <img
                    onClick={() => setch(2)}
                    className="w-100 cursor_pointer"
                    src={head_shoes2}
                    alt="head_shoes2"
                  />
                </Col>
                <Col sm={3} xs={3}>
                  {" "}
                  <img
                    onClick={() => setch(3)}
                    className="w-100 cursor_pointer"
                    src={head_shoes3}
                    alt="head_shoes3"
                  />
                </Col>
                <Col sm={3} xs={3}>
                  {" "}
                  <img
                    onClick={() => setch(4)}
                    className="w-100 cursor_pointer"
                    src={head_shoes4}
                    alt="head_shoes4"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6} sm={12} className="pt-4 pt-lg-0 ps-xl-4">
              <h1 className="mb-0 pb-xl-3 ff_poppins fw-semibold fs_4xl pt-3">
                PREMIUM MENS SPORTS LATHER KEDS
              </h1>
              <div className="d-flex align-items-center">
                <img src={start_img} alt="start_img" />
                <p className="mb-0 ff_poppins fw-normal fs_xl ps-2 clr_brown">
                  ( 5 Customer Review )
                </p>
              </div>
              <p className="mb-0 paragrahp_common pt-xl-4 pt-2 pb-xl-2 pb-lg-0 pb-3">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta. Sed eget congue
                neque, mattis finibus neque. In vel dolor ac augue pretium
              </p>
              <div className="d-flex align-items-center pt-xxl-5 pt-3 mt-xxl-5">
                <h6 className="mb-0 ff_poppins  fw-medium fs_xl pe-4">Qty: </h6>
                <div className="border1 d-flex align-items-center justify-content-center">
                  <button
                    onClick={minus}
                    className="ff_josefin fw-normal fs_xl clr_browndark border-0 bg-white"
                  >
                    -
                  </button>
                  <p
                    className="ff_josefin fw-normal fs_xl clr_browndark2 mb-0 px-3"
                    href="#"
                  >
                    {first}
                  </p>
                  <button
                    onClick={() => setfirst(first + 1)}
                    className="ff_josefin fw-normal fs_xl clr_browndark2 border-0 bg-white"
                  >
                    +
                  </button>
                </div>
                <button className="add_to_card_button ff_poppins fw-medium fs_xl ms-sm-3 ms-2">
                  Add to Cart
                </button>
              </div>
              <form className="pt-xl-4 pt-3" action="/action_page.php">
                <label className="ff_poppins fw-medium fs_xl me-3" for="cars">
                  Size:
                </label>
                <select
                  className="border2 mw_100 px-3 arrow ff_josefin fw-normal fs_xl"
                  id="cars"
                  name="cars"
                >
                  <option
                    className="ps-2 ff_josefin fw-normal fs_xl"
                    value="volvo"
                  >
                    S
                  </option>
                  <option value="saab">m</option>
                  <option value="fiat">L</option>
                </select>
              </form>
              <div className="d-flex align-items-center pt-xl-4 pt-3">
                <h6 className="mb-0 ff_poppins  fw-medium fs_xl pe-4 ">
                  Color:
                </h6>
                <div className="d-flex">
                  <div className="border3 p-1 d-flex align-items-center justify-content-center">
                    <div className="box_1"></div>
                  </div>
                  <div className="border3 ms-2 p-1 d-flex align-items-center justify-content-center">
                    <div className="box_2"></div>
                  </div>
                  <div className="border3 ms-2 p-1 d-flex align-items-center justify-content-center">
                    <div className="box_3"></div>
                  </div>
                  <div className="border3 ms-2 p-1 d-flex align-items-center justify-content-center">
                    <div className="box_4"></div>
                  </div>
                </div>
              </div>
              <div className="pt-xl-4 pt-3 d-flex mt-2 align-items-center pb-4">
                <a className="d-flex align_items_center hover_stroke" href="#">
                  {" "}
                  <img src={compair_img} alt="compair_img" />
                  <p className="mb-0 ff_poppins fw_lighter fs_md ps-1 clr_lightblack">
                    Compare
                  </p>
                </a>
                <a
                  className="d-flex align_items_center ms-4 hover_stroke"
                  href="#"
                >
                  <img src={whishlist_img} alt="whishlist_img" />
                  <p className="mb-0 ff_poppins fw_lighter fs_md ps-2 clr_lightblack">
                    Wishlist
                  </p>
                </a>
              </div>
              <div className="hr_line mt-xl-4 "></div>
              <div className="pt-4">
                <a className=" " href="#">
                  <img className="hover_transform_20" src={share} alt="share" />
                </a>
                <a className="ms-4 " href="#">
                  <img
                    className="hover_transform_20"
                    src={fb_img}
                    alt="fb_img"
                  />
                </a>
                <a className="ms-4 " href="#">
                  <img
                    className="hover_transform_20"
                    src={twiter}
                    alt="twiter"
                  />
                </a>
                <a className="ms-4 " href="#">
                  <img
                    className="hover_transform_20"
                    src={pinterset}
                    alt="pinterset"
                  />
                </a>
                <a className="ms-4 " href="#">
                  <img
                    className="hover_transform_20"
                    src={google}
                    alt="google"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HeaderSection;
