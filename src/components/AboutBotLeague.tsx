import InfoCard from "./InfoCard";
import pattern from "../assets/about-pattern.png";
import CategorySection from "./CategorySection";

const about = [
  {
    number: "1.",
    title: "STRUCTURED EVENTS",
    desc: "From one-off events to a year-round competitive season."
  },
  {
    number: "2.",
    title: "DIGITAL IDENTITY",
    desc: "Your professional robotics legacy, tracked and verified."
  },
  {
    number: "3.",
    title: "NATIONAL RANKING",
    desc: "Benchmark your skills against the best engineers in India."
  },
  {
    number: "4.",
    title: "CAREER PATHWAY",
    desc: "Turning arena victories into real-world industry opportunities."
  }
];

export default function AboutBotLeague() {
  return (
    <section className="bg-[#171717] text-white px-10 py-14">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <div>
          <h1 className="text-4xl font-black uppercase tracking-widest mb-10">
            WHAT IS BOTLEAGUE?
          </h1>

          <div className="grid grid-cols-2 gap-8">
            {about.map(item => (
              <InfoCard
                key={item.number}
                number={item.number}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={pattern}
            className="w-[350px] opacity-70 hover:scale-110 transition duration-500"
          />
        </div>

      </div>

      <CategorySection />
    </section>
  );
}