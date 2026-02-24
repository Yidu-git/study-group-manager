import { useState } from "react";

const Polls = () => {
  // Deadline
  // Recent?
  //
  //
  //
  // Cleanup UI
  const [polls, setPolls] = useState<
    {
      id: number;
      user: string;
      poll: string;
      anonymity: string;
      appeal: string;
      votes: any;
      options: string[];
    }[]
  >([
    {
      id: 0,
      user: "Nate",
      poll: "Programing an app",
      anonymity: "Anonymous",
      appeal:
        "This took 1hr and did it without ai so it should cound as 2 points",
      votes: {
        codeMaster21: "5",
        devQueen: "4",
        pixelNinja: "3",
        stackSamurai: "5",
        bugHunter99: "4",
        reactRookie: "2",
        logicLiam: "5",
        asyncAva: "4",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 1,
      user: "Liam",
      poll: "Designing the UI from scratch",
      anonymity: "Public",
      appeal:
        "Created all components manually and ensured responsive layout across devices",
      votes: {
        designDiva: "5",
        cssWizard: "4",
        frontendFred: "5",
        uiMaster: "3",
        layoutLegend: "4",
        gridGuru: "5",
        mobileMia: "4",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 2,
      user: "Sophia",
      poll: "Building a REST API backend",
      anonymity: "Anonymous",
      appeal:
        "Implemented authentication and database integration without templates",
      votes: {
        apiArchitect: "5",
        backendBen: "4",
        jsonJake: "5",
        authAce: "4",
        dbDan: "3",
        serverSage: "5",
        nodeNora: "4",
        dataDuke: "5",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 3,
      user: "Ethan",
      poll: "Creating a portfolio website",
      anonymity: "Public",
      appeal:
        "Designed and deployed using modern best practices and SEO optimization",
      votes: {
        seoSarah: "5",
        deployDerek: "4",
        webWizard: "5",
        cleanCoder: "4",
        brandBuilder: "5",
        hostHero: "3",
        domainDaisy: "4",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 4,
      user: "Ava",
      poll: "Optimizing app performance",
      anonymity: "Anonymous",
      appeal:
        "Reduced load time by 40% through lazy loading and memoization techniques",
      votes: {
        speedsterSam: "5",
        perfPro: "4",
        lazyLoader: "5",
        memoMax: "4",
        cacheKing: "5",
        bundleBuster: "4",
        latencyLeo: "3",
        quickQuinn: "5",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 5,
      user: "Noah",
      poll: "Implementing dark mode",
      anonymity: "Public",
      appeal: "Added theme switching with persistent user preference storage",
      votes: {
        themeTheo: "5",
        nightNinja: "4",
        toggleTara: "5",
        styleSavvy: "4",
        modeMaster: "5",
        contrastChris: "3",
        uiUma: "4",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 6,
      user: "Mia",
      poll: "Building a real-time chat feature",
      anonymity: "Anonymous",
      appeal: "Integrated WebSockets and handled live state synchronization",
      votes: {
        socketSam: "5",
        realtimeRex: "4",
        chatChamp: "5",
        syncSophie: "4",
        streamSteve: "5",
        eventEva: "4",
        liveLuca: "5",
        asyncAmy: "3",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 7,
      user: "James",
      poll: "Creating custom animations",
      anonymity: "Public",
      appeal: "Designed smooth micro-interactions to improve user experience",
      votes: {
        motionMason: "5",
        animateAlex: "4",
        transitionTina: "5",
        frameFinn: "4",
        easingElla: "5",
        bounceBen: "3",
        hoverHannah: "4",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 8,
      user: "Isabella",
      poll: "Database schema design",
      anonymity: "Anonymous",
      appeal: "Structured relational data efficiently with scalability in mind",
      votes: {
        schemaSage: "5",
        tableTroy: "4",
        relationRita: "5",
        queryQuincy: "4",
        indexIvy: "5",
        migrateMax: "4",
        normalizeNed: "3",
        sqlSienna: "5",
      },
      options: ["5", "4", "3", "2", "1"],
    },
    {
      id: 9,
      user: "Lucas",
      poll: "Deploying the application",
      anonymity: "Public",
      appeal: "Configured CI/CD pipeline and deployed with zero downtime",
      votes: {
        pipelinePete: "5",
        deployDiana: "4",
        cloudChris: "5",
        dockerDan: "4",
        infraIris: "5",
        buildBella: "4",
        uptimeUma: "5",
        releaseRyan: "3",
      },
      options: ["5", "4", "3", "2", "1"],
    },
  ]);

  const CLog = (val: any) => {
    console.log(val);
    return val;
  };
  CLog("This app is in development");
  return (
    <div className="flex h-full w-full flex-col bg-gray-100">
      <div className="flex h-fit w-full flex-row items-center justify-between bg-white px-5 py-3 text-black shadow-[00px_10px_10px_0_#00000012]">
        <h1 className="text-3xl">Polls</h1>
      </div>
      <div className="grid h-full w-full flex-col gap-4 overflow-x-auto p-5 md:grid-cols-2">
        {polls.map((poll, pollIndex) => {
          let pollOptions: any = {};
          for (let vote of Object.keys(poll.votes)) {
            if (Object.keys(pollOptions).includes(poll.votes[vote])) {
              pollOptions[poll.votes[vote]] += 1;
            } else {
              pollOptions[poll.votes[vote]] = 1;
              //   console.log(pollOptions);
            }
          }
          const biggestOption = Object.keys(pollOptions).sort(
            (a, b) => pollOptions[b] - pollOptions[a],
          )[0];
          //   console.log("/n");
          //   console.log(biggestOption);
          //   console.log(pollOptions);
          return (
            <div
              className="flex h-fit flex-col rounded-lg bg-white px-5 py-3 shadow-[00px_10px_10px_0_#00000012]"
              key={"polls-poll-" + poll.poll + pollIndex}
            >
              <h2 className="text-2xl">{poll.poll}</h2>
              <h2 className="text-lg text-gray-500">Appeal : {poll.appeal}</h2>
              <div className="flex w-fit flex-row items-center gap-2 py-2">
                <h2 className="text-lg text-gray-500">
                  Published by {poll.user}
                </h2>
                <h2 className="text-lg text-gray-500">-</h2>
                <h2 className="text-lg text-gray-500">{poll.anonymity} Poll</h2>
              </div>
              <div className="flex w-full flex-col gap-1 p-1">
                {poll.options.map((option) => (
                  <div
                    className="flex flex-row items-center justify-between gap-3"
                    key={
                      "polls-poll-" + poll.poll + "-opt-" + option + pollIndex
                    }
                  >
                    <label
                      htmlFor={`check-${option}${pollIndex}`}
                      //   className="h-5 w-6 cursor-pointer rounded-full border bg-white"
                    >
                      <input
                        type="radio"
                        name={`radio-poll-${pollIndex}`}
                        id={`check-${option}${pollIndex}`}
                        onClick={() => {
                          setPolls((prev) =>
                            prev.map((poll) =>
                              poll.id === pollIndex
                                ? {
                                    ...poll,
                                    votes: { ...poll.votes, user133: option },
                                  }
                                : poll,
                            ),
                          );
                          console.log(polls);
                        }}
                        value={option === "1" ? "checked" : "unchecked"}
                        className="peer h-5 w-5 checked:bg-blue-500"
                      />
                    </label>

                    <h3 className="text-lg">{option}</h3>
                    <div
                      className="h-4 w-full rounded-full bg-neutral-200"
                      key={`polls-poll-${poll.poll + pollIndex}-bar-${option}`}
                    >
                      <div
                        className="h-full rounded-full bg-blue-400 transition-[width] duration-75"
                        style={{
                          width: `${(Object.values(polls[pollIndex].votes).filter((vote: any) => vote === option).length / pollOptions[biggestOption]) * 100}%`,
                          // ( /
                          //   Object.values(pollOptions).sort(
                          //     (a, b) => b - a,
                          //   )[0]) *
                          //   100 +
                          // "%",
                        }}
                      />
                    </div>
                    <div className="w-10">
                      {`${Math.round(
                        (Object.values(polls[pollIndex].votes).filter(
                          (vote: any) => vote === option,
                        ).length /
                          Object.values(polls[pollIndex].votes).length) *
                          100,
                      )}%`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Polls;
