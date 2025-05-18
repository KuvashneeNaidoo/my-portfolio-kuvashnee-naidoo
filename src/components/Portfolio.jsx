import { Link } from "react-router-dom";

import Connect4Mobile from "../assets/portfolio/mobile/connect4-portfolio-mobile.jpg";
import Connect4Tablet from "../assets/portfolio/tablet/connect4-portfolio-tablet.jpg";
import Connect4Desktop from "../assets/portfolio/desktop/connect4-portfolio-desktop.jpg";

import AudiophileImg from "../assets/portfolio/mobile/audiophile-portfolio-mobile.jpg";
import AudiophileImgTablet from "../assets/portfolio/tablet/audiophile-portfolio-tablet.jpg";
import AudiophileImgDesktop from "../assets/portfolio/desktop/audiophile-portfolio-desktop.jpg";

import ManageImg from "../assets/portfolio/mobile/manage-portfolio-mobile.jpg";
import ManageImgTablet from "../assets/portfolio/tablet/manage-portfolio-tablet.jpg";
import ManageImgDesktop from "../assets/portfolio/desktop/manage-portfolio-desktop.jpg";

import EntertainmentImg from "../assets/portfolio/mobile/entertainment-portfolio-mobile.jpg";
import EntertainmentImgTablet from "../assets/portfolio/tablet/entertainment-portfolio-tablet.jpg";
import EntertainmentImgDesktop from "../assets/portfolio/desktop/entertainment-portfolio-desktop.jpg";

import ProjectInquiry from "./ProjectInquiry";

const Portfolio = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-6 mt-0">
      {/* Connect Four */}
      <section id="about">
        <div className="container">
          <div className="flex flex-col md:flex-row md:space-x-24">
            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <picture className="w-full h-full">
                <source srcSet={Connect4Desktop} media="(min-width: 1024px)" />
                <source srcSet={Connect4Tablet} media="(min-width: 768px)" />
                <img
                  src={Connect4Mobile}
                  alt="My profile"
                  className="w-full h-auto md:h-full object-cover"
                />
              </picture>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-1/3 sm:mt-10 md:mt-0 flex flex-col justify-center py-16 px-4 md:px-0 border-t-2 border-b-2 border-[#e1e1e2] text-left mx-auto">
              <h1 className="text-4xl font-bold w-full">Connect Four</h1>
              <p className="text-lg py-8 w-full">
                This project required me to build a fully responsive Connect
                Four game, where users can drop colored discs into columns and
                see them stack in real-time. I used React.js for the game logic
                and interactivity, with Tailwind CSS for styling and responsive
                layout.
              </p>

              <Link
                to="/portfolio/1"
                className="max-w-fit mt-4 px-8 py-4 border border-black bg-white text-black uppercase hover:bg-black hover:text-white hover:italic text-left"
              >
                VIEW PROJECT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Audiophile E-Commerce Store */}
      <section id="about" className="mt-20">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse">
            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center items-center md:ml-12">
              <picture className="w-full h-full">
                <source
                  srcSet={AudiophileImgDesktop}
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={AudiophileImgTablet}
                  media="(min-width: 768px)"
                />
                <img
                  src={AudiophileImg}
                  alt="My profile"
                  className="w-full h-auto md:h-full object-cover"
                />
              </picture>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-1/3 sm:mt-10 md:mt-0 flex flex-col justify-center py-16 px-4 md:px-0 border-t-2 border-b-2 border-[#e1e1e2] text-left mx-auto">
              <h1 className="text-4xl font-semibold w-full">
                Audiophile E-Commerce Store
              </h1>
              <p className="text-lg py-8 w-full">
                This project involved building a multi-page e-commerce website
                using React.js and Tailwind CSS. It includes functionality such
                as adding/removing products from the cart, editing product
                quantities, filling out checkout forms with validations, and
                displaying order summaries.
              </p>

              <Link
                to="/portfolio/2"
                className="max-w-fit mt-4 px-8 py-4 border border-black bg-white text-black uppercase hover:bg-black hover:text-white hover:italic text-left"
              >
                VIEW PROJECT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Entertainment App */}
      <section id="about" className="mt-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:space-x-24">
            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <picture className="w-full h-full">
                <source
                  srcSet={EntertainmentImgDesktop}
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={EntertainmentImgTablet}
                  media="(min-width: 768px)"
                />
                <img
                  src={EntertainmentImg}
                  alt="My profile"
                  className="w-full h-auto md:h-full object-cover"
                />
              </picture>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-1/3 sm:mt-10 md:mt-0 flex flex-col justify-center py-16 px-4 md:px-0 border-t-2 border-b-2 border-[#e1e1e2] text-left mx-auto">
              <h1 className="text-4xl font-semibold w-full">
                Entertainment App
              </h1>
              <p className="text-lg py-8 w-full">
                A fully responsive entertainment web app built with Next.js,
                TypeScript, Material UI, and Redux. It allows users to browse
                and bookmark movies and TV series, search content across pages,
                and navigate between Home, Movies, TV Series, and Bookmarked
                Shows.
              </p>

              <Link
                to="/portfolio/3"
                className="max-w-fit mt-4 px-8 py-4 border border-black bg-white text-black uppercase hover:bg-black hover:text-white hover:italic text-left"
              >
                VIEW PROJECT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manage Landing Page */}
      <section id="about" className="mt-20 mb-20">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse">
            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center items-center md:ml-12">
              <picture className="w-full h-full">
                <source srcSet={ManageImgDesktop} media="(min-width: 1024px)" />
                <source srcSet={ManageImgTablet} media="(min-width: 768px)" />
                <img
                  src={ManageImg}
                  alt="My profile"
                  className="w-full h-auto md:h-full object-cover"
                />
              </picture>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-1/3 sm:mt-10 md:mt-0 flex flex-col justify-center py-16 px-4 md:px-0 border-t-2 border-b-2 border-[#e1e1e2] text-left mx-auto">
              <h1 className="text-4xl font-semibold w-full">Manage</h1>
              <p className="text-lg py-8 w-full">
                This was a small project which mostly consisted of HTML and CSS.
                I built a fully-responsive landing page. The only JavaScript
                this project required was to enable the toggling of the mobile
                navigation.
              </p>

              <Link
                to="/portfolio/4"
                className="max-w-fit mt-4 px-8 py-4 border border-black bg-white text-black uppercase hover:bg-black hover:text-white hover:italic text-left"
              >
                VIEW PROJECT
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectInquiry />
    </main>
  );
};

export default Portfolio;
