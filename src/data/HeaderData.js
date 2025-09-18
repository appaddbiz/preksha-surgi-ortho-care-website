import main_logo from "@/assets/images/logo-dark.png";
import logo_light from "@/assets/images/logo-light.png";
import logo_rtl from "@/assets/images/logo-dark-rtl.png";
import logo3 from "@/assets/images/logo-3.png";
import logo5 from "@/assets/images/logo-5.png";
import logo6 from "@/assets/images/logo-6.png";
import bg from "@/assets/images/backgrounds/header-bg.jpg";
import flag from "@/assets/images/shapes/flag.png";
import flagTwo from "@/assets/images/shapes/flag.png";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
  faPhoneFlip,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const sidebarOneText =
  "Mauris ut enim sit amet lacus ornare ullamcor. Praesent placerat nequ puru rhoncu tincidunt odio ultrices.Sed feugiat feugiat felis.";

const singleNavItems = [
  { name: "Home", href: "home" },
  { name: "Services", href: "services" },
  { name: "About", href: "about" },
  { name: "Team", href: "team" },
  { name: "Project", href: "project" },
  { name: "Contact", href: "contact" },
  { name: "Blog", href: "blog" },
];
const singleNavItemsTwo = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Services", href: "services" },
  { name: "Project", href: "project" },
  { name: "Testimonials", href: "testimonial" },
  { name: "Pricing", href: "pricing" },
  { name: "Blog", href: "blog" },
];
const singleNavItemsThree = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Testimonial", href: "testimonial" },
  { name: "Project", href: "project" },
  { name: "Team", href: "team" },
  { name: "Contact", href: "contact" },
  { name: "Blog", href: "blog" },
];
const singleNavItemsFour = [
  { name: "Home", href: "home" },
  { name: "Service", href: "service" },
  { name: "Team", href: "team" },
  { name: "Pricing", href: "pricing" },
  { name: "Testimonial", href: "testimonial" },
  { name: "Blog", href: "blog" },
];
const singleNavItemsFive = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Service", href: "service" },
  { name: "Project", href: "project" },
  { name: "Team", href: "team" },
  { name: "Testimonial", href: "testimonial" },
  { name: "Blog", href: "blog" },
];
const singleNavItemsSix = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Service", href: "service" },
  { name: "Team", href: "team" },
  { name: "Tab", href: "tab" },
  { name: "Contact", href: "contact" },
  { name: "Blog", href: "blog" },
];
const singleNavItemsSeven = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Service", href: "service" },
  { name: "Project", href: "project" },
  { name: "Testimonial", href: "testimonial" },
  { name: "Funfact", href: "funfact" },
  { name: "Blog", href: "blog" },
];

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Doctors",
    href: "/our-doctors",
  },
  {
    id: 4,
    name: "Our Services",
    href: "/our-services",
    subNavItems: [
      {
        id: 1,
        name: "General surgery",
        href: "/general-surgery",
        dropdown: true,
        subItems: [
          {
            id: 1,
            name: "Endoscopy / colonoscopy",
            href: "/general-surgery/endoscopy-colonoscopy",
          },
          {
            id: 2,
            name: "Laparoscopic surgeries",
            href: "/general-surgery/laparoscopic-surgeries",
          },
          {
            id: 3,
            name: "Gall bladder surgery",
            href: "/general-surgery/gall-bladder-surgery",
          },
          {
            id: 4,
            name: "Hernia",
            href: "/general-surgery/hernia",
          },
          {
            id: 5,
            name: "Appendix",
            href: "/general-surgery/appendix",
          },
          {
            id: 6,
            name: "Gastrointestinal Surgery",
            href: "/general-surgery/gastrointestinal-surgery",
          },
          {
            id: 7,
            name: "Breast Lumps",
            href: "/general-surgery/breast-lumps",
          },
          {
            id: 8,
            name: "Piles/Fistula in Ano/Fissures",
            href: "/general-surgery/piles-fistula-fissures",
          },
          {
            id: 9,
            name: "Lipoma/Sabeceous cyst/Abscess",
            href: "/general-surgery/lipoma-cyst-abscess",
          },
          {
            id: 10,
            name: "Diabetic foot ulcer",
            href: "/general-surgery/diabetic-foot-ulcer",
          },
        ],
      },
      {
        id: 2,
        name: "Orthopaedics",
        href: "/orthopaedics",
        dropdown: true,
        subItems: [
          {
            id: 1,
            name: "Fracture and Trauma Surgery",
            href: "/orthopaedics/fracture-trauma-surgery",
            dropdown: true,
            subItems: [
              {
                id: 1,
                name: "Shoulder Dislocation Treatment",
                href: "/orthopaedics/shoulder-dislocation-treatment",
              },
              {
                id: 2,
                name: "Elbow Dislocation Treatment",
                href: "/orthopaedics/elbow-dislocation-treatment",
              },
            ],
          },
          {
            id: 2,
            name: "Arthritis / Osteoarthritis / Joint Pains",
            href: "/orthopaedics/arthritis-osteoarthritis-joint-pains",
          },
          {
            id: 3,
            name: "Arthroplasty / Joint Replacement",
            href: "/orthopaedics/arthroplasty-joint-replacement",
            dropdown: true,
            subItems: [
              {
                id: 1,
                name: "Hemi Arthroplasty",
                href: "/orthopaedics/hemi-arthroplasty",
              },
              {
                id: 2,
                name: "Total Hip Replacement",
                href: "/orthopaedics/total-hip-replacement",
              },
              {
                id: 3,
                name: "Total Knee Replacement",
                href: "/orthopaedics/total-knee-replacement",
              },
            ],
          },
          {
            id: 4,
            name: "Arthroscopy",
            href: "/orthopaedics/arthroscopy",
            dropdown: true,
            subItems: [
              {
                id: 1,
                name: "Arthroscopic ACL Reconstruction",
                href: "/orthopaedics/arthroscopic-acl-reconstruction",
              },
              {
                id: 2,
                name: "PCL Reconstruction",
                href: "/orthopaedics/pcl-reconstruction",
              },
              {
                id: 3,
                name: "Arthroscopic Rotator Cuff Surgery",
                href: "/orthopaedics/arthroscopic-rotator-cuff-surgery",
              },
              {
                id: 4,
                name: "Recurrent Shoulder Dislocation Treatment",
                href: "/orthopaedics/recurrent-shoulder-dislocation-treatment",
              },
              {
                id: 5,
                name: "Recurrent Patellar Dislocation Treatment",
                href: "/orthopaedics/recurrent-patellar-dislocation-treatment",
              },
            ],
          },
          {
            id: 5,
            name: "Sports Injuries",
            href: "/orthopaedics/sports-injuries",
            dropdown: true,
            subItems: [
              {
                id: 1,
                name: "Ligament Repair",
                href: "/orthopaedics/ligament-repair",
              },
              {
                id: 2,
                name: "Tendon Repair",
                href: "/orthopaedics/tendon-repair",
              },
            ],
          },
          {
            id: 6,
            name: "Spine Care",
            href: "/orthopaedics/spine-care",
            dropdown: true,
            subItems: [
              {
                id: 1,
                name: "Cervical Spondylosis",
                href: "/orthopaedics/cervical-spondylosis",
              },
              {
                id: 2,
                name: "Lumbar Spondylosis",
                href: "/orthopaedics/lumbar-spondylosis",
              },
              {
                id: 3,
                name: "Lower Back Pain",
                href: "/orthopaedics/lower-back-pain",
              },
            ],
          },
          {
            id: 7,
            name: "Soft Tissue Injury Management",
            href: "/orthopaedics/soft-tissue-injury-management",
          },
        ],
      },
    ],
  },
  // {
  //   id: 5,
  //   name: "Orthopaedics",
  //   href: "/orthopaedics",
  //   dropdown: false,
  //   subNavItems: [
  //     {
  //       id: 1,
  //       name: "Fracture and Trauma Surgery",
  //       href: "/orthopaedics/fracture-trauma-surgery",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "Shoulder Dislocation Treatment",
  //           href: "/orthopaedics/shoulder-dislocation-treatment",
  //         },
  //         {
  //           id: 2,
  //           name: "Elbow Dislocation Treatment",
  //           href: "/orthopaedics/elbow-dislocation-treatment",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: "Arthritis / Osteoarthritis / Joint Pains",
  //       href: "/orthopaedics/arthritis-osteoarthritis-joint-pains",
  //     },
  //     {
  //       id: 3,
  //       name: "Arthroplasty / Joint Replacement",
  //       href: "/orthopaedics/arthroplasty-joint-replacement",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "Hemi Arthroplasty",
  //           href: "/orthopaedics/hemi-arthroplasty",
  //         },
  //         {
  //           id: 2,
  //           name: "Total Hip Replacement",
  //           href: "/orthopaedics/total-hip-replacement",
  //         },
  //         {
  //           id: 3,
  //           name: "Total Knee Replacement",
  //           href: "/orthopaedics/total-knee-replacement",
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       name: "Arthroscopy",
  //       href: "/orthopaedics/arthroscopy",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "Arthroscopic ACL Reconstruction",
  //           href: "/orthopaedics/arthroscopic-acl-reconstruction",
  //         },
  //         {
  //           id: 2,
  //           name: "PCL Reconstruction",
  //           href: "/orthopaedics/pcl-reconstruction",
  //         },
  //         {
  //           id: 3,
  //           name: "Arthroscopic Rotator Cuff Surgery",
  //           href: "/orthopaedics/arthroscopic-rotator-cuff-surgery",
  //         },
  //         {
  //           id: 4,
  //           name: "Recurrent Shoulder Dislocation Treatment",
  //           href: "/orthopaedics/recurrent-shoulder-dislocation-treatment",
  //         },
  //         {
  //           id: 5,
  //           name: "Recurrent Patellar Dislocation Treatment",
  //           href: "/orthopaedics/recurrent-patellar-dislocation-treatment",
  //         },
  //       ],
  //     },
  //     {
  //       id: 5,
  //       name: "Sports Injuries",
  //       href: "/orthopaedics/sports-injuries",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "Ligament Repair",
  //           href: "/orthopaedics/ligament-repair",
  //         },
  //         { id: 2, name: "Tendon Repair", href: "/orthopaedics/tendon-repair" },
  //       ],
  //     },
  //     {
  //       id: 6,
  //       name: "Spine Care",
  //       href: "/orthopaedics/spine-care",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "Cervical Spondylosis",
  //           href: "/orthopaedics/cervical-spondylosis",
  //         },
  //         {
  //           id: 2,
  //           name: "Lumbar Spondylosis",
  //           href: "/orthopaedics/lumbar-spondylosis",
  //         },
  //         {
  //           id: 3,
  //           name: "Lower Back Pain",
  //           href: "/orthopaedics/lower-back-pain",
  //         },
  //       ],
  //     },
  //     {
  //       id: 7,
  //       name: "Soft Tissue Injury Management",
  //       href: "/orthopaedics/soft-tissue-injury-management",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   name: "Services",
  //   href: "#",
  //   subNavItems: [
  //     { id: 1, name: "Services One", href: "/services" },
  //     { id: 2, name: "Services One Carousel", href: "/services-carousel" },
  //     { id: 3, name: "Services Two", href: "/services-two" },
  //     { id: 4, name: "Services Two Carousel", href: "/services-two-carousel" },
  //     { id: 5, name: "Business of Growth", href: "/business-growth" },
  //     { id: 6, name: "Solution to Business", href: "/business-solution" },
  //     { id: 7, name: "Markting of Solution", href: "/marketing-solution" },
  //     { id: 8, name: "Technology Services", href: "/technology-services" },
  //     { id: 9, name: "Marketing Business", href: "/business-marketing" },
  //     { id: 10, name: "Support of Business", href: "/business-support" },
  //   ],
  // },

  // {
  //   id: 4,
  //   name: "Shop",
  //   href: "#",
  //   subNavItems: [
  //     {
  //       id: 1,
  //       name: "Products",
  //       href: "#",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "No Sidebar",
  //           href: "/products",
  //         },
  //         {
  //           id: 2,
  //           name: "Left Sidebar",
  //           href: "/products-left",
  //         },
  //         {
  //           id: 3,
  //           name: "Right Sidebar",
  //           href: "/products-right",
  //         },
  //       ],
  //     },
  //     { id: 2, name: "Products Carousel", href: "/products-carousel" },
  //     { id: 3, name: "Product Details", href: "/product-details" },
  //     { id: 4, name: "Cart", href: "/cart" },
  //     { id: 5, name: "Checkout", href: "/checkout" },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "News",
  //   href: "#",
  //   subNavItems: [
  //     {
  //       id: 1,
  //       name: "News Grid",
  //       href: "#",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "No Sidebar",
  //           href: "/blog-grid",
  //         },
  //         {
  //           id: 2,
  //           name: "Left Sidebar",
  //           href: "/blog-grid-left",
  //         },
  //         {
  //           id: 3,
  //           name: "Right Sidebar",
  //           href: "/blog-grid-right",
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       name: "News List",
  //       href: "#",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "No Sidebar",
  //           href: "/blog-list",
  //         },
  //         {
  //           id: 2,
  //           name: "Left Sidebar",
  //           href: "/blog-list-left",
  //         },
  //         {
  //           id: 3,
  //           name: "Right Sidebar",
  //           href: "/blog-list-right",
  //         },
  //       ],
  //     },
  //     { id: 3, name: "News Carousel", href: "/blog-carousel" },
  //     {
  //       id: 4,
  //       name: "News Details",
  //       href: "#",
  //       dropdown: true,
  //       subItems: [
  //         {
  //           id: 1,
  //           name: "No Sidebar",
  //           href: "/blog-details",
  //         },
  //         {
  //           id: 2,
  //           name: "Left Sidebar",
  //           href: "/blog-details-left",
  //         },
  //         {
  //           id: 3,
  //           name: "Right Sidebar",
  //           href: "/blog-details-right",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: 5,
    name: "Gallery",
    href: "/our-gallery",
  },
  {
    id: 6,
    name: "Blogs",
    href: "#",
  },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
  },
];

