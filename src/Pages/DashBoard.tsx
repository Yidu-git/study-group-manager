import { useEffect, useState } from "react";

const Dashboard = () => {
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

  useEffect(() => {
    setPoints((prev) =>
      Object.fromEntries(Object.entries(prev).sort((a, b) => b[1] - a[1])),
    );
    // console.log(points["key" as keyof typeof points]);
  }, []);
  return (
    <div className="flex h-full w-full flex-col bg-gray-100">
      <div className="flex h-fit w-full flex-row items-center justify-between bg-white px-5 py-3 text-black shadow-[00px_10px_10px_0_#00000012]">
        <h1 className="text-3xl">Dashboard</h1>
      </div>
      <div className="flex h-full w-full flex-col p-2">
        <h1>This page is currently being used to store leaderboard points</h1>
        <div className="flex flex-col gap-1.5 rounded-3xl bg-neutral-100 p-4 shadow-[00px_10px_10px_0_#00000012]">
          {Object.keys(points).map((person: string, i) => (
            <div
              className={
                "flex w-full flex-row items-center gap-2 rounded-full bg-white px-3 py-3 text-xl shadow-[00px_4px_10px_0_#00000012]"
              }
            >
              <h1
                className={`rounded-full px-3 font-semibold ${i + 1 < 4 ? placeStyles[i + 1] : "bg-gray-100"}`}
              >
                #{i + 1} {person}
              </h1>
              <h2>
                <span
                  className={
                    "rounded-full px-3 font-bold! " +
                    (i + 1 < 4 ? placeStyles[i + 1] : "border text-blue-500")
                  }
                >
                  {points[person]}
                </span>{" "}
                points
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
