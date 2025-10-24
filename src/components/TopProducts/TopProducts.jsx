import React from "react";
import Img1 from "../../assets/shirt/prb159.png";
import Img2 from "../../assets/shirt/e4h.png";
import Img3 from "../../assets/shirt/d65.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Lemari Es Polytron",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Hisense Smart TV 32 Inch",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Sepeda Listrik U-Winfly D65",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = () => {
  const handleOrderClick = (title) => {
    const message = `halo, mau tanya tentang ${title} dong`;
    const phoneNumber = "6285156930246"; // gunakan format internasional tanpa +
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="container mt-5">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Barang Terlaris Minggu Ini
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Produk Paling Diminati
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Yuk, cek produk favorit pelanggan Columbus! Harga bersahabat,
            kualitas mantap, bisa cash atau kredit.
          </p>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="w-full h-[200px] flex items-center justify-center bg-white">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-h-full max-w-full object-contain transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* details section */}
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() => handleOrderClick(data.title)}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
