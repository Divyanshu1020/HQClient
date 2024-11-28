import AssetsAndScope from "@/components/icons/Assets&Scope";
import Chats from "@/components/icons/Chats";
import Helpdesk from "@/components/icons/Helpdesk";
import Meeting from "@/components/icons/Meeting";
import { ChartNoAxesColumn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function DesktopSidebar() {
  const location = useLocation();
  console.log("location", location);

  const list = [
    {
      id: "1",
      title: "Dashboard",
      Icon: ChartNoAxesColumn,
      link: "/dashboard",
    },
    {
      id: "2",
      title: "Assets & Scope",
      Icon: AssetsAndScope,
      link: "/assets&scope",
    },
    {
      id: "3",
      title: "Meetings",
      Icon: Meeting,
      link: "/meetings/details",
    },
    {
      id: "4",
      title: "Chats",
      Icon: Chats,
      link: "/chats",
    },
    {
      id: "5",
      title: "Payments",
      Icon: AssetsAndScope,
      link: "/payments",
    },
    {
      id: "6",
      title: "Helpdesk",
      Icon: Helpdesk,
      link: "/helpdesk",
    },
  ];

  const list2 = [
    {
      id: "1",
      title: "All Clients",
      Icon: ChartNoAxesColumn,
      link: "",
    },
    {
      id: "2",
      title: "All Projects",
      Icon: AssetsAndScope,
      link: "",
    },
  
  ];
  return (
    <div className="sticky  left-0 top-[80px] hidden  lg:w-[250px] xl:w-[300px] h-[calc(100vh-80px)] bg-sidebar-primary  shadow-[3px_3px_12px_0px_#D3E1F6] p-4 overflow-auto md:flex flex-col ">
      {/* top */}

      <div className="flex  flex-row gap-4 w-full p-4">
        <div className=" h-[60px] w-[60px] bg-[#515153]"></div>
        <div className="flex flex-col text-white ">
          <span>Project 1</span>
          <span>Progress - 58%</span>
        </div>
      </div>

      {/* List */}

      <div className="flex flex-col gap-2 mt-5 text-lg font-semibold text-[#344054]">
        {list.map(({ id, title, Icon, link }) => (
          <Link
            to={link}
            state={{ from: location.pathname }}
            key={id}
            className={`  text-[#A5A5A5] relative cursor-pointer hover:shadow-[3px_3px_10px_0px_#00000099,-3px_-3px_10px_0px_#610646]   px-4 py-3 rounded-xl  ${
              location.pathname === link
                ? "text-[#ffffff] shadow-[3px_3px_10px_0px_#00000099,-3px_-3px_10px_0px_#610646]"
                : ""
            } flex flex-row items-center gap-2 `}
          >
            {location.pathname === link && (
              <div className="absolute left-2 top-2 h-[70%] w-[4px] rounded-full bg-[white]"></div>
            )}
            <Icon color={location.pathname === link ? "#ffffff" : "#A5A5A5"} />
            {title}
          </Link>
        ))}

      </div>

      <div className=" min-h-[1px] bg-[#A5A5A5] w-full my-6">

      </div>

      <div className="mb-10 flex flex-col gap-2 mt-5 text-lg font-semibold text-[#344054]">
        {list2.map(({ id, title, Icon, link }) => (
          <Link
            to={link}
            state={{ from: location.pathname }}
            key={id}
            className={`  text-[#A5A5A5] relative cursor-pointer hover:shadow-[3px_3px_10px_0px_#00000099,-3px_-3px_10px_0px_#610646]   px-4 py-3 rounded-xl  ${
              location.pathname === link
                ? "text-[#ffffff] shadow-[3px_3px_10px_0px_#00000099,-3px_-3px_10px_0px_#610646]"
                : ""
            } flex flex-row items-center gap-2 `}
          >
            {location.pathname === link && (
              <div className="absolute left-2 top-2 h-[70%] w-[4px] rounded-full bg-[white]"></div>
            )}
            <Icon color={location.pathname === link ? "#ffffff" : "#A5A5A5"} />
            {title}
          </Link>
        ))}

      </div>

      {/* bottom */}

      <Link
        to={"/profile"}
        className="flex flex-row items-center justify-between mt-auto cursor-pointer"
      >
        <div className=" flex flex-row items-center gap-2">
          <div className="h-[40px] w-[40px] rounded-full bg-[#377be7]"></div>

          <div className="flex flex-col">
            <span className="font-semibold text-white text-sm">
              Olivia rhye
            </span>
            <span className=" text-sm text-[#bababa]">
              olivia@untitledui.com
            </span>
          </div>
        </div>

        <div className="h-[10px] w-[10px] border-[#bababa] rounded-full border"></div>
      </Link>


    </div>
  );
}
