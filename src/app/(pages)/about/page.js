import AboutThree from "@/components/AboutThree/AboutThree";
import CtaOne from "@/components/CtaOne/CtaOne";
import FaqOne from "@/components/FaqOne/FaqOne";
import FooterThree from "@/components/FooterThree/FooterThree";
import FooterTwo from "@/components/FooterTwo/FooterTwo";
import FunFactTwo from "@/components/FunFactTwo/FunFactTwo";
import Header from "@/components/Header/Header";
import HeaderCloned from "@/components/Header/HeaderCloned";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServiceTwo from "@/components/ServiceTwo/ServiceTwo";
import TabOne from "@/components/TabOne/TabOne";
import TeamOne from "@/components/TeamOne/TeamOne";
import TestimonialsTwo from "@/components/TestimonialsTwo/TestimonialsTwo";
import TopBar from "@/components/TopBar/TopBar";
import React from "react";

export const metadata = {
  title: "Preksha Surgi & Ortho Care",
  description: "Preksha Surgi & Ortho Care.",
  icons: {
    icon: "/banners/Preksha-favicon.png",
  },
};

const page = () => {
  return (
    <Layout pageTitle="home">
      <TopBar />
      <Header />
      <HeaderCloned />
      <PageHeader title="About Page" subTitle="About" />
      <AboutThree />
      {/* <FunFactTwo />s */}
      <CtaOne page={true} />
      <TabOne />
      {/* <ServiceTwo page={true} titleTwo="two" /> */}
      {/* <TestimonialsTwo page={true} /> */}
      <FaqOne />
      {/* <TeamOne /> */}
      {/* <MailTwo /> */}
      <FooterTwo />
    </Layout>
  );
};

export default page;
