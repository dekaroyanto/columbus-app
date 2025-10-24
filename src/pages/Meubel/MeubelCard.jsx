import React from "react";

const MeubelCard = ({ product }) => {
  const phoneNumber = "625156930246";

  const handleProductClick = () => {
    const message = `Halo, mau tanya tentang ${product.name} dong`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:-translate-y-1 hover:shadow-lg transition duration-300 
      dark:bg-gray-800 dark:text-white hover:bg-black/80 dark:hover:bg-primary hover:text-white"
      onClick={handleProductClick}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          Promo
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2 h-12">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
            <svg
              className="w-4 h-4 mr-1 text-gray-500 dark:text-gray-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Majalengka
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
            Chat WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeubelCard;
