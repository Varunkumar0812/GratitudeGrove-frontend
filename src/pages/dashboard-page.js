import TemporaryDrawer from "../components/sidebar-page/drawer";
import IconMenu from "../components/sidebar-page/icon-menu";
import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { RiBookletLine } from "react-icons/ri";
import { RiBookletFill } from "react-icons/ri";
import { GrTarget } from "react-icons/gr";
import { SiTarget } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

const items = [
  {
    id: 1,
    name: "My Dashboard",
    url: "/dashboard",
    icon1: <MdOutlineSpaceDashboard style={{ transform: "scale(1.5)" }} />,
    icon2: (
      <MdSpaceDashboard style={{ transform: "scale(1.5)", color: "white" }} />
    ),
  },
  {
    id: 2,
    name: "My Journals",
    url: "/myjournals",
    icon1: <RiBookletLine style={{ transform: "scale(1.5)" }} />,
    icon2: (
      <RiBookletFill style={{ transform: "scale(1.5)", color: "white" }} />
    ),
  },
  {
    id: 3,
    name: "My Goals",
    url: "/mygoals",
    icon1: <GrTarget style={{ transform: "scale(1.5)" }} />,
    icon2: <SiTarget style={{ transform: "scale(1.5)", color: "white" }} />,
  },
  {
    id: 4,
    name: "Calendar",
    url: "/calendar",
    icon1: <FaRegCalendarAlt style={{ transform: "scale(1.4)" }} />,
    icon2: (
      <FaCalendarDays style={{ transform: "scale(1.4)", color: "white" }} />
    ),
  },
  {
    id: 5,
    name: "Settings",
    url: "/settings",
    icon1: <IoSettingsOutline style={{ transform: "scale(1.4)" }} />,
    icon2: (
      <IoSettingsSharp style={{ transform: "scale(1.4)", color: "white" }} />
    ),
  },
];

function DashboardPage({ children }) {
  const [selected, setSelected] = useState(1);
  const [currTitle, setCurrentTitle] = useState(1);

  const handleChange = (index) => {
    setSelected(index);
    setCurrentTitle(index);
  };

  return (
    <div className="h-[100vh] max-h-[100vh] bg-green-600 flex justify-center">
      <div className="bg-red-300 min-h-[100vh] hidden sm:block">
        <div className="py-10 flex flex-col items-center justify-center bg-red-300">
          <img
            src=""
            alt="main-logo"
            className="w-[100px] h-[100px] border-4 mb-4"
          ></img>
          <div className="text-4xl font-semibold">GratitudeGrove</div>
        </div>
        <div>
          <IconMenu currSelected={selected} onChange={handleChange} />
        </div>
      </div>
      <div className="w-full bg-yellow-100 max-h-[100vh] flex flex-col">
        <div className="bg-white w-full py-8 flex justify-between items-center px-5 lg:px-10 flex-wrap">
          <div className="text-lg lg:text-3xl font-semibold">
            {items[currTitle - 1].name}
          </div>
          <div className="flex items-center">
            <div className="text-sm sm:text-md lg:text-lg">
              Varunkumar Raman
            </div>
            <FaCircleUser className="text-md lg:text-2xl ml-5 cursor-pointer hover:scale-110 transition" />
            <RiLogoutCircleRLine className="text-md lg:text-2xl ml-5 cursor-pointer hover:scale-110 transition" />

            <div className="block sm:hidden">
              <TemporaryDrawer
                currSelected={selected}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="overflow-auto">{children}</div>
      </div>
    </div>
  );
}

export default DashboardPage;
export { items };
