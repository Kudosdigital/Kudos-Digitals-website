import React from "react";
import { useParams } from "react-router-dom";
import { users } from "./OurWork";
import Navbar from "../components/shared/Navbar";
import FooterNew from "../components/shared/FooterNew";

const ProjectInfo = () => {
  const { id } = useParams();
  const project = users.find((p) => p.id === id);

  if (!project) {
    return <div className="text-white p-10">Project not found.</div>;
  }

  return (
    <div className="bg-[#F9F9F9] ">
      <Navbar />
      <div className="px-10">
        <div>
          <h3 className="text-[#161616] text-xl font-semibold">
            Our Works/<span className="text-[#DBDBDB]">{project.category}</span>
          </h3>
          <h2 className="text-[#003333] mt-10 text-7xl font-bold">
            {project.title}
          </h2>
          <p className="text-[#AAD468]  text-lg mt-2 font-semibold">
            {project.category}
          </p>
          <img
            src={project.imageUrl}
            alt=""
            className="h-[620px] my-10 rounded-2xl w-full"
          />
          <h3 className="text-3xl mb-3 text-[#002E2E]  font-semibold">
            About Project
          </h3>
          {!project.about ? (
            <p className="my-5 text-xl text-[#454545]  leading-10">
              No more information on this project
            </p>
          ) : (
            <div>
              <p className="mt-5 text-xl text-[#454545]  leading-10">
                {!project.about
                  ? "No more information on this project"
                  : project.about}
              </p>
              <div className="grid grid-cols-[60%_40%]   gap-5">
                <img
                  src={project.imageUrl1}
                  alt=""
                  className=" h-[600px] my-10 rounded-2xl w-full"
                />
                <div>
                  <img
                    src={project.imageUrl2}
                    alt=""
                    className=" h-[280px] my-10 rounded-2xl w-full"
                  />
                  <img
                    src={project.imageUrl3}
                    alt=""
                    className=" h-[280px] my-10 rounded-2xl w-full"
                  />
                </div>
              </div>
              <h3 className="text-[#002E2E] text-center text-5xl mt-20 font-semibold">
                What our client say's
              </h3>
              <p className="my-10 text-xl text-[#454545] text-center leading-10">
                {!project.client
                  ? "No more information on this project"
                  : project.client}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex lg:px-20 px-3 py-7 mt-5 lg:text-xl md:text-sm text-[10px] font-medium justify-between text-[#001515] bg-[#AAD468] items-center">
        <span>UI Design</span>
        <span className="w-3 h-3 rounded-full bg-[#F9F871]"></span>
        <span>Event Branding</span>
        <span className="w-3 h-3 rounded-full bg-[#F9F871]"></span>
        <span>Brand Identity</span>
        <span className="w-3 h-3 rounded-full bg-[#F9F871]"></span>
        <span>Website Design</span>
        <span className="w-3 h-3 rounded-full bg-[#F9F871]"></span>
        <span>Flyers & Banner Design</span>
      </div>

      <div className="bg-[#001C1C] text-[#F9F871]">
        <FooterNew />
      </div>
    </div>
  );
};

export default ProjectInfo;
