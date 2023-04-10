import logo from "./logo.svg";
import "./App.css";
import NavbarSection from "./components/NavbarSection";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import HeaderSection from "./components/HeaderSection";
import FooterLocker from "./components/FooterLocker";
import DESCRIPTION from "./components/DESCRIPTION";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Related from "./components/Related";
import LastSection from "./components/LastSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import logo_img from "./assets/img/png/footer_logo.png";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      delay: 200,
    });
  }, []);
  return (
    <>
      {loading ? (
        <div className="preloader_bg d-flex align-items-center justify-content-center">
          <div className="preloader">
            <img src={logo_img} alt="logo_img" />
          </div>
        </div>
      ) : (
        <>
          <NavbarSection />
          <HeaderSection />
          <FooterLocker />
          <DESCRIPTION />
          <Related />
          <LastSection />
        </>
      )}
    </>
  );
}

export default App;
