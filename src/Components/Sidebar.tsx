import { Link } from "react-router-dom";

import { FaSquarePollVertical } from "react-icons/fa6";
// import { FaFolder } from "react-icons/fa";
import {
  MdFolder,
  MdNotifications,
  MdSpaceDashboard,
  MdTask,
} from "react-icons/md";
import { BiChat } from "react-icons/bi";
import { useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import {
  PiGearSixFill,
  PiSidebarSimple,
  PiSidebarSimpleFill,
} from "react-icons/pi";

const Sidebar = ({ openState }: { openState: any }) => {
  const [open, setOpen] = openState;

  const [currentPage, setCurrentPage] = useState("");

  //  border-3 border-gray-400
  const iconSize = "2.5rem";
  const iconStyle = "";
  const links = [
    {
      link: "Dashboard",
      path: "/",
      icon: <MdSpaceDashboard size={iconSize} className={iconStyle} />,
    },
    {
      link: "Polls",
      path: "/polls",
      icon: <FaSquarePollVertical size={iconSize} className={iconStyle} />,
    },
    {
      link: "Projects",
      path: "/projects",
      icon: <MdFolder size={iconSize} className={iconStyle} />,
    },
    {
      link: "Notifications",
      path: "/notifications",
      icon: <MdNotifications size={iconSize} className={iconStyle} />,
    },
    {
      link: "Chat rooms",
      path: "/chatrooms",
      icon: <BiChat size={iconSize} className={iconStyle} />,
    },
    {
      link: "Tasks",
      path: "/tasks",
      icon: <MdTask size={iconSize} className={iconStyle} />,
    },
    {
      link: "Members",
      path: "/members",
      icon: <HiUsers size={iconSize} className={iconStyle} />,
    },
    {
      link: "Notes",
      path: "/notes",
      icon: <MdFolder size={iconSize} className={iconStyle} />,
    },
  ];

  useEffect(() => {
    // console.log(currentPage);
    setCurrentPage(window.location.pathname.split("/")[1]);
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 flex min-h-screen w-22 flex-col justify-between bg-white px-4 py-2 shadow-[00px_10px_10px_0_#00000023] transition-[width] duration-100 hover:shadow-[10px_0px_10px_0_#00000012] ${open ? "w-60" : ""}`}
    >
      <div>
        <h1
          className="ml-2 flex h-20 w-fit cursor-pointer items-center justify-start px-0 text-2xl"
          onClick={() => setOpen((prev: any) => !prev)}
        >
          {open ? (
            <PiSidebarSimpleFill size={"2.5rem"} className="" />
          ) : (
            <PiSidebarSimple size={"2.5rem"} className="text-gray-600" />
          )}
        </h1>
        <div>
          {links.map((link) => (
            <Link
              to={link.path}
              onClick={() => setCurrentPage(link.path.split("/")[1])}
              className={`flex flex-row items-center gap-2 rounded-lg px-2 py-1 text-xl font-semibold ${link.path.split("/")[1] === currentPage ? "bg-blue-400 text-white hover:bg-blue-500 hover:text-white" : "text-neutral-500 hover:border hover:text-black"}`}
            >
              <h1 className={`${open ? "" : ""}`}>{link.icon}</h1>
              <h1 className={open ? "" : "hidden"}>{link.link}</h1>
            </Link>
          ))}
        </div>
      </div>
      <button className="ml-2 h-10 w-full cursor-pointer items-center justify-center">
        <PiGearSixFill
          size={"2.5rem"}
          className="h-fit w-fit text-neutral-700 hover:text-blue-500"
        />
      </button>
    </div>
  );
};

export default Sidebar;
