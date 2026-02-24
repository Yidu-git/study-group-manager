import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import LeaderBoards from "../Pages/LeaderBoards";
import TasksPage from "../Pages/Tasks";
import Projects from "../Pages/Projects";
import ChatRooms from "../Pages/ChatRooms";

const MobileLayout = () => {
  //   console.log("M");
  return (
    <Routes>
      <Route
        element={
          <div className="flex h-screen min-h-full w-screen min-w-screen flex-col overflow-auto">
            <div
              className={`mb-0 flex h-full w-screen flex-col overflow-x-scroll`}
            >
              <Outlet />
            </div>
            <Navbar />
          </div>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/leaderboards" element={<LeaderBoards />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chatrooms" element={<ChatRooms />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MobileLayout;
