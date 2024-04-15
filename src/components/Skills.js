import Heading from "./Heading";
import SkillComponent from "./SkillsComponents";
import SectionWrapper from "./section/SectionWrapper";
import data from "@/data/skills";

const Skills = () => {
  return (
    <SectionWrapper>
      <Heading>Skills</Heading>

      <div className="flex flex-wrap items-center gap-5">
        {data.map((skill) => (
          <SkillComponent skill={skill} key={skill.id} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
