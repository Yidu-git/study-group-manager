import { useEffect, useRef, useState } from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import FirstPlaceAnim from "../assets/Ranking_icons/First_place_anim.lottie";

// Placement icons
// import FirstPlace from "../assets/Ranking_icons/First.svg?react";
import SecondPlace from "../assets/Ranking_icons/Second.svg?react";
import ThirdPlace from "../assets/Ranking_icons/Third.svg?react";

const LeaderBoards = () => {
  const lottieRef = useRef<any>(null);

  const [points, setPoints] = useState<Record<string, number>>({
    Yididiya: 12,
    Joed: 12,
    Eyo: 1,
    Noah: 7,
    Steve: 8,
  });

  const placeStyles: Record<number, string> = {
    1: "bg-[#fbbf24]! text-white",
    2: "bg-[#52525b]! text-white",
    3: "bg-[#B87333]! text-white",
  };

  const placeShadows: Record<number, string> = {
    1: "mb-2 py-1! border-[#fbbf24] shadow-[0_10px_5px_0px_#fbbf2435]",
    2: "mb-1 border-[#52525b] shadow-[0_10px_5px_0px_#52525b30]",
    3: "border-[#B87333] shadow-[0_10px_5px_0px_#B8733320]",
  };

  const placeIcons: Record<number, any> = {
    // 1: <FirstPlace className="h-10 w-10" />,
    1: (
      <DotLottieReact
        dotLottieRefCallback={(instance) => {
          lottieRef.current = instance;
        }}
        onClick={() => lottieRef.current?.play()}
        src={FirstPlaceAnim}
        autoplay
        loop={false}
        className="h-15 w-15"
        // style={{ width: 10, height: 10 }}
      />
    ),
    2: <SecondPlace className="h-10 w-10" />,
    3: <ThirdPlace className="h-10 w-10" />,
  };

  useEffect(() => {
    setPoints((prev) =>
      Object.fromEntries(Object.entries(prev).sort((a, b) => b[1] - a[1])),
    );
    // console.log(points["key" as keyof typeof points]);
  }, []);
  return (
    <div className="flex h-full w-full flex-col gap-1 bg-white">
      {/* <h1 className="text-xl">LeaderBoards</h1> */}
      <div className="sticky flex h-fit w-full flex-row items-center justify-between bg-white px-5 py-3 text-black shadow-[00px_10px_10px_0_#00000012]">
        <h1 className="text-3xl">Leaderboard</h1>
      </div>
      <div className="flex h-full w-full flex-col gap-2 overflow-x-auto bg-white px-4 py-4">
        {Object.keys(points).map((person, i) => (
          <div
            className={
              "flex flex-row items-center justify-between gap-2 rounded-full px-4 py-2 text-2xl " +
              (i + 1 < 4 ? "border-2 " + placeShadows[i + 1] : "shadow-md")
            }
          >
            <div className="flex flex-row items-center gap-1">
              {i + 1 < 4 ? (
                placeIcons[i + 1]
              ) : (
                <h1 className="w-10 text-center text-gray-900">{i + 1}</h1>
              )}
              <h1
                className={
                  "rounded-full px-6 py-1 font-semibold " +
                  (i + 1 < 4 ? placeStyles[i + 1] : "bg-gray-100")
                }
              >
                {person}
              </h1>
            </div>
            <h1
              className={
                "rounded-full px-6 py-1 font-semibold " +
                (i + 1 < 4 ? placeStyles[i + 1] : "border border-neutral-400")
              }
            >
              {points[person]}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoards;
