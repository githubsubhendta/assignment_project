import React from "react";

import card1 from "../assets/Card1.jpg";
import card2 from "../assets/Card2.jpg";
import card3 from "../assets/Card3.jpg";
import card4 from "../assets/Card4.jpg";
import card6 from "../assets/Card6.jpg";
import card7 from "../assets/Card7.jpg";

import webIcon from "../assets/web.png";
import rightArrow from "../assets/right-arrow.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Services = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="flex flex-col justify-between md:flex-row min-h-full mt-9">
        <div className="w-full md:w-1/2 h-auto md:h-full mt-7 p-6 md:p-12">
          <h3 className="text-red-400 font-bold text-left">WHAT WE DO</h3>
          <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start">
            <div className="mt-4 md:mr-4 md:mt-4 md:w-1/2 md:max-w-md">
              <h2 className="text-2xl font-bold text-left">
                SERVICES PROVIDED <br /> FOR YOU
              </h2>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 md:max-w-md">
              <p className="text-center md:text-left">
                Morbi iaculis lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque vitae ante at elit fringilla ele at pulvina. Morbi
                iaculis lacus nec risus finibus feugiat et fermentum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={"desktop"}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="w-72 h-[370px] px-2  py-3 mb-5 card ">
            <img className="w-[100%] h-[100%] rounded" src={card1} alt="" />
            <div className="card-body">
              <div className="flex justify-center pt-16 ">
                <img
                  className="w-10 h-10 object-contain whiteImage"
                  src={webIcon}
                  alt="webIcon"
                />
              </div>
              <h1 className="text-center text-white pt-5">WEB DEVELOPMENT</h1>
              <p className="text-center text-white text-sm pt-4 px-3">
                {" "}
                Morbi iaculis lacus nec risus finibus feugiat et fermentum nibh.
              </p>
              <div className="flex justify-center mt-7  ">
                <div className=" flex justify-between items-center bg-white px-3 py-3 w-36">
                  <button className="text-sm bg-white w-auto ">
                    READ MORE
                  </button>
                  <img className="w-6 h-4 " src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-[370px] px-2  py-3 mb-5 card">
            <img className="w-[100%] h-[100%] rounded" src={card2} alt="" />
            <div className="card-body">
              <div className="flex justify-center pt-16 ">
                <img
                  className="w-10 h-10 object-contain whiteImage"
                  src={webIcon}
                  alt="webIcon"
                />
              </div>
              <h1 className="text-center text-white pt-5">WEB DEVELOPMENT</h1>
              <p className="text-center text-white text-sm pt-4 px-3">
                {" "}
                Morbi iaculis lacus nec risus finibus feugiat et fermentum nibh.
              </p>
              <div className="flex justify-center mt-7  ">
                <div className=" flex justify-between items-center bg-white px-3 py-3 w-36">
                  <button className="text-sm bg-white w-auto ">
                    READ MORE
                  </button>
                  <img className="w-6 h-4 " src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-[370px] px-2  py-3 mb-5 card">
            <img className="w-[100%] h-[100%] rounded" src={card3} alt="" />
            <div className="card-body">
              <div className="flex justify-center pt-16 ">
                <img
                  className="w-10 h-10 object-contain whiteImage"
                  src={webIcon}
                  alt="webIcon"
                />
              </div>
              <h1 className="text-center text-white pt-5">WEB DEVELOPMENT</h1>
              <p className="text-center text-white text-sm pt-4 px-3">
                {" "}
                Morbi iaculis lacus nec risus finibus feugiat et fermentum nibh.
              </p>
              <div className="flex justify-center mt-7  ">
                <div className=" flex justify-between items-center bg-white px-3 py-3 w-36">
                  <button className="text-sm bg-white w-auto ">
                    READ MORE
                  </button>
                  <img className="w-6 h-4 " src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-[370px] px-2 py-3 mb-5 card">
            <img className="w-[100%] h-[100%] rounded" src={card4} alt="" />
            <div className="card-body">
              <div className="flex justify-center pt-16 ">
                <img
                  className="w-10 h-10 object-contain whiteImage"
                  src={webIcon}
                  alt="webIcon"
                />
              </div>
              <h1 className="text-center text-white pt-5">WEB DEVELOPMENT</h1>
              <p className="text-center text-white text-sm pt-4 px-3">
                {" "}
                Morbi iaculis lacus nec risus finibus feugiat et fermentum nibh.
              </p>
              <div className="flex justify-center mt-7  ">
                <div className=" flex justify-between items-center bg-white px-3 py-3 w-36">
                  <button className="text-sm bg-white w-auto ">
                    READ MORE
                  </button>
                  <img className="w-6 h-4 " src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-[370px] px-2 py-3 mb-5 card">
            <img className="w-[100%] h-[100%] rounded" src={card6} alt="" />
            <div className="card-body">
              <div className="flex justify-center pt-16 ">
                <img
                  className="w-10 h-10 object-contain whiteImage"
                  src={webIcon}
                  alt="webIcon"
                />
              </div>
              <h1 className="text-center text-white pt-5">WEB DEVELOPMENT</h1>
              <p className="text-center text-white text-sm pt-4 px-3">
                {" "}
                Morbi iaculis lacus nec risus finibus feugiat et fermentum nibh.
              </p>
              <div className="flex justify-center mt-7  ">
                <div className=" flex justify-between items-center bg-white px-3 py-3 w-36">
                  <button className="text-sm bg-white w-auto ">
                    READ MORE
                  </button>
                  <img className="w-6 h-4 " src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-[370px] px-2 py-3 mb-5 card">
            <img className="w-[100%] h-[100%] rounded" src={card7} alt="" />
            <div className="card-body">
              <div className="flex justify-center pt-16 ">
                <img
                  className="w-10 h-10 object-contain whiteImage"
                  src={webIcon}
                  alt="webIcon"
                />
              </div>
              <h1 className="text-center text-white pt-5">WEB DEVELOPMENT</h1>
              <p className="text-center text-white text-sm pt-4 px-3">
                {" "}
                Morbi iaculis lacus nec risus finibus feugiat et fermentum nibh.
              </p>
              <div className="flex justify-center mt-7  ">
                <div className=" flex justify-between items-center bg-white px-3 py-3 w-36">
                  <button className="text-sm bg-white w-auto ">
                    READ MORE
                  </button>
                  <img className="w-6 h-4 " src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;
