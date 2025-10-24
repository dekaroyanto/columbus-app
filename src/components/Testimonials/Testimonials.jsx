import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Rina Andriyani",
    text: "Pelayanannya ramah banget! Saya beli kulkas di Columbus secara kredit, prosesnya cepat dan barang langsung dikirim ke rumah. Recommended banget buat yang cari elektronik berkualitas.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ahmad Fauzi",
    text: "Saya sudah beberapa kali beli barang di Columbus, mulai dari TV sampai sofa. Harganya bersaing, barangnya bagus, dan bisa dicicil tanpa ribet. Terpercaya pokoknya!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 3,
    name: "Siti Marlina",
    text: "Awalnya ragu beli secara kredit, tapi setelah coba di Columbus ternyata gampang banget. Adminnya responsif dan pengantaran cepat. Sekarang rumah jadi makin nyaman.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Budi Santoso",
    text: "Saya beli mesin cuci di Columbus dan kualitasnya oke. Selain itu, mereka sering ada promo menarik. Sangat membantu untuk kebutuhan rumah tangga.",
    img: "https://picsum.photos/104/104",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10 dark:bg-gray-900 dark:text-white duration-300">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Apa kata pelanggan kami
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimoni Pelanggan Columbus
          </h1>
          <p
            data-aos="fade-up"
            className="text-xs text-gray-400 dark:text-gray-300"
          >
            Berikut pengalaman nyata dari pelanggan yang telah berbelanja
            elektronik dan meubel di Columbus secara cash maupun kredit.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-yellow-200 relative">
                  <div className="mb-4 flex justify-center">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3 text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {data.text}
                      </p>
                      <h1 className="text-lg font-bold text-black/80 dark:text-gray-300">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/10 text-9xl font-serif absolute top-0 right-2 dark:text-gray-300">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom slick dots style */}
      <style jsx>{`
        .slick-dots li button:before {
          color: #333;
          opacity: 0.5;
        }
        .dark .slick-dots li button:before {
          color: #fff !important;
          opacity: 0.8;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #facc15; /* kuning untuk active dot */
        }
        .dark .slick-dots li.slick-active button:before {
          color: #fff !important;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
