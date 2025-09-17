import ContactTwo from "@/components/ContactTwo/ContactTwo";
import FooterThree from "@/components/FooterThree/FooterThree";
import FooterTwo from "@/components/FooterTwo/FooterTwo";
import Header from "@/components/Header/Header";
import HeaderCloned from "@/components/Header/HeaderCloned";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
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
      <PageHeader title="Contact Page" subTitle="Contact" />
      <ContactTwo contact="page" />
      <FooterTwo />
    </Layout>
  );
};

export default page;
