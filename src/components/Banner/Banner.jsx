"use client";

import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div>
      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-banner {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .desk-banner {
            display: none;
          }
        }
      `}</style>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: "1800px", margin: "0 auto" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* Banner 1 */}
            <div className="desk-banner">
              <img
                src="/updated-banners/Advanced Orthopaedic Care.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="mobile-banner">
              <img
                src="/updated-banners/mobile-2.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item">
            {/* Banner 1 */}
            <div className="desk-banner">
              <img
                src="/updated-banners/Dr. Shashank Joshi.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="mobile-banner">
              <img
                src="/updated-banners/mobile.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item">
            {/* Banner 1 */}
            <div className="desk-banner">
              <img
                src="/updated-banners/Dr. Prerana R T.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="mobile-banner">
              <img
                src="/updated-banners/mobile-1.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>

          <div className="carousel-item">
            {/* Banner 2 */}
            <div className="desk-banner">
              <img
                src="/updated-banners/Laparoscopic & General Surgeries.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="mobile-banner">
              <img
                src="/updated-banners/mobile-3.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item">
            {/* Banner 2 */}
            <div className="desk-banner">
              <img
                src="/updated-banners/Piles, Fistula & Diabetic Foot Care.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="mobile-banner">
              <img
                src="/updated-banners/mobile-4.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          {/* Add more carousel-item blocks for more banners */}
        </div>
        <button
          className="carousel-control-prev"
          style={{ backgroundColor: "transparent", border: 0 }}
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          style={{ backgroundColor: "transparent", border: 0 }}
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
