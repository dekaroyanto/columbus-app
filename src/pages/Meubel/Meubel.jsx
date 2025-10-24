// src/components/Meubel.jsx
import React, { useState } from "react";
import MeubelCard from "./MeubelCard";

const Meubel = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Sofa Minimalis",
      price: 4599000,
      originalPrice: 5299000,
      image:
        "https://plus.unsplash.com/premium_photo-1683120769541-a8847ff686bf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mYSUyMGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      rating: 4.7,
      sold: 122,
      brand: "IKEA",
      features: ["Bahan Lembut", "Desain Minimalis", "3 Dudukan"],
    },
    {
      id: 2,
      name: "Meja Makan Kayu",
      price: 5799000,
      originalPrice: 6599000,
      image:
        "https://plus.unsplash.com/premium_photo-1675744019321-f90d6d719da7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGluaW5nJTIwdGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      rating: 4.6,
      sold: 89,
      brand: "Olympic",
      features: ["Kayu Jati", "Finishing Halus", "6 Kursi"],
    },
    {
      id: 3,
      name: "Lemari Pakaian",
      price: 3299000,
      originalPrice: 3999000,
      image:
        "https://images.unsplash.com/photo-1683181181300-44c0c991a2cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      rating: 4.5,
      sold: 105,
      brand: "Informa",
      features: ["Pintu Geser", "Cermin Besar", "3 Sekat"],
    },
    {
      id: 5,
      name: "Meja Minimalis",
      price: 499000,
      originalPrice: 699000,
      image:
        "https://images.unsplash.com/photo-1698770531036-c627d35188f2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      rating: 4.3,
      sold: 204,
      brand: "ACE",
      features: ["Portable", "Rangka Baja", "Tahan Lama"],
    },
    {
      id: 6,
      name: "Sofa L Minimalis",
      price: 6499000,
      originalPrice: 7599000,
      image:
        "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpdmFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      rating: 4.8,
      sold: 67,
      brand: "IKEA",
      features: ["Kayu Solid", "Headboard", "Finishing Matte"],
    },
    {
      id: 7,
      name: "Kursi Minimalis",
      price: 899000,
      originalPrice: 1299000,
      image:
        "https://images.unsplash.com/photo-1684165610413-2401399e0e59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpdmFufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
      rating: 4.6,
      sold: 98,
      brand: "Dekoruma",
      features: ["Kayu Oak", "Ringan", "Gaya Modern"],
    },
    {
      id: 8,
      name: "Kitchen Set",
      price: 2599000,
      originalPrice: 2999000,
      image:
        "https://images.unsplash.com/photo-1539922980492-38f6673af8dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdGNoZW4lMjBzZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      rating: 4.4,
      sold: 86,
      brand: "Informa",
      features: ["Pintu Soft Close", "Rak Adjustable", "Tahan Air"],
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
            Meubel & Furnitur
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Temukan koleksi meubel terbaik untuk mempercantik ruangan Anda
          </p>

          {/* Dropdown Filter */}
          <div className="flex justify-center mb-6">
            <div className="relative w-64 flex items-center gap-2">
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
              <MeubelCard key={product.id} product={product} />
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
                Lihat Semua Produk
              </button>
              <button
                onClick={() => setIsDropdownOpen(true)}
                className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                Pilih Merk Lain
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meubel;
