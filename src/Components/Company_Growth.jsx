import React from "react";
import heart_icon from "../assets/heart_icon.png";
import clock_icon from "../assets/clock_icon.png";
import checked_icon from "../assets/checked_icon.png";
import trophy_icon from "../assets/trophy.png";

const Company_Growth = () => {
  const stats = [
    {
      icon: heart_icon,
      value: "199 +",
      description: "Satisfied Customers",
    },
    {
      icon: clock_icon,
      value: "1591+",
      description: "Days of Operation",
    },
    {
      icon: checked_icon,
      value: "283 +",
      description: "Completed Projects",
    },
    {
      icon: trophy_icon,
      value: "75+",
      description: "Won Awards",
    },
  ];

  return (
    <div className="text-center my-12 ">
      <h3 className="text-red-400 font-semibold">EXPERTS GROWTH</h3>
      <h2 className="text-3xl font-bold mt-2">OUR COMPANY GROWTH</h2>
      <div className="flex flex-wrap justify-center mt-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="m-4 p-6 bg-white shadow-lg rounded-md w-48 text-center cursor-pointer hover:shadow-2xl"
          >
            <div className=" w-7 h-7 ml-14 mb-4 icon_image ">
              <img className="w-full h-full" src={stat.icon} alt="" />
            </div>
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="text-gray-600">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Company_Growth;
