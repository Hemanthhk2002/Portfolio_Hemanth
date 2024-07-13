import websiteImg1 from "../images/pawcare.jpeg";
import websiteImg2 from "../images/habitsync.jpeg";
import websiteImg3 from "../images/dweb.jpeg";

export default function Projects() {
  return (
    <section
      id="Projects"
      className="flex flex-col py-5 m-5 md:m-20 justify-center max-w-[1300px] mx-auto bg-black border-white border-2 border-solid shadow-lg shadow-zinc-400"
    >
      <div className="justify-center mb-10 md:mb-[50px] text-center">
        <div className="flex flex-col">
          <p className="text-3xl md:text-5xl text-white font-bold mb-5 md:mb-[25px] w-full max-w-[1000px] mx-auto">
            <b>PROJECTS</b>
          </p>
          <p className="text-gray-400">
            These are my projects works, Check them out
          </p>
        </div>
      </div>
      <div className="grid justify-evenly grid-cols-1 md:grid-cols-3   ml-10 gap-5 px-10 pr-20">
        <a
          href="https://github.com/Hemanthhk2002/PAWCARE"
          className="w-full md:w-auto"
        >
          <div className="relative mx-auto">
            <img
              className="h-[200px] md:h-[300px] w-full md:w-[300px]"
              src={websiteImg1}
              alt="PAWCARE"
            />
            <div className="absolute left-0 right-0 bottom-0 top-0 px-2 py-2 opacity-0  hover:opacity-100 bg-hero-pattern bg-cover bg-center bg-no-repeat">
              <p className="flex text-center text-sm md:text-xl mt-16 md:mt-24">
                The PawCare web-based pet adoption platform
              </p>
            </div>
            <p className="text-center font-hero-font mt-3">PAWCARE</p>
          </div>
        </a>
        <a
          href="https://github.com/Hemanthhk2002/daily-planner"
          className="w-full md:w-auto"
        >
          <div className="relative mx-auto">
            <img
              className="h-[200px] md:h-[300px] w-full md:w-[300px]"
              src={websiteImg2}
              alt="HABITSYNC"
            />
            <div className="absolute left-0 right-0 bottom-0 top-0 px-2 py-2 opacity-0 hover:opacity-100 bg-hero-pattern bg-cover bg-center bg-no-repeat">
              <p className="text-center text-sm md:text-xl mt-10 md:mt-16">
                The HabitSync mobile app designed for users to schedule events,
                track habits, and view habit analysis to improve general
                well-being.
              </p>
            </div>
            <p className="text-center font-hero-font mt-3">HABITSYNC</p>
          </div>
        </a>
        <a
          href="https://github.com/Hemanthhk2002/Dynamic_Webpage"
          className="w-full md:w-auto"
        >
          <div className="relative mx-auto">
            <img
              className="h-[200px] md:h-[300px] w-full md:w-[300px]"
              src={websiteImg3}
              alt="DYNAMIC WEBPAGE"
            />
            <div className="absolute left-0 right-0 bottom-0 top-0 px-2 py-2 opacity-0 hover:opacity-100 bg-hero-pattern bg-cover bg-center bg-no-repeat">
              <p className="text-center text-sm md:text-xl mt-14 md:mt-20">
                Created a dynamic webpage using HTML, CSS, JavaScript for
                teaching DOM in JavaScript.
              </p>
            </div>
            <p className="text-center font-hero-font mt-3">DYNAMIC WEBPAGE</p>
          </div>
        </a>
      </div>
    </section>
  );
}
