import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

// OLD ABOUT ME SECTION
// <section id="about" className="mt-20">
//   <div className="container">
//     <div className="flex flex-col md:flex-row md:space-x-8 ">
//       {/* Image Container */}
//       <picture className="w-full md:w-1/2">
//         <source srcSet={AboutImgDesktop} media="(min-width: 1024px)" />
//         <source srcSet={AboutImgTablet} media="(min-width: 768px)" />
//         <img src={AboutImg} alt="My profile" className="w-full" />
//       </picture>

//       {/* Text Container */}
//       <div className="mt-10 md:m-0 flex flex-col max-w-md w-full md:mx-auto py-16 border-t-1 border-b-1 border-black">
//         <h2 className="text-3xl font-semibold">About Me</h2>
//         <p className="text-lg max-w-md text-left py-8">
//           I’m a junior front-end developer looking for a new role in an
//           exciting company. I focus on writing accessible HTML, using
//           modern CSS practices and writing clean JavaScript. When writing
//           JavaScript code, I mostly use React, but I can adapt to whatever
//           tools are required. I’m based in London, UK, but I’m happy
//           working remotely and have experience in remote teams. When I’m
//           not coding, you’ll find me outdoors. I love being out in nature
//           whether that’s going for a walk, run or cycling. I’d love you to
//           check out my work.
//         </p>

//         <Link
//           to="/portfolio"
//           className="max-w-fit mt-4 px-8 py-4 border border-black-700 bg-white text-black uppercase"
//         >
//           GO TO PORTFOLIO
//         </Link>
//       </div>
//     </div>
//   </div>
// </section>;
