import { upcomingEvents } from "../data/events";
import NeonButton from "./NeonButton";

export default function UpcomingEvents() {
  return (
    <div className="h-[420px] border border-white/20 rounded-xl bg-[#171717] p-5">

      <h2 className="text-2xl mb-5">
        Upcoming
      </h2>

      {upcomingEvents.map(e => (
        <div
          key={e.city}
          className="border p-4 rounded mb-4"
        >

          <h3 className="text-xl font-bold">
            Event in {e.city}
          </h3>

          <p>
            {e.date} • {e.location}
          </p>

          <NeonButton>
            REGISTER
          </NeonButton>

        </div>
      ))}

    </div>
  );
}