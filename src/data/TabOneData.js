import tabShape from "@/assets/images/shapes/tab-one-title.png";
import tabImage1 from "@/assets/images/resources/tab-1-1.jpg";
import tabImage2 from "@/assets/images/resources/tab-1-2.jpg";
import tabImage3 from "@/assets/images/resources/tab-1-3.jpg";
import tabImage4 from "@/assets/images/resources/tab-1-4.jpg";
import author1 from "@/assets/images/resources/cta-1-author-1.jpg";
import author2 from "@/assets/images/resources/cta-1-author-2.jpg";
import author3 from "@/assets/images/resources/cta-1-author-3.jpg";

export const tabOneData = {
  tagLine: "Our Specialists",
  title: "Meet Our Expert Doctors",

  tabItems: [
    {
      id: 1,
      icon: "tolak-icons-two-solutions-three",
      title: "Dr. Shashank Joshi",
      shape: tabShape,
    },
    {
      id: 2,
      icon: "tolak-icons-two-lightbulb-dollar",
      title: "Dr. Prerana R T",
      shape: tabShape,
    },
  ],

  tabContents: [
    {
      id: 1,
      image: "/doctors/dr-shashank.jpg", // replace with doctor's photo if available
      title: "Dr. Shashank Joshi",
      text: "Dr. Shashank Joshi is an experienced orthopaedic surgeon with a special interest in trauma care and joint replacement surgeries. He completed his MBBS from Navodaya Medical College, Raichur, followed by Diploma in Orthopaedics (D.Ortho) from the renowned MRMC, Kalaburgi. He further pursued a Fellowship in Joint Replacement and Arthroplasty, gaining expertise in advanced surgical techniques.",
      listItems: [
        "Fracture & Trauma Surgery",
        "Joint Replacement (Hip & Knee)",
        "Arthroscopy & Sports Injury Management",
        "Spine & Back Pain Care",
      ],
      link: "/our-doctors/dr-shashank-joshi",
      authors: [author1], // can use profile icon/image
    },
    {
      id: 2,
      image: "/doctors/dr-Prerana-r.jpg", // replace with doctor's photo if available
      title: "Dr. Prerana R T",
      link: "/our-doctors/dr-prerana-r-t",
      text: "Dr. Prerana is a skilled surgeon with advanced training in minimally invasive (keyhole) surgery. She completed her medical education at JSS Medical College, Mysore, followed by MS in General Surgery from Punjab, and a Fellowship in Minimal Invasive Surgery(RGUHS recognised) from the prestigious Bangalore Medical College & Research Institute. She is also a certified member of IAGES with specialized training in laparoscopic hernia surgery (FIAGES, FALS – Hernia).",
      listItems: [
        "Laparoscopic Surgeries",
        "Gall Bladder & Appendix Surgery",
        "Gastrointestinal Procedures",
        "Breast & Abdominal Surgeries",
        "Hernia Surgery",
        "Piles & Fistula Treatments",
      ],
      authors: [author2], // can use profile icon/image
    },
  ],
};
