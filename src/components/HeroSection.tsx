import robotImage from "../assets/Robot Battle.png";
import NeonButton from "./NeonButton";

export default function HeroSection() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

      <img
        src={robotImage}
        className="absolute inset-0 w-full h-full object-cover object-[70%_center] brightness-90"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
       <div className="max-w-xl"> 

        <h1 className="text-4xl md:text-6xl font-black uppercase">
          India's Ultimate
          <br />
          Robotics Arena
        </h1>

        <p className="mt-5 text-xl text-gray-300">
          Build. Compete. Rank.
          <br />
          The National Ecosystem for Robotics Arena
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-7">
          <NeonButton>
            CREATE ACCOUNT
          </NeonButton>

          <NeonButton type="secondary">
            EXPLORE EVENTS
          </NeonButton>
        </div>

      </div></div>

    </section>
  );
}