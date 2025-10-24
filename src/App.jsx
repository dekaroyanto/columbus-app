import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

import Elektronik from "./pages/Elektronik/Elektronik";
import Meubel from "./pages/Meubel/Meubel";
import Karir from "./pages/Karir/Karir";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 min-h-screen flex flex-col">
      <Navbar handleOrderPopup={handleOrderPopup} />

      <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Testimonials />
              </>
            }
          />
          <Route path="/elektronik" element={<Elektronik />} />
          <Route path="/meubel" element={<Meubel />} />
          <Route path="/karir" element={<Karir />} />
        </Routes>
      </div>

      <Footer />
      {/* <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
    </div>
  );
};

export default App;
