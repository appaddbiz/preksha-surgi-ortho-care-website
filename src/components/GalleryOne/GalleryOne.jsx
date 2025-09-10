// GalleryOne.js
"use client";
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap"; // Assuming you're using react-bootstrap
import { galleryData } from "@/data/galleryData";
import { ResponsiveMasonry, Masonry } from "react-responsive-masonry";
import Image from "next/image";
import Link from "next/link";
import GalleryModal from "../GalleryModal/GalleryModal";

const GalleryOne = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (src, index) => {
    setCurrentIndex(index);
    setClickedImg(src);
  };

  const handelRotationRight = () => {
    const totalLength = galleryData.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = galleryData[0].src;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = galleryData.filter((item) => {
      return galleryData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].src;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = galleryData.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = galleryData[totalLength - 1].src;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = galleryData.filter((item) => {
      return galleryData.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].src;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="gallery-one">
      <Container fluid>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}
        >
          <Masonry className="row position-relative" gutter="0.5rem">
            {galleryData.map(({ id, src, alt, href, md, lg }, index) => (
              <Col key={id} md={md} lg={lg}>
                <div className="gallery-one__card">
                  <Image
                    src={src}
                    alt={alt}
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                  <div className="gallery-one__card__hover">
                    <div
                      onClick={() => handleClick(src, index)}
                      className="img-popup"
                    >
                      <span className="gallery-one__card__icon"></span>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
      {/* Modal for Image Popup with Gallery Controls */}
      {clickedImg && (
        <GalleryModal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
          currentIndex={currentIndex}
          length={galleryData.length}
        />
      )}
    </section>
  );
};

export default GalleryOne;
