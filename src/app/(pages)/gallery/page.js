import FooterThree from "@/components/FooterThree/FooterThree";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import HeaderInner from "@/components/HeaderInner/HeaderInner";
import HeaderInnerCloned from "@/components/HeaderInner/HeaderInnerCloned";
import Layout from "@/components/Layout/Layout";
import MailTwo from "@/components/MailTwo/MailTwo";
import PageHeader from "@/components/PageHeader/PageHeader";

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
    <Layout>
      <HeaderInner />
      <HeaderInnerCloned />
      {/* <PageHeader title="Gallery" subTitle="Gallery" /> */}
      <GalleryOne />
      <MailTwo />
      <FooterThree />
    </Layout>
  );
};

export default page;
