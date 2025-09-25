import Layout from "@/components/Layout/Layout";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import AboutOne from "@/components/AboutOne/AboutOne";
import TopBar from "@/components/TopBar/TopBar";
import Header from "@/components/Header/Header";
import HeaderCloned from "@/components/Header/HeaderCloned";
import AboutThree from "@/components/AboutThree/AboutThree";
import FaqOne from "@/components/FaqOne/FaqOne";
import CtaTen from "@/components/CtaTen/CtaTen";
// import FooterFive from "@/components/FooterFive/FooterFive";
// import FooterSix from "@/components/FooterSix/FooterSix";
import FooterTwo from "@/components/FooterTwo/FooterTwo";
import Banner from "@/components/Banner/Banner";
import Doctor from "@/components/DoctorProfile/Doctor";
// import { icon } from "@fortawesome/fontawesome-svg-core";

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
      {/* <MainSliderOne /> */}
      <Banner />
      <AboutThree />
      <CtaTen />
      {/* <FeatureOne /> */}
      {/* <FunFactTwo /> */}
      {/* <CtaOne /> */}
      <ServiceOne limit={6} />
      {/* <ServiceThree variant="carousel" /> */}
      <AboutOne />
      {/* <FunFactOne /> */}
      {/* <SlideText /> */}
      <Doctor />
      <FaqOne />
      {/* <CtaTwo /> */}
      {/* <TeamOne /> */}
      {/* <OurSolution /> */}
      {/* <FeatureTwo /> */}
      {/* <PojectOne /> */}
      {/* <ClientCarousel /> */}
      {/* <ContactOne /> */}
      {/* <BlogOne /> */}
      {/* <Mail /> */}
      {/* <Footer /> */}
      <FooterTwo />
    </Layout>
  );
};
export default page;
