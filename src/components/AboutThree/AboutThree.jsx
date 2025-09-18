"use client";
import aboutThreeData from "@/data/AboutThreeData";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { Col, Container, Row } from "react-bootstrap";
import VideoModal from "../VideoModal/VideoModal";
import AnimatedProgressBar from "../AnimatedProgressBar/AnimatedProgressBar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const {
  shape,
  shape2,
  image1,
  image2,
  author,
  aboutSign,
  factText,
  factIcon,
  factCount,
  tagLine,
  title,
  text,
  text2,
  text3,
  percentage,
  lists,
  skillTitle,
  skillText,
  contQuote,
  videoId,
  authorText,
} = aboutThreeData;

const AboutThree = () => {
  const path = usePathname();

  const [counterOn, setCounterOn] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <section className="about-three" id="about">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about-three__image">
                <div className="about-one-img about-three__image__shape">
                  <Image src={shape} alt="tolak" />
                </div>
                <div className="about-three__image__shape-two">
                  <Image src={shape2} alt="tolak" />
                </div>
                <div className="sec-title-two-mobile sec-title-two text-left">
                  <h6 className="sec-title-two__tagline">
                    <span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>
                    {tagLine}
                    <span className="sec-title-two__tagline__right icofont-rounded-double-right"></span>
                  </h6>
                  <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <Row>
                  <Col md={6}>
                    <ScrollTrigger
                      onEnter={() => setCounterOn(true)}
                      onExit={() => setCounterOn(false)}
                    >
                      <div className="about-one-img about-three__image__one">
                        <Image
                          src={"/home-images/Ortho-Care.jpg"}
                          width={301}
                          height={486}
                          alt="tolak"
                        />
                      </div>
                      <div className="about-one-img about-three__fact count-box">
                        <div className="about-three__fact__icon">
                          <i className={factIcon}></i>
                        </div>
                        <h3 className="about-three__fact__count">
                          {counterOn && (
                            <CountUp
                              className="count-text"
                              end={factCount}
                              duration={1.5}
                            />
                          )}
                          k+
                        </h3>
                        <p className="about-three__fact__text">{factText}</p>
                      </div>
                    </ScrollTrigger>
                  </Col>
                  <Col md={6}>
                    <div className=" about-three__image__two">
                      <Image
                        src={"/gallery/_JUP0245.webp"}
                        width={301}
                        height={554}
                        alt="tolak"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col
              lg={6}
              className=" wow fadeInRight"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="about-three__content">
                <div className="sec-title-two-desktop sec-title-two text-left">
                  <h6 className="sec-title-two__tagline">
                    <span className="sec-title-two__tagline__left icofont-rounded-double-left"></span>
                    {tagLine}
                    <span className="sec-title-two__tagline__right icofont-rounded-double-right"></span>
                  </h6>
                  <h3 className="sec-title-two__title">{title}</h3>
                </div>
                <p
                  className="about-three__content__text"
                  style={{ textAlign: "justify" }}
                >
                  {text.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      {t} <br />
                    </Fragment>
                  ))}
                </p>
                <p
                  className="about-three__content__text"
                  style={{ textAlign: "justify" }}
                >
                  {text2.split("\n").map((t, i) => (
                    <Fragment key={i}>{t}</Fragment>
                  ))}
                </p>
                {path === "/about" && (
                  <p
                    className="about-three__content__text"
                    style={{ textAlign: "justify" }}
                  >
                    {text3.split("\n").map((t, i) => (
                      <Fragment key={i}>{t}</Fragment>
                    ))}
                  </p>
                )}

                {/* <div className='about-three__content__bar'></div> */}
                {/* <Row>
                  <Col md={5}>
                    <ul className='about-three__content__list'>
                      {lists.map((l, i) => (
                        <li key={i}>{l}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col md={7}>
                    <AnimatedProgressBar
                      service="about"
                      progress={percentage}
                      title={skillTitle}
                      text={skillText}

                    />

                  </Col>
                </Row> */}
                {path === "/" && (
                  <>
                    <div className="about-three__content__quote">
                      {contQuote}
                    </div>
                    <Row>
                      <Col md={6} className="faq-one__image">
                        <Link href="/about" className="tolak-btn">
                          <b>Discover More</b>
                          <span></span>
                        </Link>
                      </Col>
                      <Col md={6}>
                        <Link
                          href="tel:+919108636085"
                          className="tolak-btn about-one-img"
                        >
                          <b>Book An Appointment</b>
                          <span></span>
                        </Link>
                      </Col>
                      {/* <Col lg={7}>
                    <div className="about-three__content__author">
                      <div className="about-three__content__author__image">
                        <Image src={author} alt="tolak" />
                      </div>
                      <Image src={aboutSign} alt="tolak" />
                      <p className="about-three__content__author__text">
                        {authorText}
                      </p>
                    </div>
                  </Col> */}
                    </Row>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} id={videoId} />
    </>
  );
};

export default AboutThree;
