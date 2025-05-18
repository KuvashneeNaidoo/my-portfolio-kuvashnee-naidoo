import { Link } from "react-router-dom";

const ProjectInquiry = () => {
  return (
    <section className="my-20 flex flex-col md:flex-row items-center justify-between gap-4">
      <h1 className="text-4xl font-bold text-center md:text-left max-w-xs mx-auto md:mx-0">
        Interested in doing a project together?
      </h1>
      <div className="w-full md:flex-1 h-[2px] bg-[#e1e1e2] mx-6 hidden md:block "></div>
      <Link
        to="/contact"
        className="max-w-fit px-8 py-4 sm:mt-4 md:mt-0 border border-black-700 bg-white text-black uppercase hover:bg-black hover:text-white hover:italic"
      >
        CONTACT ME
      </Link>
    </section>
  );
};

export default ProjectInquiry;
