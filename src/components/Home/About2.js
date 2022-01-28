import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import/Define Constants
const data = [
  "images/p2_01.jpg",
  "images/s331.jpg",
  "images/team1.jpg",
  "images/team22.jpg",
  "images/team12.jpg",
  "images/team1.jpg",
];
const writeup = <p className="mt-4 text-justify lg:col-span-3"><span className="text-yellow-400">SPEC</span> is being run under the aegis of the Electronics and Communication Department, NIT Hamirpur. We at <span className="text-yellow-400">SPEC</span>, organize various events, workshops, and competitions to pique the scientific temperament of the students. The society is reputed for conducting a national level hackathon: <span className="text-yellow-400">ELECTROTHON</span>, one of the most ingenious and diverse hackathon. <span className="text-yellow-400">ELECTROTHON</span> has been a budding ground to many mind-boggling ideas and inventions, a platform for the upcoming innovators and bold entrepreneurs. It also conducts its yearly technical fest, <span className="text-yellow-400">SPEC-FEST</span> covering advancements and marvels of the tech world, along with a display of year-long projects."</p>

const About = () => {
  return (
    <React.Fragment>
      <div className="font-monty max-w-5xl lg:max-w-full h-full relative">
        <div className="top-10 h-3/5 w-full flex flex-col justify-around shadow lg:backdrop-filter lg:backdrop-blur-lg section-content">
          <div className="px-24 rounded-2xl">
            <h1
              className="z-10 text-5xl text-white font-outfit"
              id="head"
            >
              About <span className="text-rose-500">Us</span>
            </h1>
            {/* <div className="mx-auto pt-3 border-b-2 border-gray-300 opacity-25 w-4/5"></div> */}
          </div>
          {/* <div className="lg:col-start-4 lg:col-span-3 row-start-1 row-end-3 bg-white">
          <h1 className="z-10 text-5xl py-8 text-black font-abrilface text-center" id="head">WHO WE ARE?</h1>
        </div> */}
          <div className="px-24 right-0 text-gray-300 text-md lg:text-xl lg:text-base leading-loose lg:leading:normal">
            {writeup}
          </div>
          </div>
          <div className="z-10 absolute left-1/3 w-3/5 -top-24">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              pagination={{ dynamicBullets: true, clickable: true }}
              navigation={true}
              loop={true}
              autoplay={{ delay: 2500 }}
              spaceBetween={0}
              slidesPerView={1}
            >
              {data.map((image, index) => {
                return (
                  <SwiperSlide>
                    <img src={image} key={index} className="" alt="carousel img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        
      </div>
    </React.Fragment>
  );
};
export default About;