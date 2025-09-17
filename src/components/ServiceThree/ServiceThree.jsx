"use client";
import { Container, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import Image from "next/image";
import serviceThreeData from "@/data/ServiceThreeData";
import JarallaxImage from "../Jarallax/JarallaxImage";
import Link from "next/link";
const Jarallax = dynamic(() => import("@/components/Jarallax/Jarallax"), {
  ssr: false,
});

// Dynamic import for Tiny Slider
const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const ServiceThree = ({ variant = "carousel" }) => {
  const { tagLine, title, carouselData, bg, shape } = serviceThreeData;

  const settings = {
    items: 1,
    slideby: "page",
    gutter: 30,
    loop: false,
    smartSpeed: 700,
    controls: false,
    nav: true,
    autoplay: false,
    mouseDrag: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  };

  return (
    <section className="service-three" id="service">
      <div
        className="service-three__shape"
        style={{
          backgroundImage: `url(${shape.src})`,
        }}
      />
      <Container>
        <div className="sec-title-three text-center">
          <h6 className="sec-title-three__tagline">
            <span className="sec-title-three__tagline__left-border"></span>
            {tagLine}
            <span className="sec-title-three__tagline__right-border"></span>
          </h6>
          <h3 className="sec-title-three__title">{title}</h3>
        </div>
        {variant === "carousel" ? (
          <div className="tolak-carousel--basic-nav">
            <TinySlider settings={settings} className="service-three__carousel">
              {carouselData.map(({ id, image, icon, title, text, href }) => (
                <div key={id} className="item">
                  <div className="service-three__item text-center">
                    <div className="service-three__item__content">
                      <div className="service-three__item__icon">
                        <Image src={icon} height={50} width={50} alt="" />
                      </div>
                      <h3 className="service-three__item__title">
                        <Link href={href}>{title}</Link>
                      </h3>
                      <p className="service-three__item__text">{text}</p>
                    </div>
                    <div className="service-three__item__image">
                      <Image src={image} alt={title} width={370} height={227} />
                      <Link className="service-three__item__rm" href={href}>
                        <span className="tolak-icons-two-arrow-right-short"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </TinySlider>
          </div>
        ) : (
          <Row className="gutter-y-30">
            {carouselData.map(({ id, image, icon, title, text, href }) => (
              <Col key={id} md={6} lg={4}>
                <div className="service-three__item text-center">
                  <div className="service-three__item__content">
                    <div className="service-three__item__icon">
                      <Image src={icon} height={50} width={50} alt="" />
                    </div>
                    <h3 className="service-three__item__title">
                      <Link href={href}>{title}</Link>
                    </h3>
                    <p className="service-three__item__text">{text}</p>
                  </div>
                  <div className="service-three__item__image">
                    <Image src={image} alt={title} width={370} height={227} />
                    <Link className="service-three__item__rm" href={href}>
                      <span className="tolak-icons-two-arrow-right-short"></span>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default ServiceThree;
