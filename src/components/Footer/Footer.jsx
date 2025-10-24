import React from "react";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container">
        {/* Gunakan place-items-center untuk meratakan grid ke tengah tapi teks tetap left */}
        <div className="grid md:grid-cols-2 gap-10 py-16 md:pb-32 place-items-center">
          {/* Company details (left side) */}
          <div className="px-4 flex flex-col justify-center max-w-md">
            <h1 className="sm:text-3xl text-2xl font-bold mb-4 flex items-center gap-3">
              PT. Columbus
            </h1>
            <p className="text-gray-200 leading-relaxed">
              Perusahaan terpercaya yang menyediakan berbagai produk elektronik
              dan meubel berkualitas tinggi. Kami melayani pembelian secara cash
              kredit dengan proses mudah, cepat, dan aman.
            </p>
          </div>

          {/* Contact and social (right side) */}
          <div className="px-4 flex flex-col justify-center max-w-md">
            <h1 className="sm:text-2xl text-xl font-bold mb-4">Hubungi Kami</h1>

            {/* Social icons */}
            <div className="flex items-center gap-4 mb-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>

            {/* Contact info */}
            <div className="space-y-3 text-gray-200 text-sm">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Majalengka, Indonesia</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+62 812 3456 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
