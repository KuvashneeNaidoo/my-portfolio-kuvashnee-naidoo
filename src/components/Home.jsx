import { Link } from "react-router-dom";

import ProfileImg from "../assets/homepage/desktop/my-profile-picture.jpg";
import HeroImg from "../assets/homepage/mobile/image-homepage-hero@2x.jpg";
import HeroImgTablet from "../assets/homepage/tablet/image-homepage-hero@2x.jpg";
import HeroImgDesktop from "../assets/homepage/desktop/image-homepage-hero@2x.jpg";
import StyleButton from "../assets/icons/down-arrows.svg";
import ProjectInquiry from "./ProjectInquiry";

const Home = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-6 mt-0">
      <section>
        <div className="relative flex flex-col">
          <picture>
            <source srcSet={HeroImgDesktop} media="(min-width: 1024px)" />
            <source srcSet={HeroImgTablet} media="(min-width: 768px)" />
            <img
              src={HeroImg}
              alt="Website in creation"
              className="w-full h-auto"
            />
          </picture>

          <div className="md:absolute md:bottom-0 md:left-0 md:max-w-xl md:bg-white text-left font-bold md:pt-12 md:pb-22 pl-0 leading-tight">
            <h1 className="text-6xl">
              Hey, I’m <span className="text-[#203a4c]">Kuvashnee Naidoo </span>
              and I love building beautiful websites
            </h1>
          </div>

          <div className="mt-4 md:absolute md:bottom-0 left-0 flex max-w-fit items-center bg-[#1d3444] pl-5 group hover:bg-[#59a897] hover:text-white">
            <img
              src={StyleButton}
              alt="Style button"
              className="mr-4 group-hover:invert"
            />
            <a
              className="px-8 py-4 bg-[#203a4c] text-white uppercase group-hover:bg-[#5fb4a2] group-hover:text-white group-hover:italic"
              href="#about"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mt-20">
        <div className="container">
          <div className="flex flex-col md:flex-row md:space-x-24">
            {/* Image Container */}
            <div className="w-full md:w-1/2 flex justify-center">
              <picture className="w-full h-full">
                <source srcSet={ProfileImg} media="(min-width: 1024px)" />
                <source srcSet={ProfileImg} media="(min-width: 768px)" />
                <img
                  src={ProfileImg}
                  alt="My profile"
                  className="w-full h-auto md:h-full object-cover"
                />
              </picture>
            </div>

            {/* Text Container */}
            <div className="w-full mt-10 md:m-0 md:w-1/2 md:ml-12 md:mr-12 flex flex-col justify-center py-16 border-t-2 border-b-2 border-[#e1e1e2]">
              <h1 className="text-5xl font-bold">About Me</h1>
              <p className="text-lg text-left py-8 leading-loose">
                I’m a Technical Learning Designer with expertise in front-end
                development, looking for a new role in an exciting company. I
                focus on writing accessible HTML, using modern CSS practices and
                writing clean JavaScript and TypeScript. On the front end, I
                mostly use React and Next.js, but I can adapt to whatever tools
                are required. On the back end, I have experience with Node.js,
                Express, and MongoDB. I’m based in Durban, South Africa, and
                have experience working with remote teams. When I’m not coding,
                you’ll find me capturing stunning moments through photography.
              </p>

              <p>I’d love for you to check out my work.</p>
              <br />

              <Link
                to="/portfolio"
                className="max-w-fit mt-4 px-8 py-4 border border-black-700 bg-white text-black uppercase hover:bg-black hover:text-white hover:italic"
              >
                GO TO PORTFOLIO
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ProjectInquiry />
    </main>
  );
};

export default Home;
