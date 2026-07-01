import leaderboard from "../assets/leaderboard.png";
import { registerData } from "../data/registerData";

const RegisterAdvantage = () => {
  const players = [
    { rank: 1, name: "Kai", points: 9850 },
    { rank: 2, name: "Habib", points: 9200 },
    { rank: 3, name: "Nova", points: 8700 },
    { rank: 4, name: "Zane", points: 8100 },
    { rank: 5, name: "Aria", points: 7900 },
    { rank: 6, name: "Rex", points: 7600 },
    { rank: 7, name: "Luna", points: 7200 },
    { rank: 8, name: "Ayaan", points: 6900 },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-300";
    if (rank <= 3) return "text-blue-300";
    if (rank <= 6) return "text-red-300";
    return "text-pink-300";
  };

  return (
    <section className="relative w-full bg-[#171717] rounded-xl border border-white/5 overflow-hidden p-6 sm:p-10">

      <div className="max-w-6xl mx-auto w-full">

        <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between gap-10 flex-wrap">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-2/3">

            <h3 className="text-red-500 tracking-wider font-bold text-lg">
              WHY REGISTER ?
            </h3>

            <h1 className="text-white text-3xl font-bold tracking-widest mb-10">
              THE LEAGUE ADVANTAGE
            </h1>

            <div className="space-y-7">

              {registerData.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 items-start transition duration-300 hover:translate-x-3"
                >
                  <div className="text-3xl">{item.icon}</div>

                  <div>
                    <h2 className="text-white font-bold text-xl">
                      {item.title}
                    </h2>

                    <p className="text-gray-400 text-sm max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center w-full lg:w-auto">

            <div className="relative w-full max-w-[300px]">

              <img
                src={leaderboard}
                alt="leaderboard"
                className="w-full rounded-xl border border-white/10"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 flex flex-col px-4 py-5 gap-2">

                <h2 className="text-white text-sm font-bold tracking-widest text-center mb-2">
                  LEADERBOARD
                </h2>

                {/* TOP 1 */}
                <div className="flex flex-col items-center justify-center mb-3">
                  <div className="text-3xl">👑</div>
                  <div className="text-yellow-300 font-bold text-lg">
                    {players[0].name}
                  </div>
                  <div className="text-xs text-white/80 font-mono">
                    {players[0].points} XP
                  </div>
                </div>

                {/* OTHER PLAYERS */}
                <div className="space-y-2 overflow-hidden">

                  {players.slice(1).map((player) => (
                    <div
                      key={player.rank}
                      className="
                        flex justify-between items-center text-xs
                        px-3 py-2 rounded-md
                        border border-white/10
                        bg-white/5   /* 👈 30% transparent look */
                        backdrop-blur-md

                        transition-all duration-300
                        hover:scale-105
                        hover:bg-white/10
                        hover:border-white/30
                        cursor-pointer
                      "
                    >
                      <span className={`font-bold w-6 ${getRankColor(player.rank)}`}>
                        #{player.rank}
                      </span>

                      <span className="flex-1 text-center text-gray-200">
                        {player.name}
                      </span>

                      <span className="text-white/80 font-mono">
                        {player.points}
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RegisterAdvantage;