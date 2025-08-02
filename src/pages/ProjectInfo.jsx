import { useParams } from "react-router-dom";
import { users } from "./OurWork";
import Navbar from "../components/shared/Navbar";
import FooterNew from "../components/shared/FooterNew";
import { useEffect } from "react";

const ProjectInfo = () => {
  const { id } = useParams();
  const project = users.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="text-white p-10">Project not found.</div>;
  }

  const {
    title,
    category,
    imageUrl,
    about,
    client,
    imageUrl1,
    imageUrl2,
    imageUrl3,
  } = project;

  const noInfo = "No more information on this project";

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <Navbar className="bg-[#FAFEF3]" />

      <div className="px-5 md:px-10 lg:px-20 py-10">
        <h3 className="text-[#161616] text-sm md:text-lg font-semibold">
          Our Works / <span className="text-[#DBDBDB]">{category}</span>
        </h3>

        <h2 className="text-[#003333] mt-4 md:mt-10 text-4xl md:text-6xl font-bold">
          {title}
        </h2>

        <p className="text-[#AAD468] text-base md:text-lg mt-2 font-semibold">
          {category}
        </p>

        <img
          loading="lazy"
          src={imageUrl}
          alt={`${title} preview`}
          className="w-full h-auto md:h-[620px] my-10 rounded-2xl object-cover"
        />

        <h3 className="text-2xl md:text-3xl mb-3 text-[#002E2E] font-semibold">
          About Project
        </h3>

        <p className="mt-5 text-base md:text-xl text-[#454545] leading-8">
          {about || noInfo}
        </p>

        {(imageUrl1 || imageUrl2 || imageUrl3) && (
          <div className="grid md:grid-cols-[60%_40%] gap-5 mt-10">
            {imageUrl1 && (
              <img
                loading="lazy"
                src={imageUrl1}
                alt="Project visual 1"
                className="w-full h-[400px] md:h-[600px] rounded-2xl object-contain"
              />
            )}
            <div className="flex flex-col justify-between gap-5">
              {imageUrl2 && (
                <img
                  loading="lazy"
                  src={imageUrl2}
                  alt="Project visual 2"
                  className="w-full h-[200px] md:h-[280px] rounded-2xl object-contain"
                />
              )}
              {imageUrl3 && (
                <img
                  loading="lazy"
                  src={imageUrl3}
                  alt="Project visual 3"
                  className="w-full h-[200px] md:h-[280px] rounded-2xl object-contain"
                />
              )}
            </div>
          </div>
        )}

        <h3 className="text-[#002E2E] text-center text-3xl md:text-5xl mt-20 font-semibold">
          What our client says
        </h3>
        <p className="my-10 text-base md:text-xl text-[#454545] text-center leading-8">
          {client || noInfo}
        </p>
      </div>

      {/* Footer */}
      <div className="bg-[#001C1C] text-[#F9F871]">
        <FooterNew />
      </div>
    </div>
  );
};

export default ProjectInfo;
