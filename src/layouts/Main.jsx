import { Outlet } from "react-router-dom";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div data-theme="dark" className="relative bg-bg-primary min-h-screen">
      <NavBar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Main;
