/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Club } from "../fets/type-helpers";

interface TeamsCardsProps {
  clubData: Club[] | undefined;
  setSelectedClub: (club: Club) => void;
}

export function TeamsCards({ clubData, setSelectedClub }: TeamsCardsProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Welcome to the Premier League Teams Infomation
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            The Premier League is the top level of the English football league
            system. Contested by 20 clubs, it operates on a system of promotion
            and relegation with the English Football League (EFL).
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {clubData?.map((club) => (
            <div
              key={club.Key}
              onClick={() => setSelectedClub(club)}
              className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer"
            >
              <div className="flex relative">
                <img
                  alt={club.FullName}
                  className="absolute inset-0 w-full h-full object-contain object-center"
                  src={
                    club.WikipediaLogoUrl
                      ? club.WikipediaLogoUrl
                      : club.Name === "Burnley"
                      ? `https://dummyimage.com/600x400/a6a6a6/fff.png&text=${club.Name}`
                      : `https://dummyimage.com/600x400/a6a6a6/fff.png&text=${club.Name}`
                  }
                />
                <div
                  className={`px-8 py-10 relative z-10 w-full border-4 ${
                    club.ClubColor1
                      ? ` border-${club.ClubColor1}-200`
                      : " border-gray-200"
                  } bg-white opacity-0 hover:opacity-100`}
                >
                  <h2
                    className={`
                      title-font font-medium text-lg text-gray-900 mb-3
                       bg-${
                         club.ClubColor1 ?? "black"
                       }-400 text-white rounded-full px-3 py-1}`}
                  >
                    {club.Name}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {club.FullName}
                  </h1>
                  <p className="leading-relaxed">
                    {club.VenueName} is the home stadium of {club.Name}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
