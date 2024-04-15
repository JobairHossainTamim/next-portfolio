"use client";

import Heading from "./Heading";
import data from "@/data/about";
import SectionWrapper from "./section/SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <section>
        <Heading>about</Heading>
        <h3 className="text-xl md:text-2xl font-semibold capitalize light:text-black dark:text-white">
          {data.heading} 👋
        </h3>
        <p className="mt-3 text-base md:text-lg font-semibold light:text-black dark:text-zinc-400">
          {data.bio}
        </p>
      </section>
    </SectionWrapper>
  );
};

export default About;
