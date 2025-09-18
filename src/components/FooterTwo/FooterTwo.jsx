import footerData from "@/data/FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
const {
  logo,
  footerBgTwo,
  shapeTwo,
  footerLogo,
  posts,
  widgetText,
  widgetInfo,
  widgetSocial,
  footerAbout,
  services,
  quickLinks,
  phone,
  email,
  address,
  bottomLinks,
} = footerData;

const FooterTwo = ({ pageTitle }) => {
  return (
    <footer className="main-footer-two " style={{ backgroundColor: "#ecf2fc" }}>
      {/* <div
        className="main-footer-two__bg "
        // style={{ backgroundImage: `url(/home-images/footer-bg.jpg)` }}
       
      ></div> */}

      {/* <div
        className="main-footer-two__shape"
        style={{ backgroundImage: `url(${shapeTwo.src})` }}
      ></div> */}
      <Container>
        <Row>
          <Col md={6} lg={5}>
            <div className="footer-widget footer-widget--about-two">
              <a href="/" className="footer-widget__logo">
                <Image
                  src={"/logo/Preksha Logo.png"}
                  alt="Preksha"
                  width={220}
                  height={55}
                  style={{ height: "auto" }}
                />
              </a>
              <p className="footer-widget--about-two__text">{widgetText}</p>
              {/* <div className="footer-widget__social">
                {widgetSocial.map(({ id, href, icon, title }) => (
                  <Link href={href} key={id}>
                  <FontAwesomeIcon icon={icon} />
                  <span className="sr-only">{title}</span>
                  </Link>
                  ))}
              </div> */}
              <div>
                <span className="footer-widget--about-two__text">
                  Phone No. : <Link href={phone.href}>{phone.number}</Link>{" "}
                </span>
              </div>
              <div>
                <span className="footer-widget--about-two__text">
                  Email ID : <Link href={email.href}>{email.text}</Link>{" "}
                </span>
              </div>
              <div>
                <span className="footer-widget--about-two__text">
                  Address : <Link href={address.href}>{address.text}</Link>{" "}
                </span>
              </div>
            </div>
          </Col>
          {/* <Col md={6} lg={3}>
            <div className="footer-widget footer-widget--links">
              <h2 className="footer-widget__title">General Services</h2>
              <ul className="list-unstyled footer-widget__links">
                {services.map(({ id, title, href }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col> */}
          <Col md={6} lg={3}>
            <div className="footer-widget footer-widget--links main-footer-two--ml30">
              <h2 className="footer-widget__title">Quick Links</h2>
              <ul className="list-unstyled footer-widget__links">
                {quickLinks.map(({ id, title, href }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="footer-widget footer-widget--posts">
              <h2 className="footer-widget__title">Locate Us</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.574917187375!2d77.5321596!3d12.903616800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fd58e8a3afb%3A0xfab622a27aad30eb!2sPreksha%20Surgi%20and%20Ortho%20care!5e1!3m2!1sen!2sin!4v1757421317863!5m2!1sen!2sin"
                style={{ border: 0, height: "250px", width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="main-footer-two__bottom">
        <Container>
          <Row>
            <Col md={6}>
              <p className="main-footer-two__copyright">
                &copy; Copyright <span className="dynamic-year">2025</span>.{" "}
                Designed and Developed by{" "}
                <Link href="https://appaddindia.net/" target="_blank">
                  Appadd India Pvt Ltd...
                </Link>
              </p>
            </Col>
            <Col md={6}>
              <ul className="list-unstyled main-footer-two__bottom__list">
                {bottomLinks.map(({ id, title, href }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterTwo;
