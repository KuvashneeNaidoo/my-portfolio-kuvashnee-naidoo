import { useParams, Link } from "react-router-dom";
import projectData from "../data/ProjectData";
import ArrowLeft from "../assets/icons/arrow-left.svg";
import ArrowRight from "../assets/icons/arrow-right.svg";
import ProjectInquiry from "./ProjectInquiry";

const ProjectDetail = () => {
  const { projectId } = useParams(); // Get projectId from the URL params
  const project = projectData.find((item) => item.id === projectId); // Find the matching project from the array

  if (!project) {
    return (
      <div className="p-10 text-center text-red-600 text-xl">
        project not found.
      </div>
    );
  }

  return (
    <main className="max-w-screen-xl mx-auto px-6">
      <section>
        <picture>
          <source
            srcSet={`/images/detail/desktop/${project.imgHero}.jpg`}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={`/images/detail/tablet/${project.imgHero}.jpg`}
            media="(min-width: 768px)"
          />
          <img
            src={`/images/detail/mobile/${project.imgHero}.jpg`}
            alt={project.title}
            className="w-full h-auto mb-6"
          />
        </picture>

        <section className="details flex flex-wrap">
          {/* Left Sidebar */}
          <aside className="w-full md:w-1/3 mt-16 md:pr-20">
            <h1 className="text-4xl font-bold py-12 border-t-2 border-[#e1e1e2]">
              {project.title}
            </h1>
            <p className="text-lg mb-8">{project.description}</p>
            <h5 className="text-[rgb(95,180,162)]">{project.type}</h5>
            <h5 className="text-[rgb(95,180,162)] mb-16">
              {project.technos.join(" / ")}
            </h5>
            <div className="border-b-2 border-[#e1e1e2] pb-16 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-black-700 bg-white text-black uppercase hover:bg-black hover:text-white hover:italic text-center"
              >
                LIVE SITE
              </a>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-black-700 bg-white text-black uppercase hover:bg-black hover:text-white hover:italic text-center"
              >
                SOURCE CODE
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <div className="w-full md:w-2/3 mt-16 md:pl-24">
            <h1 className="text-4xl mb-8">Project Background</h1>
            <p className="text-lg mb-8 leading-loose">{project.infos}</p>

            <h1 className="text-4xl mb-8">Static Previews</h1>

            <picture className="details-content-preview mb-8">
              <source
                srcSet={`/images/detail/desktop/${project.preview1}.jpg`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`/images/detail/tablet/${project.preview1}.jpg`}
                media="(min-width: 768px)"
              />
              <img
                src={`/images/detail/mobile/${project.preview1}.jpg`}
                alt="Preview of the project"
                className="mb-8"
              />
            </picture>

            <picture className="details-content-preview-second">
              <source
                srcSet={`/images/detail/desktop/${project.preview2}.jpg`}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={`/images/detail/tablet/${project.preview2}.jpg`}
                media="(min-width: 768px)"
              />
              <img
                src={`/images/detail/mobile/${project.preview2}.jpg`}
                alt="Second preview of the project"
                className="mb-12"
              />
            </picture>
          </div>
        </section>

        <section className="project-navigation mt-16 flex flex-col md:flex-row justify-between gap-0 border-t-2 border-b-2 border-[#e1e1e2]">
          {project.previousProject && (
            <Link
              to={`/portfolio/${
                projectData.find(
                  (item) => item.title === project.previousProject
                )?.id
              }`}
              className="w-full md:w-1/2 px-6 py-10 text-left hover:text-white transition flex items-center justify-start border-b-2 border-[#e1e1e2] md:border-b-0 md:mr-0"
            >
              <img
                src={ArrowLeft}
                alt="Previous"
                className="inline-block mr-8"
              />
              <div className="flex flex-col items-start">
                <h1 className="text-3xl mb-2">{project.previousProject}</h1>
                <p className="text-[#e1e1e2] text-sm md:text-base">
                  Previous Project
                </p>
              </div>
            </Link>
          )}

          {project.nextProject && (
            <Link
              to={`/portfolio/${
                projectData.find((item) => item.title === project.nextProject)
                  ?.id
              }`}
              className="w-full md:w-1/2 px-6 py-10 text-right hover:text-white transition flex items-center justify-end border-[#e1e1e2] md:border-l-2 md:ml-0"
            >
              <div className="flex flex-col items-end">
                <h1 className="text-3xl mb-2">{project.nextProject}</h1>
                <p className="text-[#e1e1e2] text-sm md:text-base">
                  Next Project
                </p>
              </div>
              <img src={ArrowRight} alt="Next" className="inline-block ml-8" />
            </Link>
          )}
        </section>
      </section>
      <ProjectInquiry />
    </main>
  );
};

export default ProjectDetail;
