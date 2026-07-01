import { pastResults } from "../data/events";

export default function PastResults() {
  return (
    <div className="h-[420px] border border-white/20 rounded-xl bg-[#171717] p-5">

      <h2 className="text-2xl mb-5">
        Past Results
      </h2>

      {pastResults[0].map(r => (
        <div
          key={r.event}
          className="border p-5 rounded mb-4"
        >

          <h3 className="font-bold text-xl">
            {r.event}
          </h3>

          <p>
            Winner : {r.winner}
          </p>

        </div>
      ))}

    </div>
  );
}