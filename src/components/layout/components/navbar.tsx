import AssetsAndScope from "@/components/icons/Assets&Scope";
import Chats from "@/components/icons/Chats";
import Helpdesk from "@/components/icons/Helpdesk";
import Logo from "@/components/icons/Logo";
import Meeting from "@/components/icons/Meeting";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  ChartNoAxesColumn,
  ChevronDown,
  Plus,
  Search,
  Settings,
  UserRound,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="sticky bg-sidebar-primary  left-0 top-0 w-full h-[80px] shadow_nav   flex flex-row items-center justify-between z-50">
      {/* left */}
      <div className="flex flex-row items-center gap-3 sm:gap-11 text-lg font-semibold px-5">
        <h1 className="text-2xl font-semibold">
          <Logo/>
        </h1>
        <div className="lg:flex  items-center gap-11 hidden text-nowrap">
          <p
            className={`h-full flex flex-row gap-5 items-center cursor-pointer  py-5 px-4 text-[#ffffff] `}
          >
            Projects <ChevronDown color="#475467" className="mt-1" />
          </p>
          <Link
            to={"/all-projects"}
            className={`h-full  py-5 px-4 ${
              location.pathname === "/all-projects"
                ? "border-b-[#155EEF] cursor-pointer border-b-[4px] text-[#155EEF]"
                : " text-[#ffffff]"
            }`}
          >
            All Projects
          </Link>
          <span className=" cursor-pointer flex flex-row items-center py-3 px-4 gap-2 shadow-[3px_3px_10px_0px_#00000099,-3px_-3px_10px_0px_#610646] text-[#ffffff] rounded-xl">
            <Plus color="#ffffff" /> Add Project
          </span>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-row items-center gap-5 pr-5">
        <span className="relative w-full hidden sm:block">
          <input
            placeholder="Search"
            className=" bg-[#E4EEFE]  md:[250px] xl:w-[350px] bg-sidebar-primary sm:min-w-[250px]  py-3 px-6 pl-11 outline-none shadow-[3px_3px_10px_0px_#00000099,-3px_-3px_10px_0px_#610646]   border-[#000000] rounded-xl  placeholder:font-medium placeholder:text-base placeholder:text-white  "
            type="search"
            name=""
            id=""
          />
          <Search
            color="#ffffff"
            strokeWidth={2.6}
            className="absolute h-[20px] w-[20px] top-[14px] left-4 font-medium"
          />
        </span>
        <span className="relative">
          <Bell color="#f6f6f6" />
          <div className="h-3 w-3 p-1 bg-[#ff2525] rounded-full absolute top-0 right-0">
            <span className="w-full h-full flex items-center justify-center text-[6px] text-white">
              12
            </span>
          </div>
        </span>
        <span>
          <Settings color="rgb(255, 255, 255)" />
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger className=" border-0">
            <span className="relative">
              <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full overflow-hidden bg-[#4872b5]">
                <img
                  src="https://th.bing.com/th/id/OIP.TBtd5w-p0zOjWIEEBONRFAHaEo?rs=1&pid=ImgDetMain"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-4 w-4 bg-[#25ff30] border-2  border-white rounded-full absolute bottom-0 right-0"></div>
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" ">
            <DropdownMenuItem>
              <Link
                to={"/profile"}
                state={{ from: location.pathname }}
                className={` w-full  relative cursor-pointer hover:shadow_sidebar_btn_selected   px-4 py-3 rounded-xl  ${
                  location.pathname === "/profile"
                    ? "text-[#155EEF] shadow_sidebar_btn_selected"
                    : ""
                } flex flex-row items-center gap-2 `}
              >
                {location.pathname === "/profile" && (
                  <div className="absolute left-2 top-2 h-[70%] w-[4px] rounded-full bg-[#155EEF]"></div>
                )}
                <UserRound
                  color={
                    location.pathname === "/profile" ? "#155EEF" : "#6A6A6A"
                  }
                />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {list.map(({ id, title, Icon, link }) => (
              <DropdownMenuItem key={id}>
                <Link
                  to={link}
                  state={{ from: location.pathname }}
                  key={id}
                  className={` w-full  relative cursor-pointer hover:shadow_sidebar_btn_selected text-base   px-4 py-3 rounded-xl  ${
                    location.pathname === link
                      ? "text-[#155EEF] shadow_sidebar_btn_selected"
                      : ""
                  } flex flex-row items-center gap-2 `}
                >
                  {location.pathname === link && (
                    <div className="absolute left-2 top-2 h-[70%] w-[4px] rounded-full bg-[#155EEF]"></div>
                  )}
                  <Icon
                    color={location.pathname === link ? "#155EEF" : "#6A6A6A"}
                  />
                  {title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
