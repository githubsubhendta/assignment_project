import React, { useState } from "react";
import image1 from "../assets/project_Img1.jpg";
import image2 from "../assets/project_Img2.jpg";
import image3 from "../assets/Card3.jpg";

const OurProjects = () => {
  const [selected, setSelected] = useState(0);
  const projects = [
    {
      heading: "Genderless Kei-Japan's HOt",
      desc: `Set launch on the manufacture's new A330neo aircraft in 2017 ,
            it's offring lot's of`,
      img_url: image1,
    },
    {
      heading: "Better Strategy and Quality",
      desc: `Set launch on the manufacture's new A330neo aircraft in 2017 ,
              it's offring lot's of`,
      img_url: image2,
    },
    {
      heading: "Genderless Kei-Japan's HOt",
      desc: `Set launch on the manufacture's new A330neo aircraft in 2017 ,
              it's offring lot's of`,
      img_url: image3,
    },
  ];
  return (
    <>
      <div className="mt-10">
        <h2 className="text-center text-2xl text-red-400 font-bold">
          OUR PROJECTS
        </h2>

        <h1 className="text-center text-4xl mt-8 font-medium">
          WHY WE ARE BEST
        </h1>
        <div className="flex flex-col justify-between items-center md:flex-row min-h-full mt-9">
          <div className="w-full h-auto md:w-1/2 md:h-[600px] mt-7 p-6 md:p-12">
            <img
              className="w-full h-full object-cover"
              src={projects[selected].img_url}
              alt="card"
            />
          </div>
          <div className="w-full md:w-1/4 h-auto md:h-full  md:mt-6 ml-0 md:ml-6 bg-slate-100 md:mr-48">
            {projects.map((item, index) => (
              <div
                key={index}
                className={`${
                  selected === index ? "bg-red-500 text-white" : ""
                } p-4 md:px-12 md:py-7 cursor-pointer`}
                onClick={() => setSelected(index)}
              >
                <h5 className="font-medium">{item.heading}</h5>
                <p className="mt-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjects;
