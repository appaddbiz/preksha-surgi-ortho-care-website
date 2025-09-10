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
      image: "/home-images/doctor.jpg", // replace with doctor's photo if available
      title: "Dr. Shashank Joshi",
      text: "Dr. Shashank Joshi is an Orthopaedic and Joint Replacement Surgeon committed to restoring mobility and improving quality of life. With extensive expertise in managing fractures, trauma care, arthritis, joint replacements, and advanced arthroscopy, he provides comprehensive treatment for patients of all age groups. His compassionate approach ensures both surgical precision and patient comfort.",
      listItems: [
        "Fracture & Trauma Surgery",
        "Joint Replacement (Hip & Knee)",
        "Arthroscopy & Sports Injury Management",
        "Spine & Back Pain Care",
      ],
      authors: [author1], // can use profile icon/image
    },
    {
      id: 2,
      image: "/home-images/female-doctor.jpg", // replace with doctor's photo if available
      title: "Dr. Prerana R T",
      text: "Dr. Prerana R T is a skilled General and Laparoscopic Surgeon specializing in minimally invasive and advanced surgical techniques. She is experienced in treating conditions involving the gall bladder, appendix, gastrointestinal system, breast, and abdominal wall. With a focus on faster recovery and minimal scarring, she delivers surgical care with precision, safety, and compassion for her patients.",
      listItems: [
        "Laparoscopic Surgeries",
        "Gall Bladder & Appendix Surgery",
        "Gastrointestinal Procedures",
        "Breast & Abdominal Surgeries",
      ],
      authors: [author2], // can use profile icon/image
    },
  ],
};
