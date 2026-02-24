import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Pages
import Dashboard from "../Pages/DashBoard";
import Polls from "../Pages/Polls";
import Projects from "../Pages/Projects";
import ChatRooms from "../Pages/ChatRooms";
import Notifications from "../Pages/Notifications";
import NotFound from "../Pages/NotFound";
import TasksPage from "../Pages/Tasks";

import Sidebar from "../Components/Sidebar";

const DesktopLayout = () => {
  //   console.log("D");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Routes>
      <Route
        element={
          <div className="flex h-screen min-h-screen w-screen min-w-screen flex-row overflow-auto">
            <Sidebar openState={[sidebarOpen, setSidebarOpen]} />
            <div
              className={`flex w-screen flex-col bg-white ${sidebarOpen ? "ml-60" : "ml-22"}`}
            >
              <Outlet />
            </div>
          </div>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/polls" element={<Polls />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chatrooms" element={<ChatRooms />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default DesktopLayout;
