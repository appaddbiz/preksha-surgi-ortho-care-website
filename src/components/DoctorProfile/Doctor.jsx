"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { tabOneData } from "@/data/TabOneData";
import Link from "next/link";

const { tagLine, title, tabContents } = tabOneData;

const Doctor = () => {
  return (
    <section className="tab-one" id="tab">
      <Container className="tabs-box">
        <div className="sec-title-four text-center">
          <h6 className="sec-title-four__tagline">
            <span className="sec-title-four__tagline__left-border"></span>
            {tagLine}
            <span className="sec-title-four__tagline__right-border"></span>
          </h6>
          <h3 className="sec-title-four__title">{title}</h3>
        </div>

        {/* Render contents alternately (image left/right) */}
        <div className="tabs-content">
          {tabContents.map(
            ({ id, image, title, text, listItems, authors, link }, index) => (
              <div key={id} className="tab fadeInUp animated active-tab">
                <Row className="mb-5 align-items-center">
                  {/* If index is even → image left, text right */}
                  {index % 2 === 0 ? (
                    <>
                      <Col lg={6}>
                        <div className="tab-one__thumb">
                          <Image
                            src={image}
                            width={543}
                            height={507}
                            alt={title}
                          />
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="tab-one__content">
                          <h3 className="tab-one__content__title">{title}</h3>
                          <p
                            className="tab-one__content__text"
                            style={{ textAlign: "justify" }}
                          >
                            {text}
                          </p>
                          <ul className="tab-one__content__list">
                            {listItems.map((item, idx) => (
                              <li key={idx}>
                                <i className="tolak-icons-two-arrow-circle-right"></i>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="cta-three__author">
                            {authors.map((author, idx) => (
                              <React.Fragment key={idx}>
                                <Link
                                  href={link}
                                  className="tolak-btn-two tolak-btn-two--home-six"
                                >
                                  <span className="tolak-btn-two__left-star"></span>
                                  <span>
                                    View Profile
                                    <i className="tolak-icons-two-arrow-right-short"></i>
                                  </span>
                                  <span className="tolak-btn-two__right-star"></span>
                                </Link>{" "}
                                &ensp;
                                <Link
                                  href="tel:+919108636085"
                                  className="tolak-btn-two tolak-btn-two--home-six"
                                >
                                  <span className="tolak-btn-two__left-star"></span>
                                  <span>
                                    Get Appointment
                                    <i className="tolak-icons-two-arrow-right-short"></i>
                                  </span>
                                  <span className="tolak-btn-two__right-star"></span>
                                </Link>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </Col>
                    </>
                  ) : (
                    // If index is odd → text left, image right
                    <>
                      <Col lg={6} className="order-lg-2">
                        <div className="tab-one__thumb">
                          <Image
                            src={image}
                            width={543}
                            height={507}
                            alt={title}
                          />
                        </div>
                      </Col>
                      <Col lg={6} className="order-lg-1">
                        <div className="tab-one__content">
                          <h3 className="tab-one__content__title">{title}</h3>
                          <p
                            className="tab-one__content__text"
                            style={{ textAlign: "justify" }}
                          >
                            {text}
                          </p>
                          <ul className="tab-one__content__list">
                            {listItems.map((item, idx) => (
                              <li key={idx}>
                                <i className="tolak-icons-two-arrow-circle-right"></i>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="cta-three__author">
                            {authors.map((author, idx) => (
                              <React.Fragment key={idx}>
                                <Link
                                  href={link}
                                  className="tolak-btn-two tolak-btn-two--home-six"
                                >
                                  <span className="tolak-btn-two__left-star"></span>
                                  <span>
                                    View Profile
                                    <i className="tolak-icons-two-arrow-right-short"></i>
                                  </span>
                                  <span className="tolak-btn-two__right-star"></span>
                                </Link>{" "}
                                &ensp;
                                <Link
                                  href="tel:+919108636085"
                                  className="tolak-btn-two tolak-btn-two--home-six"
                                >
                                  <span className="tolak-btn-two__left-star"></span>
                                  <span>
                                    Get Appointment
                                    <i className="tolak-icons-two-arrow-right-short"></i>
                                  </span>
                                  <span className="tolak-btn-two__right-star"></span>
                                </Link>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </Col>
                    </>
                  )}
                </Row>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Doctor;
