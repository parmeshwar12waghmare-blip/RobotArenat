import { liveMatches } from "../data/events";
import NeonButton from "./NeonButton";

export default function LiveBracket() {
  return (
    <div className="h-[420px] border border-white/20 rounded-xl bg-[#171717] p-5">

      <h2 className="text-2xl text-red-500 mb-5">
        Live Now
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {liveMatches.participants.map(p => (
          <div
            key={p}
            className="bg-gray-600 rounded p-2 hover:scale-110 transition"
          >
            {p}
          </div>
        ))}

      </div>

      <div className="mt-8 text-center">
        <NeonButton>
          🏆 {liveMatches.winner}
        </NeonButton>
      </div>

    </div>
  );
}