import { useEffect, useState } from "react";
import { liveMatches, upcomingEvents, pastResults } from "../data/events";

export default function Events() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(prev => prev === pastResults.length - 1 ? 0 : prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-[#111] text-white px-10 py-14">

      <h1 className="text-5xl font-black uppercase tracking-widest mb-10">
        Competitions & Events
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <div className="h-[420px] border border-white/20 rounded-xl bg-[#171717] p-5 overflow-hidden">

          <h2 className="text-2xl text-red-500 uppercase mb-5">
            Live Now
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {liveMatches.participants.map(p => (
              <div key={p} className="border border-white/20 rounded p-2 text-sm bg-[#222]">
                {p}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-10 mt-8">

            <div className="space-y-3">
              <div className="bg-gray-700 px-5 py-2 rounded">Match 1</div>
              <div className="bg-gray-700 px-5 py-2 rounded">Match 2</div>
              <div className="bg-gray-700 px-5 py-2 rounded">Match 3</div>
              <div className="bg-gray-700 px-5 py-2 rounded">Match 4</div>
            </div>

            <div className="flex items-center">
              <div className="bg-gray-600 px-6 py-3 rounded">
                Final
              </div>
            </div>

          </div>

          <div className="mt-8 mx-auto w-fit px-8 py-3 rounded-lg bg-red-600 font-bold shadow-[0_0_25px_red] animate-pulse">
            🏆 {liveMatches.winner}
          </div>

        </div>


        <div className="h-[420px] border border-white/20 rounded-xl bg-[#171717] p-5">

          <h2 className="text-2xl uppercase mb-5">
            Upcoming
          </h2>

          <div className="space-y-4">
            {upcomingEvents.map(e => (
              <div key={e.city} className="border border-white/20 rounded-lg p-4">

                <h3 className="text-xl font-bold">
                  Event in {e.city}
                </h3>

                <p className="text-gray-400">
                  {e.date} • {e.location}
                </p>

                <button className="mt-4 w-full py-2 bg-red-500 rounded font-bold hover:shadow-[0_0_25px_red] hover:scale-105 transition">
                  REGISTER
                </button>

              </div>
            ))}
          </div>

        </div>


        <div className="h-[420px] border border-white/20 rounded-xl bg-[#171717] p-5 overflow-hidden">

          <h2 className="text-2xl uppercase mb-5">
            Past Results
          </h2>

          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${slide * 100}%)` }}>

            {pastResults.map((batch, i) => (
              <div key={i} className="min-w-full space-y-4">

                {batch.map(r => (
                  <div key={r.event} className="border border-white/20 rounded-lg p-5">

                    <h3 className="text-xl font-bold">
                      {r.event}
                    </h3>

                    <p className="text-gray-400">
                      Winner : {r.winner}
                    </p>

                    <span className="text-red-400">
                      {r.year}
                    </span>

                  </div>
                ))}

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}