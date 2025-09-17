import Layout from "@/components/Layout/Layout";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import TopBar from "@/components/TopBar/TopBar";
import Header from "@/components/Header/Header";
import HeaderCloned from "@/components/Header/HeaderCloned";
import FooterTwo from "@/components/FooterTwo/FooterTwo";
import PageHeader from "@/components/PageHeader/PageHeader";

export const metadata = {
  title: "Preksha Surgi & Ortho Care",
  description: "Preksha Surgi & Ortho Care.",
  icons: {
    icon: "/banners/Preksha-favicon.png",
  },
};

const page = () => {
  return (
    <Layout pageTitle="General Surgery">
      <TopBar />
      <Header />
      <HeaderCloned />
      <PageHeader title="General Surgery" subTitle="General Surgery" />
      <ServiceOne />
      <FooterTwo />
    </Layout>
  );
};
export default page;
