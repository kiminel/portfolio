import React from "react";
import TimeLine from "@/components/TimeLine";

export const EducationExperience = () => {
  return (
    <>
      <main className="w-full flex flex-col item-center justify-center px-4">
        <div id="education">
          <TimeLine title={"Education"} details={educationDetails} />
        </div>
        <div id="experience">
          <TimeLine title={"Experience"} details={experienceDetails} />
        </div>
      </main>
    </>
  );
};

const experienceDetails = [
  {
    title: "Software Engineer",
    place: "WORTH Internet Systems",
    placeLink: "https://worth.systems/",
    time: "Dec 2021 - May 2023",
    location: "United Kingdom",
    description:
      "Worked on a variety of projects, ranging in different technologies and teams. After 4 months, I was placed on one of the company's Funding Service clients projects. I worked with numerous team members, including Product Owners, Business Analysts, Quality Assurance testers, Site Reliability Engineers, Delivery- and Tech Leads, as well as UI/UX designers and Content Writers.",
  },
  {
    title: "Junior Web Developer",
    place: "Newsclip Media Monitoring",
    placeLink: "https://www.newsclip.co.za/",
    time: "Feb 2021 - Nov 2021",
    location: "South Africa",
    description:
      "Worked with a team member to refactor, maintain and build the company CRM system. Later, I was paired with another team member to design and build a product-training system, to teach users how to use the main product. We worked closely with the Sales- and Support- Departments; as well as provided regular feedback demos to the CEO and CTO.",
  },
];

const educationDetails = [
  {
    title: "Bachelor of Science in Information Technology",
    place: "Pearson Institute of Higher Education",
    placeLink: "https://www.pearson.com/en-us.html",
    time: "obtained in 2020",
    location: "Cape Town",
  },
  {
    title: "Higher Certificate in Information Systems Engineering",
    place: "CTI Education Group",
    placeLink: "https://www.facebook.com/ctieducationgroup/",
    time: "obtained in 2017",
    location: "Cape Town",
  },
];

export default EducationExperience;
