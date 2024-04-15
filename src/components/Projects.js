import data from "@/data/projects";
import Heading from "./Heading";
import SectionWrapper from "./section/SectionWrapper";
import Image from "next/image";

const Projects = () => {
  return (
    <SectionWrapper>
      <Heading>Projects</Heading>

      {data.map((project) => (
        <div
          key={project.id}
          className="flex flex-wrap gap-5 w-full lg:w-8/12 mb-10"
        >
          <div className="relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              fill
              className="w-full h-full absolute top-0 left-0 bottom-0 right-0"
              alt="project image"
            />
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Projects;
