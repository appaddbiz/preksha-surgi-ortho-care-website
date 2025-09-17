"use client";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { serviceDetailsData } from "@/data/ServiceDetailsData";
import AnimatedProgressBar from "../AnimatedProgressBar/AnimatedProgressBar";
import { usePathname } from "next/navigation";
import TeamOnePage from "../TeamOnePage/TeamOnePage";

const ServiceDetails = () => {
  const pathname = usePathname();

  // match the service object by link
  const data = serviceDetailsData.find((d) => d.link === pathname);

  if (!data) {
    return (
      <section className="service-details">
        <Container>
          <p>Service not found.</p>
        </Container>
      </section>
    );
  }

  const {
    thumbnailImage,
    sidebar,
    content,
    skills,
    lists,
    solutionText,
    contentImage,
    lastText,
  } = data;

  return (
    <section className="service-details">
      <Container>
        <Row className="gutter-y-30">
          <Col md={12} xl={8}>
            {/* Sub Heading */}
            <h2 className="">{data?.subHeading}</h2>

            {/* Thumbnail */}
            <div className="service-details__thumbnail">
              <Image
                src={thumbnailImage}
                alt="Service Detail"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Main Content */}
            <div className="service-details__content">
              {content?.map((section, index) => (
                <div key={index} className="mb-4">
                  {section.title && (
                    <h5
                      className="service-details__section-title"
                      style={{ color: "#3d2b99" }}
                    >
                      {section.title}
                    </h5>
                  )}
                  {section.description && (
                    <p
                      className="service-details__text"
                      style={{ textAlign: "justify" }}
                    >
                      {section.description}
                    </p>
                  )}
                </div>
              ))}

              {/* Skills Section */}
              {skills && skills.length > 0 && (
                <Row className="gutter-y-30 mb-2">
                  {skills.map(({ id, title, text }) => (
                    <Col md={6} key={id}>
                      <h5 style={{ color: "#3d2b99" }}>{title}</h5>
                      <p>{text}</p>
                      {/* <AnimatedProgressBar
                        percentage={percentage}
                        className="service-details__progress"
                      /> */}
                    </Col>
                  ))}
                </Row>
              )}

              {/* Solution Text */}
              {solutionText && (
                <p
                  className="service-details__text"
                  style={{ textAlign: "justify" }}
                >
                  {solutionText}
                </p>
              )}

              {/* Lists (Benefits) */}
              {lists && lists.length > 0 && (
                <Row className="gutter-y-30 mb-4">
                  {lists.map(({ id, items }) => (
                    <Col key={id}>
                      <ul className="list-unstyled service-details__list">
                        {items.map((item, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check-circle"></i>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </Col>
                  ))}
                </Row>
              )}

              {/* Last Text */}
              {lastText && (
                <p
                  className="service-details__text"
                  style={{ textAlign: "justify" }}
                >
                  {lastText}
                </p>
              )}
            </div>
          </Col>

          {/* Sidebar */}
          <Col md={12} xl={4}>
            <div className="service-details__sidebar">
              <h3 className="service-details__sidebar__title">
                {sidebar?.title}
              </h3>
              <ul className="list-unstyled service-details__sidebar__nav">
                {sidebar?.navItems?.map(({ id, name, href }) => (
                  <li
                    className={`${pathname === href ? "current" : ""}`}
                    key={id}
                  >
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Doctor / Team Section */}
            <TeamOnePage />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
