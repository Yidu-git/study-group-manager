// import { useEffect, useRef, useState } from "react";

// Placement icons
// import FirstPlace from "../assets/Ranking_icons/First.svg?react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import FirstPlaceAnim from "../assets/Ranking_icons/First_place_animation.lottie";
// import SecondPlace from "../assets/Ranking_icons/Second.svg?react";
// import ThirdPlace from "../assets/Ranking_icons/Third.svg?react";

const Dashboard = () => {
  return (
    <div className="flex h-full w-full flex-col bg-gray-100">
      <div className="flex h-fit w-full flex-row items-center justify-between bg-white px-5 py-3 text-black shadow-[00px_10px_10px_0_#00000012]">
        <h1 className="text-3xl">Dashboard</h1>
      </div>
      <div className="flex h-full w-full flex-col p-2">
        <h1>This page is currently being used to store leaderboard points</h1>
      </div>
    </div>
  );
};

export default Dashboard;
