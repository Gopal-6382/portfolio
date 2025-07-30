import pdfs from "../Json/pdfs.js";

const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description: "Certified by XYZ Academy in 2024.",
    pdf: pdfs.pdf1   // ✅ renamed from image to pdf
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    description: "Coursera – Prof. Andrew Ng (2023)",
    pdf: pdfs.pdf2   // ✅
  },
  // Add more...
];

export default certificates;