const social = [
  { icon: faFacebookF, link: "https://facebook.com" },
  { icon: faPinterestP, link: "https://pinterest.com" },
  { icon: faTwitter, link: "https://twitter.com" },
  { icon: faInstagram, link: "https://instagram.com" },
];
const topbarTwoCarousel = [
  {
    id: 1,
    text: "Best It-Solution Business !",
  },
  {
    id: 2,
    text: "Best It-Solution Business !",
  },
];

const topbarFiveData = {
  infoIcon: "tolak-icons-two-phone-call",
  infoText: "Emergency Call",
  infoTel: "+95 2512 2514 25",
  infoHref: "+952512251425",
  infoSubHref: "tel",
  links: [
    {
      id: 1,
      name: "Login",
      href: "login",
    },
    {
      id: 2,
      name: "Register",
      href: "contact",
    },
  ],
  flag,
  languages: [
    {
      id: 1,
      flag: flag,

      language: "English",
    },
    {
      id: 2,
      flag: flagTwo,

      language: "French",
    },
  ],
};

const headerData = {
  bg,
  topbarTwoCarousel,
  logo_rtl,
  logo3,
  logo5,
  logo6,
  icons: [
    {
      id: 1,
      icon: faEnvelope,
      content: "ps.surgiandorthocare@gmail.com",
      subHref: "mailto:ps.surgiandorthocare@gmail.com",
    },
    {
      id: 2,
      icon: faMapMarkerAlt,
      content:
        "412, 1st Main Rd, Happy Valley Layout, Subramanyapura, Bengaluru, Karnataka 560061",
      href: "https://maps.app.goo.gl/6a88KkC65curQKQ9A",
    },
    {
      id: 3,
      icon: faPhone,
      content: "+91 9108636085",
      href: "tel:+919108636085",
    },
  ],

  sidebarOneIcons: [
    {
      id: 1,
      icon: "fas fa-map-marker-alt",
      content: "27, Dhaka London City Dhaka, Bangladesh",
    },
    {
      id: 2,
      icon: "fas fa-clock",
      content: "Mon - Fri: 8.00 am. - 6.00 pm.",
    },
    {
      id: 3,
      icon: "fas fa-envelope",
      content: "27, Dhaka London City Dhaka, Bangladesh",
      href: "https://www.google.com/maps",
    },
  ],
  links: [
    {
      id: 1,
      name: "Login",
      href: "login",
    },
    {
      id: 2,
      name: "Register",
      href: "contact",
    },
    {
      id: 3,
      name: "Services",
      href: "services",
    },
  ],
  headerFourCall: {
    href: "25844132",
    subHref: "tel",
    icon: "icofont-phone-circle",
    text: "Need Help Now?",
    number: "++(25)844132",
  },
  navItems,
  social,
  main_logo,
  logo_light,
  sidebarOneText,
  singleNavItems,
  singleNavItemsTwo,
  singleNavItemsThree,
  singleNavItemsFour,
  singleNavItemsFive,
  singleNavItemsSix,
  singleNavItemsSeven,
  topbarFiveData,
};

export default headerData;
