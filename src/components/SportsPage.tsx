import background from "../assets/SportsPBackground.png";
import { sports } from "../data/sports";
import GlowCard from "./GlowCard";

export default function SportsPage() {
  return (
    <section
      className="relative bg-black text-white px-6 py-12 sm:px-10 sm:py-16"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-black tracking-widest uppercase mb-10">
          SPORTS
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {sports.map(item => (
            <GlowCard key={item.title}>

              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden rounded-t-xl bg-[#111] flex items-center justify-center">

                <img
                  src={item.image}
                  alt={item.title}
                  onError={e => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-5">

                <h2 className="font-bold text-lg uppercase">
                  {item.title}
                </h2>

                <button className="mt-4 text-red-500 font-bold hover:text-white transition">
                  LEARN MORE →
                </button>

              </div>

            </GlowCard>
          ))}

        </div>

      </div>

    </section>
  );
}