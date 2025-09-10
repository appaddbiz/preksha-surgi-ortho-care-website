import Layout from "@/components/Layout/Layout";
import MainSliderOne from "@/components/MainSliderOne/MainSliderOne";
import FeatureOne from "@/components/FeatureOne/FeatureOne";
import CtaOne from "@/components/CtaOne/CtaOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import AboutOne from "@/components/AboutOne/AboutOne";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import TeamOne from "@/components/TeamOne/TeamOne";
import OurSolution from "@/components/OurSolution/OurSolution";
import FeatureTwo from "@/components/FeatureTwo/FeatureTwo";
import PojectOne from "@/components/ProjectOne/ProjectOne";
import ClientCarousel from "@/components/ClientCarousel/ClientCarousel";
import SlideText from "@/components/SlideText/SlideText";
import ContactOne from "@/components/ContactOne/ContactOne";
import BlogOne from "@/components/BlogOne/BlogOne";
import Mail from "@/components/Mail/Mail";
import TopBar from "@/components/TopBar/TopBar";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeaderCloned from "@/components/Header/HeaderCloned";
import FunFactTwo from "@/components/FunFactTwo/FunFactTwo";
import AboutThree from "@/components/AboutThree/AboutThree";
import ServiceThree from "@/components/ServiceThree/ServiceThree";
import FaqOne from "@/components/FaqOne/FaqOne";
import TabOne from "@/components/TabOne/TabOne";
import CtaTen from "@/components/CtaTen/CtaTen";
import FooterFive from "@/components/FooterFive/FooterFive";
import FooterSix from "@/components/FooterSix/FooterSix";
import FooterTwo from "@/components/FooterTwo/FooterTwo";
import Banner from "@/components/Banner/Banner";
import { icon } from "@fortawesome/fontawesome-svg-core";

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
      {/* <FeatureOne /> */}
      <FunFactTwo />
      {/* <CtaOne /> */}
      <ServiceOne />
      <AboutOne />
      <ServiceThree />
      {/* <FunFactOne /> */}
      {/* <SlideText /> */}
      <CtaTen />
      <TabOne />
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
