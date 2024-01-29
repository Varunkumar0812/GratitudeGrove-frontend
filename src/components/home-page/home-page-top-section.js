import HomePageButton from "./button";
import { useNavigate } from "react-router-dom";
import Logo from "../../assests/logo.png";

function HomePageTopSection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[600px] bg-red-100 flex justify-center items-center">
      <div className="flex flex-col items-center sm:px-20 2xl:px-96 text-center">
        <img
          alt="main-logo"
          src={Logo}
          className="w-40 h-40 hover:scale-110 hover:-translate-y-2 transition ease-in-out"
        ></img>
        <div className="md:text-5xl p-5 font-semibold text-3xl">
          GratitudeGrove
        </div>
        <div className="px-20 md:text-lg text-sm md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet
          finibus ante vel eleifend. Praesent scelerisque dui ligula, eget
          pretium neque imperdiet at. Aliquam euismod velit suscipit consectetur
          auctor.
        </div>
        <div className="flex m-5 items-center justify-center flex-wrap">
          <div className="m-2">
            <HomePageButton onClick={() => navigate("/register")}>
              Sign Up
            </HomePageButton>
          </div>
          <div className="m-2">
            <HomePageButton onClick={() => navigate("/login")}>
              Sign In
            </HomePageButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageTopSection;
