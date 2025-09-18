import logo from "@/assets/images/logo-light.png";
import footerLogo from "@/assets/images/footer-logo.png";
import logo4 from "@/assets/images/logo-4.png";
import logo6 from "@/assets/images/logo-6.png";
import footerBg from "@/assets/images/backgrounds/footer-bg-1-1.jpg";
import footerBgTwo from "@/assets/images/backgrounds/footer-bg-2-1.jpg";
import footerBgThree from "@/assets/images/backgrounds/footer-bg-3-1.jpg";
import footerBgFour from "@/assets/images/backgrounds/footer-bg-4-1.jpg";
import shape from "@/assets/images/shapes/footer-shape-1.png";
import shapeTwo from "@/assets/images/shapes/footer-2-shape.png";
import footerAbout from "@/assets/images/resources/footer-about.jpg";
import post1 from "@/assets/images/blog/lp-1-1.jpg";
import post2 from "@/assets/images/blog/lp-1-2.jpg";
import post6 from "@/assets/images/blog/lp-1-6.jpg";
import post7 from "@/assets/images/blog/lp-1-7.jpg";

import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const widgetSocial = [
  { id: 1, icon: faFacebookF, href: "https://facebook.com", title: "Facebook" },
  {
    id: 2,
    icon: faPinterestP,
    href: "https://pinterest.com",
    title: "Pinterest",
  },
  { id: 3, icon: faTwitter, href: "https://twitter.com", title: "Twitter" },
  {
    id: 4,
    icon: faInstagram,
    href: "https://instagram.com",
    title: "Instagram",
  },
];

const posts = {
  title: "Recent Posts",
  posts: [
    {
      id: 1,
      image: post1,
      meta: "23 jun 2023",
      title: "We round solution york Blog",
      href: "blog-details",
      icon: "icofont-calendar",
    },
    {
      id: 2,
      image: post2,
      meta: "23 jun 2023",
      title: "We Should be Descriptive",
      href: "blog-details",
      icon: "icofont-calendar",
    },
  ],
};
const postsSix = {
  title: "Recent Posts",
  posts: [
    {
      id: 1,
      image: post6,
      meta: "20 Nov 2023",
      title: "This Specific Issue Network Security",
      href: "blog-details",
      icon: "icofont-calendar",
    },
    {
      id: 2,
      image: post7,
      meta: "23 jun 2023",
      title: "Looking For a Solution Related",
      href: "blog-details",
      icon: "icofont-calendar",
    },
  ],
};

const footerData = {
  footerLogo,
  logo,
  logo4,
  logo6,
  footerBg,
  footerBgTwo,
  footerBgThree,
  footerBgFour,
  shape,
  shapeTwo,
  footerAbout,
  posts,
  postsSix,
  aboutTwoText:
    "Will give you a complete account the system, and expound the teachings of the great explorer the truth, the master-builder because ...",
  widgetText:
    "Preksha Surgi & Ortho Care delivers advanced, reliable, patient-focused surgical and orthopaedic treatments with expertise, modern technology, and compassionate care.",
  widgetInfo: {
    time: "Open Hours of Government:\n Mon - Fri: 8.00 am. - 6.00 pm.",
    timeIcon: "icofont-clock-time",
    location: "13/A, Miranda Halim City .",
    locationIcon: "icofont-location-pin",
    tel: "099 695 695 35",
    telIcon: "icofont-phone",
    subHref: "tel",
  },
  widgetSocial,
  services: [
    {
      id: 1,
      href: "/general-surgery/endoscopy-colonoscopy",
      title: "Endoscopy / Colonoscopy",
    },
    {
      id: 2,
      href: "/general-surgery/laparoscopic-surgeries",
      title: "Laparoscopic Surgeries",
    },
    {
      id: 3,
      href: "/general-surgery/gall-bladder-surgery",
      title: "Gall Bladder Surgery",
    },
    { id: 4, href: "/general-surgery/hernia", title: "Hernia" },
    { id: 5, href: "/general-surgery/appendix", title: "Appendix" },
    {
      id: 6,
      href: "/general-surgery/gastrointestinal-surgery",
      title: "Gastrointestinal Surgery",
    },
    { id: 7, href: "/general-surgery/breast-lumps", title: "Breast Lumps" },
    // {
    //   id: 8,
    //   href: "#",
    //   title: "Piles / Fistula in Ano / Fissures",
    // },
    // {
    //   id: 9,
    //   href: "#",
    //   title: "Lipoma / Sebaceous Cyst / Abscess",
    // },
    // { id: 10, href: "#", title: "Diabetic Foot Ulcer" },
  ],
  quickLinks: [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/about", title: "About" },
    { id: 3, href: "/our-doctors", title: "Doctors" },
    { id: 4, href: "/our-services", title: "Our Services" },
    { id: 4, href: "/our-gallery", title: "Gallery" },
    { id: 4, href: "#", title: "Blogs" },
    { id: 5, href: "/contact", title: "Contact" },
    // { id: 5, href: "/blog-grid-right", title: "News" },
  ],
  bottomLinks: [
    { id: 1, href: "/about", title: "About Us" },
    { id: 2, href: "/orthopaedics", title: "Orthopaedics" },
    { id: 3, href: "#", title: "Blogs" },
    // { id: 4, href: "/portfolio", title: "Portfolio" },
  ],
  email: {
    text: "ps.surgiandorthocare@gmail.com",
    href: "mailto:ps.surgiandorthocare@gmail.com",
  },
  phone: { number: "9108636085", href: "tel:+919108636085" },
  address: {
    text: "412, 1st Main Rd, Happy Valley Layout, Subramanyapura, Bengaluru, Karnataka 560061",
    href: "https://maps.app.goo.gl/JxoptRS8ZGbAENk46",
  },
};

export default footerData;
