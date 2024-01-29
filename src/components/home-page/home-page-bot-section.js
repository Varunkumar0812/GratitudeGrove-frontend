import HomePageButton from "./button";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CoverImage from "../../assests/bottom-section.jpg";

function HomePageBotSection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center 2xl:p-10 2xl:pb-16 bg-red-100 pt-10 pb-20">
      <div className="flex justify-center flex-wrap bg-red-100 2xl:px-40 text-center px-3">
        <img alt="Cover" src={CoverImage} className="w-96 h-64 bg-auto"></img>

        <div className="my-5 md:px-10 text-sm sm:text-lg">
          "Embark on a transformative journey of self-discovery and positivity.
          Join us on GratitudeGrove, where each entry is a step toward a
          brighter, more grateful tomorrow. Start your journaling journey today
          and embrace the power of gratitude to uplift your spirit and enrich
          your life."
        </div>
        <div>
          <HomePageButton onClick={() => navigate("/register")}>
            Get Started
            <FaArrowRight style={{ marginLeft: 5 }} />
          </HomePageButton>
        </div>
      </div>
    </div>
  );
}

export default HomePageBotSection;
