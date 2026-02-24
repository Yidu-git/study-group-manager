import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaSquarePollVertical } from "react-icons/fa6";
import { RiHomeFill } from "react-icons/ri";
import { MdFolder, MdTask } from "react-icons/md";
import { BiChat } from "react-icons/bi";

const Navbar = () => {
  const iconSize = "full";
  const iconStyle = "";
  const [currentPage, setCurrentPage] = useState("");

  const links = [
    {
      link: "Home",
      path: "/",
      icon: <RiHomeFill size={iconSize} className={iconStyle} />,
    },
    {
      link: "Leaderboard",
      path: "/leaderboards",
      icon: <FaSquarePollVertical size={iconSize} className={iconStyle} />,
    },
    {
      link: "Chat",
      path: "/chatrooms",
      icon: <BiChat size={iconSize} className={iconStyle} />,
    },
    {
      link: "Tasks",
      path: "/tasks",
      icon: <MdTask size={iconSize} className={iconStyle} />,
    },
    {
      link: "Projects",
      path: "/projects",
      icon: <MdFolder size={iconSize} className={iconStyle} />,
    },
  ];

  useEffect(() => {
    // console.log(currentPage);
    setCurrentPage(window.location.pathname.split("/")[1]);
  }, []);

  return (
    <div className="relative bottom-0 left-0 z-100 flex h-25 min-h-fit w-screen flex-row items-center justify-between bg-neutral-50 px-5 py-5 shadow-[00px_-10px_10px_0_#00000012]">
      {links.map((link) => (
        <Link
          to={link.path}
          onClick={() => setCurrentPage(link.path.split("/")[1])}
        >
          <div
            className={`flex h-fit w-12 flex-col justify-center rounded-md bg-transparent p-0 ${link.path.split("/")[1] === currentPage ? "text-blue-400" : "text-neutral-500 hover:border hover:text-black"}`}
          >
            {link.icon}
            {/* <h1 className="font-b text-lg">{link.link}</h1> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
