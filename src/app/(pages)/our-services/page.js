import Layout from "@/components/Layout/Layout";
import TopBar from "@/components/TopBar/TopBar";
import Header from "@/components/Header/Header";
import HeaderCloned from "@/components/Header/HeaderCloned";
import FooterTwo from "@/components/FooterTwo/FooterTwo";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServiceThree from "@/components/ServiceThree/ServiceThree";
import Service from "@/components/OurService/Service";

export const metadata = {
  title: "Preksha Surgi & Ortho Care",
  description: "Preksha Surgi & Ortho Care.",
  icons: {
    icon: "/banners/Preksha-favicon.png",
  },
};

const page = () => {
  return (
    <Layout pageTitle="Orthopaedics">
      <TopBar />
      <Header />
      <HeaderCloned />
      <PageHeader title="Orthopaedics" subTitle="Orthopaedics" />
      <Service variant="grid" />
      <FooterTwo />
    </Layout>
  );
};
export default page;
