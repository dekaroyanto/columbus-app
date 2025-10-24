import React from "react";

const Karir = () => {
  const positions = [
    {
      title: "Kolektor",
      description:
        "Bertanggung jawab dalam pengumpulan dan pengelolaan pembayaran",
    },
    {
      title: "Pramuniaga",
      description: "Melayani pelanggan dan menjaga kualitas pelayanan",
    },
    {
      title: "Marketing",
      description: "Mengembangkan pasar dan membangun relasi dengan pelanggan",
    },
  ];

  const qualifications = [
    "Pria/wanita",
    "Berusia 18-35 tahun",
    "Diutamakan mempunyai kendaraan",
    "Mampu bekerja bersama tim",
    "Pekerja keras dan mau belajar",
    "Pengalaman tidak diutamakan",
  ];

  const benefits = [
    "Disediakan mess/tempat tinggal",
    "Tunjangan transportasi",
    "Tunjangan kesehatan",
    "Tunjangan kecelakaan",
    "Penghasilan tidak terbatas",
  ];

  // Nomor WhatsApp dan pesan default
  const waNumber = "6285156930246"; // gunakan kode negara (62)
  const waMessage = "Halo, saya ingin melamar pekerjaan di PT. Columbus";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bergabunglah Dengan Tim Kami
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Temukan peluang karir yang menarik dan kembangkan potensi Anda
            bersama kami
          </p>
        </div>

        {/* Positions Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
            Posisi yang Tersedia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-yellow-300 to-yellow-400 dark:from-yellow-400 dark:to-amber-300 text-gray-800 dark:text-gray-900 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold mb-3">{position.title}</h3>
                <p className="text-gray-700 dark:text-gray-800">
                  {position.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Qualifications Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Kualifikasi
            </h2>
            <ul className="space-y-4">
              {qualifications.map((qualification, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 dark:text-green-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">
                    {qualification}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              Benefit
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-500 dark:text-yellow-400 mr-3 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 rounded-2xl shadow-lg p-8 mt-8 text-center transition-colors duration-300">
          <h2 className="text-3xl font-bold text-white mb-4">
            Segera Daftarkan Diri Anda!
          </h2>
          <p className="text-green-100 dark:text-green-200 text-lg mb-6 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk berkembang bersama perusahaan kami.
            Bergabunglah sekarang dan raih karir impian Anda.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-100 text-green-600 dark:text-green-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 dark:hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Lamar Sekarang
          </a>
        </div>

        {/* Office Address */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-8 text-center transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Head Office
          </h2>
          <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
            <svg
              className="w-6 h-6 mr-2 text-red-500 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-lg">
              Jl KH Abdul Halim Ruko Equator No 4-5 Majalengka Kulon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karir;
