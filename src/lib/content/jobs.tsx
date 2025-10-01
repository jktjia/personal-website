import { WorkType } from "../types";

export const jobs: WorkType[] = [
  {
    employer: "UMass Medical School",
    position: "Quantitative Methods Core (QMC) Intern",
    timespan: "June-August 2023",
    content: [
      "Processed, cleaned, and analyzed 10 years of nationwide Medicare administrative claims, drug data, and associated clinical assessments",
      "Taught graduate students and faculty data visualization techniques and approaches using SAS",
      "Created and presented graphs and charts summarizing missingness, variable availability, and frequencies of Medicare drug and Minimum  Data Set (MDS) healthcare data",
      "Reported in weekly team meetings to update PI, QMC Computer Software Engineer, and research group on progress",
    ],
  },
  {
    employer: "Verizon Communications x NExT",
    position: "Software Engineer Co-op",
    timespan: "January-July 2025",
    content: [
      "Designed and deployed AWS infrastructure to develop a highly scalable and reliable full-stack application which used an automated pipeline to collect and process data regarding customer churn in the telecommunications industry",
      "Aggregated and analyzed nearly 200,000 data points related to network performance and customer sentiment to generate and present actionable insights on customer retention for both technical and non-technical users through interactive and customizable visualizations",
      "Collaboratively created presentations for and communicated with Verizon leadership in bi-weekly touchpoints and formal project meetings to ensure client needs were met and facilitate app hand-off after project completion",
    ],
  },
  {
    employer: "Northeastern University",
    position: "Algorithms TA",
    timespan: "September 2023-December 2024, September 2025-Present",
    content: [
      "Wrote solutions for homework, coordinated TA grading responsibilities, and graded assignments and exams",
      "Led multiple weekly recitations and provided individualized support in weekly office hours to help undergraduate and graduate students understand class material",
      "Collaborated to refine homework and recitation problems in weekly instructor meetings",
    ],
    hideCatContent: true,
  },
];
