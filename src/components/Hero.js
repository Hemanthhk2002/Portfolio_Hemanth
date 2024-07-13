import bgimage from "../images/profile.jpeg";
import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

export default function Herio() {
  return (
    <section
      id="Hero"
      className="flex flex-col md:flex-row px-5 py-32 justify-center items-center gap-12"
    >
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-3xl py-20 font-hero-font">
          Hi,
          <br />
          <b className="text-5xl">I am Hemanth Kumar V</b>
          <br />
          <p className="text-2xl text-gray-300">MCA</p>
          <div className="flex gap-5 text-center text-4xl py-5 justify-center md:justify-start">
            <a
              className="hover:text-gray-500"
              href="mailto:hemanthkumarv2k02@gmail.com?subject=Hello%20there&body=This%20is%20a%20predefined%20email%20body."
            >
              <IoMdMail />
            </a>
            <a
              className="hover:text-gray-500"
              href="https://www.linkedin.com/in/hemanth-kumar-655b6a235/"
            >
              <IoLogoLinkedin />
            </a>
            <a
              className="hover:text-gray-500"
              href="https://github.com/Hemanthhk2002"
            >
              <IoLogoGithub />
            </a>
          </div>
        </h1>
      </div>

      <img
        className="w-1/2 md:w-1/4 rounded-xl border-4 border-black border-solid shadow-lg hover:shadow-xl hover:border-dotted"
        src={bgimage}
        alt="Profile"
      />
    </section>
  );
}
