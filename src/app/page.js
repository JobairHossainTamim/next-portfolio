import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HistoryWorks from "@/components/HistoryWorks";
import Projects from "@/components/Projects";
import Review from "@/components/Review";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl w-full px-4 mx-auto">
        <div className="mt-20">
          <Header></Header>
          <Contact></Contact>
          <About></About>
          <Skills></Skills>
          <HistoryWorks></HistoryWorks>
          <Projects></Projects>
          <Review></Review>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
