import bg from "@/assets/images/shapes/contact-2-shape-1.png";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const contactTwoData = {
  infoIcon: "icon-customer-service",
  infoText:
    "Get in touch with Preksha Surgi & Ortho Care for expert orthopaedic and general surgery services. Our team is here to provide care, guidance, and support for your health needs.",
  infoTitle: "Contact Information",

  bg,
  infoBoxs: [
    {
      id: 1,
      icon: "icon-phone-call",
      title: "Call Us Now",
      text: "+91 9108636085",
      href: "https://wa.link/ymgeaz",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-open-mail",
      title: "Email Us",
      text: "ps.surgiandorthocare@gmail.com",
      href: "mailto:ps.surgiandorthocare@gmail.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "icon-pin",
      title: "Our Location",
      text: "412, 1st Main Rd, Happy Valley Layout, Subramanyapura, Bengaluru, Karnataka 560061",
      href: "https://maps.app.goo.gl/Ws9SmbsnNCurmrxz5",
      subHref: "https://maps.app.goo.gl/Ws9SmbsnNCurmrxz5",
    },
  ],
  socials: [
    {
      id: 1,
      icon: faFacebookF,
      link: "https://facebook.com/prekshasurgi",
      name: "Facebook",
    },
    {
      id: 2,
      icon: faPinterestP,
      link: "https://pinterest.com/prekshasurgi",
      name: "Pinterest",
    },
    {
      id: 3,
      icon: faTwitter,
      link: "https://twitter.com/prekshasurgi",
      name: "Twitter",
    },
    {
      id: 4,
      icon: faInstagram,
      link: "https://instagram.com/prekshasurgi",
      name: "Instagram",
    },
  ],

  tagLine: "Contact Us",
  title: "Get in Touch with Preksha Surgi & Ortho Care",
  text: "Reach out to our team for expert consultation, appointments, or general inquiries. We are committed to providing compassionate and professional healthcare services.",
};

export default contactTwoData;
