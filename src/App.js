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
function App() {
  return (
    <>
      <NavbarSection />
      <HeaderSection />
      <FooterLocker />
      <DESCRIPTION />
      <Related />
      <LastSection />
    </>
  );
}

export default App;
