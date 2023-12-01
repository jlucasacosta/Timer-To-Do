import React from "react";
import Navigation from "../components/Navigation";
import HomeLayout from "../components/HomeLayout";

const Home = () => {
  return (
    <div className="container overflow-hidden relative h-screen mx-auto px-4 flex flex-col items-center justify-between bg-[#26263a]">
      <nav className="w-3/4 h-auto">
        <Navigation />
      </nav>

      <section className="h-full w-3/4 pt-20">
        <HomeLayout />
      </section>

      <div className="h-full w-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-screen  absolute bottom-0"
        >
          <path
            fill="#bfff00"
            fill-opacity="1"
            d="M0,256L34.3,250.7C68.6,245,137,235,206,218.7C274.3,203,343,181,411,176C480,171,549,181,617,176C685.7,171,754,149,823,154.7C891.4,160,960,192,1029,181.3C1097.1,171,1166,117,1234,112C1302.9,107,1371,149,1406,170.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;
