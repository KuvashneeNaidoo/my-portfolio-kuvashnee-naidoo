import { Link, NavLink } from "react-router-dom";

import LogoImg from "../assets/logo-white.svg";
import GithubImg from "../assets/icons/github-white.svg";
import FrontendMentor from "../assets/icons/frontend-mentor.png";
import LinkedinImg from "../assets/icons/linkedin-white.svg";

const Footer = () => {
  return (
    <footer className="bg-[#33323d] text-white py-6 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-12 space-y-6 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0">
          <Link to="/">
            <img src={LogoImg} alt="Logo" className="mb-4 md:mb-0" />
          </Link>
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
            <li>
              <NavLink to="/" className="hover:text-[rgb(95,180,162)]">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="hover:text-[rgb(95,180,162)]">
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-[rgb(95,180,162)]">
                CONTACT ME
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.frontendmentor.io/profile/KuvashneeNaidoo"
            target="_blank"
            rel="noreferrer"
            className="transition-transform transform hover:animate-bounce"
          >
            <img
              src={FrontendMentor}
              alt="Frontend Mentor Link"
              className="h-8"
            />
          </a>
          <a
            href="https://github.com/KuvashneeNaidoo"
            target="_blank"
            rel="noreferrer"
            className="transition-transform transform hover:animate-bounce"
          >
            <img src={GithubImg} alt="Github Link" className="h-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/kuvashnee-naidoo-924947222/"
            target="_blank"
            rel="noreferrer"
            className="transition-transform transform hover:animate-bounce"
          >
            <img src={LinkedinImg} alt="Linkedin Link" className="h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
