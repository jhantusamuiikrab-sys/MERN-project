import React, { useState } from "react";

const services = [
  {
    title: "Custom software development",
    heading: "Custom software development",
    description:
      "We build tailored software solutions from scratch to meet your unique business requirements and goals.",
    image:
      "https://www.globaledge-software.com/wp-content/uploads/2023/04/The-Benefits-of-Custom-Software-Development-for-Your-Business.png",
    link: "https://www.510earth.com/", // ✅ Added link
  },
  {
    title: "Mobile application development",
    heading: "Mobile application development",
    description:
      "Creating high-performance mobile apps for iOS and Android, focusing on user experience and stability.",
    image:
      "https://www.logisticinfotech.com/wp-content/uploads/2015/06/successful_mobileapp.png",
    link: "https://www.510earth.com/", // ✅ Added link
  },
  {
    title: "Dedicated teams",
    heading: "Dedicated Team",
    description:
      "We provide tailored teams of IT specialists for increased development capacity and faster project delivery.",
    image: "https://lvivity.com/wp-content/uploads/2018/08/dedicated-team.jpg",
    link: "https://www.510earth.com/", // ✅ Added link
  },
  {
    title: "Artificial intelligence",
    heading: "Artificial Intelligence",
    description:
      "We implement AI and machine learning solutions that streamline workflows at scale, boosting companies’ operational efficiency.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAvb-heYfVAtWVVj32CNWPcrD_SAyc66ypw&s",
    link: "https://www.510earth.com/", // ✅ Added link
  },
  {
    title: "Ecommerce development",
    heading: "E-commerce Development",
    description:
    "We deliver customer-facing digital storefronts and back-office solutions that facilitate online retail operations.",
    image:
      "https://www.softwebsolutions.com/wp-content/uploads/2023/04/full-stack-accelerates-your-e-commerce-development.jpg",
    link: "https://www.510earth.com/", // ✅ Added link
  },
  {
    title: "UI/UX design",
    heading: "UI/UX Design",
    description:
      "Designing intuitive and engaging interfaces that enhance user satisfaction and drive conversions.",
    image: "https://www.aufaitux.com/wp-content/uploads/2020/05/UIUX-designing-1.jpg",
    link: "https://www.510earth.com/", // ✅ Added link
  },
  {
    title: "Quality assurance",
    heading: "Quality Assurance",
    description:
      "Comprehensive testing services to ensure your software is bug-free, reliable, and performs under load.",
    image: "https://qameta.io/assets/IMAGE1.25482102.png",
    link: "https://www.510earth.com/", // ✅ Added link
  },
  {
    title: "Data & analytics",
    heading: "Data & Analytics",
    description:
      "Turning raw data into actionable insights with data warehousing, business intelligence, and visualization.",
    image:
      "https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg",
    link: "https://www.510earth.com/", // ✅ Added link
  },
  {
    title: "Cloud & devops",
    heading: "Cloud & devops",
    description:
      "Accelerating software delivery through robust DevOps practices and cloud infrastructure management.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Mastering_The_Future_With_A_Master_Degree_In_Cloud_Computing.jpg",
    link: "https://www.510earth.com/", // ✅ Added link
  },
];

const WebDevMenuSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-[90%] max-w-7xl overflow-hidden rounded-2xl shadow-lg">
        {/* The large screen (md and up) layout using flex (side-by-side collapsing) */}
        <div className="hidden md:flex">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              // Use responsive utility: 'md:flex-[3]' and 'md:flex-[0.5]'
              className={`transition-all duration-500 ease-in-out cursor-pointer relative 
              ${activeIndex === index ? "flex-[3]" : "flex-[0.5]"} 
              bg-white overflow-hidden border-r border-gray-200`}
            >
              {activeIndex === index ? (
                <div className="flex h-[400px]">
                  <div className="w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="w-1/2 bg-[#1b2e4e] flex flex-col justify-center p-6"
                    style={{ color: "#cfa866" }}
                  >
                    <h3 className="text-2xl font-bold mb-3">{service.heading}</h3>
                    <p className="text-sm mb-4">{service.description}</p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 px-4 py-2 bg-white rounded-full w-fit hover:bg-blue-100 transition"
                      style={{ color: "#1b2e4e" }}
                    >
                      View service →
                    </a>
                  </div>
                </div>
              ) : (
                // Rotated title for collapsed view on larger screens
                <div
                  className="flex items-center justify-center h-[400px] rotate-[-90deg] text-lg font-semibold whitespace-nowrap"
                  style={{ color: "#1b2e4e" }}
                >
                  {service.title}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* The small screen (default, up to md) layout using accordion (stacked) */}
        <div className="md:hidden flex flex-col">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)} // Use null to allow closing
              className="bg-white border-b border-gray-200"
            >
              {/* Accordion Header */}
              <div
                className="flex justify-between items-center p-4 cursor-pointer text-lg font-semibold"
                style={{ color: "#1b2e4e" }}
              >
                {service.title}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              {/* Accordion Content (only visible if active) */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col sm:flex-row"> {/* Stack on small phones, side-by-side on sm screens */}
                  {/* Image takes full width on small phones, half on sm screens */}
                  <div className="w-full sm:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full object-cover max-h-[200px] sm:max-h-full"
                    />
                  </div>
                  {/* Text content */}
                  <div
                    className="w-full sm:w-1/2 bg-[#1b2e4e] flex flex-col justify-center p-4"
                    style={{ color: "#cfa866" }}
                  >
                    <h3 className="text-xl font-bold mb-2">{service.heading}</h3>
                    <p className="text-sm mb-3">{service.description}</p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 px-4 py-2 bg-white rounded-full w-fit text-sm hover:bg-blue-100 transition"
                      style={{ color: "#1b2e4e" }}
                    >
                      View service →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { WebDevMenuSec };