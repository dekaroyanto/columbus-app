// src/components/ProductPage.jsx
import React, { useState } from "react";
import ElektronikCard from "./ElektronikCard";

const Elektronik = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Smart TV LED 55 Inch 4K UHD",
      price: 5499000,
      originalPrice: 6999000,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      rating: 4.7,
      sold: 89,
      brand: "Samsung",
      features: ["4K Resolution", "Smart TV", "HDR"],
    },
    {
      id: 2,
      name: "Kulkas 2 Pintu LG Inverter",
      price: 3899000,
      originalPrice: 4599000,
      image:
        "https://plus.unsplash.com/premium_photo-1729431432431-fabe5caa7078?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=784",
      rating: 4.5,
      sold: 124,
      brand: "LG",
      features: ["Inverter", "No Frost", "350L"],
    },
    {
      id: 3,
      name: "Speaker Active Bluetooth JBL",
      price: 1250000,
      originalPrice: 1599000,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
      rating: 4.8,
      sold: 256,
      brand: "JBL",
      features: ["Bluetooth 5.0", "Waterproof", "20W"],
    },
    {
      id: 4,
      name: "TV Android 43 Inch Full HD",
      price: 2899000,
      originalPrice: 3499000,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
      rating: 4.4,
      sold: 167,
      brand: "Sharp",
      features: ["Android TV", "Full HD", "Netflix"],
    },
    {
      id: 5,
      name: "Kulkas Mini 1 Pintu Sharp",
      price: 1899000,
      originalPrice: 2299000,
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400",
      rating: 4.3,
      sold: 98,
      brand: "Sharp",
      features: ["Mini", "Energy Save", "85L"],
    },
    {
      id: 6,
      name: "Speaker Soundbar Sony HT-S200",
      price: 2199000,
      originalPrice: 2799000,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      rating: 4.6,
      sold: 73,
      brand: "Sony",
      features: ["Soundbar", "Dolby Audio", "Bluetooth"],
    },
    {
      id: 7,
      name: "OLED TV 65 Inch LG Gallery",
      price: 12999000,
      originalPrice: 15999000,
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      rating: 4.9,
      sold: 45,
      brand: "LG",
      features: ["OLED", "4K", "AI ThinQ"],
    },
    {
      id: 8,
      name: "Kulkas Side by Side Samsung",
      price: 8999000,
      originalPrice: 10999000,
      image:
        "https://images.unsplash.com/photo-1721613877687-c9099b698faa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      rating: 4.7,
      sold: 67,
      brand: "Samsung",
      features: ["Side by Side", "Digital Inverter", "600L"],
    },
    {
      id: 9,
      name: "Speaker Portable Bose SoundLink",
      price: 3499000,
      originalPrice: 4299000,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      rating: 4.8,
      sold: 189,
      brand: "Advance",
      features: ["360° Sound", "12hr Battery", "IP67"],
    },
    {
      id: 10,
      name: "Smart TV Xiaomi 50 Inch 4K",
      price: 4299000,
      originalPrice: 4999000,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
      rating: 4.5,
      sold: 234,
      brand: "Xiaomi",
      features: ["PatchWall", "Google Assistant", "Dolby Audio"],
    },
    {
      id: 11,
      name: "Kulkas Toshiba Glass Door",
      price: 6599000,
      originalPrice: 7999000,
      image:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
      rating: 4.6,
      sold: 52,
      brand: "Hisense",
      features: ["Glass Door", "Touch Control", "485L"],
    },
    {
      id: 12,
      name: "Speaker Gaming RGB Logitech",
      price: 899000,
      originalPrice: 1199000,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
      rating: 4.4,
      sold: 312,
      brand: "Advance",
      features: ["RGB Lighting", "2.1 Channel", "Gaming Mode"],
    },
    {
      id: 13,
      name: "TV LED 32 Inch Hisense",
      price: 1899000,
      originalPrice: 2299000,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
      rating: 4.2,
      sold: 178,
      brand: "Hisense",
      features: ["HD Ready", "Smart TV", "Netflix"],
    },
    {
      id: 14,
      name: "Kulkas 1 Pintu Advance Cool",
      price: 1599000,
      originalPrice: 1999000,
      image:
        "https://images.unsplash.com/photo-1723661973650-febc670fcea2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHJlZnJpZ2VyYXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      rating: 4.1,
      sold: 89,
      brand: "Advance",
      features: ["Energy Saving", "Low Noise", "120L"],
    },
    {
      id: 15,
      name: "Speaker Bluetooth Sharp",
      price: 699000,
      originalPrice: 899000,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
      rating: 4.3,
      sold: 145,
      brand: "Sharp",
      features: ["Bluetooth", "10W Output", "Bass Boost"],
    },
    {
      id: 16,
      name: "Smart TV Hisense 43 Inch",
      price: 3299000,
      originalPrice: 3999000,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
      rating: 4.5,
      sold: 112,
      brand: "Hisense",
      features: ["4K UHD", "Voice Remote", "VIDAA U"],
    },
  ];

  const filteredProducts =
    selectedBrand === "all"
      ? products
      : products.filter((product) => product.brand === selectedBrand);

  const brands = ["all", ...new Set(products.map((product) => product.brand))];

  const getBrandDisplayName = (brand) => {
    if (brand === "all") return "Semua Merk";
    return brand;
  };

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setIsDropdownOpen(false);
  };

  const clearFilter = () => {
    setSelectedBrand("all");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Elektronik Rumah Tangga
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Temukan peralatan elektronik terbaik untuk rumah Anda
          </p>

          {/* Dropdown Filter dengan Icon Hapus */}
          <div className="flex justify-center mb-6">
            <div className="relative w-64 flex items-center gap-2">
              {/* Dropdown Button */}
              <div className="relative flex-1">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-blue-600 transition-colors duration-200 shadow-sm"
                >
                  <span className="text-gray-700 font-medium">
                    {getBrandDisplayName(selectedBrand)}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => handleBrandSelect(brand)}
                        className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-center justify-between ${
                          selectedBrand === brand
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-700"
                        } ${brand === "all" ? "border-b border-gray-100" : ""}`}
                      >
                        <span>{getBrandDisplayName(brand)}</span>
                        {selectedBrand === brand && (
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Products Count */}
        {/* <div className="mb-6 flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-200">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700 font-medium">
              {filteredProducts.length} produk ditemukan
              {selectedBrand !== "all" && (
                <span className="text-yellow-500 ml-1">
                  dari {selectedBrand}
                </span>
              )}
            </span>
          </div>
        </div> */}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ElektronikCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="text-gray-300 mb-4">
              <svg
                className="w-20 h-20 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-8V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1M9 7h6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-3">
              Produk Tidak Ditemukan
            </h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto leading-relaxed">
              Maaf, saat ini tidak ada produk dari merk{" "}
              <span className="font-semibold text-blue-600">
                {selectedBrand}
              </span>{" "}
              yang tersedia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={clearFilter}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                Lihat Semua Produk
              </button>
              <button
                onClick={() => setIsDropdownOpen(true)}
                className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                    clipRule="evenodd"
                  />
                </svg>
                Pilih Merk Lain
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Elektronik;
