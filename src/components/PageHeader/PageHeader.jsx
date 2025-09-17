"use client";

import Image from "next/image";
import React from "react";
import bannerLayer from "@/assets/images/backgrounds/page-banner-layer.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceDetailsData } from "@/data/ServiceDetailsData";

const PageHeader = ({ title, subTitle }) => {
  const pathname = usePathname();

  // match the service object by link
  const data = serviceDetailsData.find((d) => d.link === pathname);

  return (
    <section className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="page-header__content">
              <ul className="tolak-breadcrumb list-unstyled">
                <li>
                  <Link style={{ color: "white" }} href="/">
                    Home
                  </Link>
                </li>
                {data.headingTitle && (
                  <li>
                    <Link
                      style={{ color: "white" }}
                      href={`/${data.headingTitle
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {data.headingTitle}
                    </Link>
                  </li>
                )}
                {data.subHeadingTitle && (
                  <li>
                    <span style={{ color: "white" }}>
                      {data.subHeadingTitle}
                    </span>
                  </li>
                )}
              </ul> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
