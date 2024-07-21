import React, { useEffect } from "react";
import Discord from "../assets/projects/discord-video-chat.png";
import Snapgram from "../assets/projects/Snapgram.jpeg";
import ChatApp from "../assets/projects/ChatApp.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projectData = [
    {
      id: 1,
      src: ChatApp,
      desc: "Full-stack chat app with React, Tailwind, Node.js, Express, Socket.io, and Daisy UI.",
      demo: "https://codeplus-mystiquetalk.onrender.com/",
      code: "https://github.com/Anujshivhare/Codeplus-Mystique-Talk",
    },
    {
      id: 2,
      src: Snapgram,
      desc: "Social media app built with React, Tailwind, ShadcnUI, Node.js, and MongoDB.",
      demo: "https://snapgram-6e57.onrender.com/",
      code: "https://github.com/Anujshivhare/Snapgram",
    },
    {
      id: 3,
      src: Discord,
      desc: "Discord clone video chat app where users can send requests, accept requests, chat, and make video calls using WebRTC.",
      demo: "https://discord-video-chat.vercel.app/",
      code: "https://github.com/Anujshivhare/Video-Chat-App",
    },
  ];

  return (
    <div
      name="projects"
      className="h-auto max-h-screen-lg bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400">
            Projects
          </h2>
          <p className="py-6">Check out some of my work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0">
          {projectData.map(({ id, src, desc, demo, code }) => (
            <div
              data-aos="fade-in"
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt="Project"
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="p-2 text-justify font-extralight">{desc}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md">
                  <a href={demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md">
                  <a href={code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
