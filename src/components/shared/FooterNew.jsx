import logo from "../../assets/footer logo.png";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const FooterNew = () => {
  return (
    <div className="py-10 px-5 lg:px-20">
      <div className=" grid grid-cols-1 md:grid-cols-2  items-center ">
        <div className="flex items-center relative">
          <div className="h-24 w-24 lg:h-36 lg:w-36 bg-[#AAD468]  rounded-full"></div>
          <h2 className="text-white text-5xl lg:text-7xl  font-extrabold absolute left-14">
            Let’s Talk
          </h2>
        </div>
        <div className="flex md:items-end flex-col mt-10">
          <div>
            <img src={logo} alt="footer logo" />
            <div className="flex gap-4 mt-5">
              <FacebookIcon />
              <LinkedinIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 my-10 w-full bg-[#FAFAFA]"></div>
      <div className=" block md:flex justify-between text-white">
        <p>© 2025 Kudos Digital. All rights reserved.</p>
        <div className="flex gap-5 ">
          <p className="underline">Privacy Policy</p>
          <p className="underline">Terms of Service</p>
          <p className="underline">Cookie Settings</p>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
