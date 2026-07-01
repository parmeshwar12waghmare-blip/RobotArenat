import InfoCard from "./InfoCard";

import icon1 from "../assets/iconb_1.png";
import icon2 from "../assets/iconb_2.png";
import icon3 from "../assets/iconb_3.png";
import icon4 from "../assets/iconb_4.png";

const categories = [
  {
    icon: icon1,
    title: "MINI MAKERS",
    desc: "Where Creativity Meets Logic."
  },
  {
    icon: icon2,
    title: "JUNIOR INNOVATORS",
    desc: "Engineering & Strategy Fundamentals."
  },
  {
    icon: icon3,
    title: "YOUNG ENGINEERS",
    desc: "Advanced Wireless & Autonomous Control."
  },
  {
    icon: icon4,
    title: "ROBO MINDS",
    desc: "Elite Professional Sports & Robotics."
  }
];

export default function CategorySection() {
  return (
   <div className="mt-14 w-full max-w-6xl mx-auto px-5">
  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-widest mb-8 break-words">
    Categories
  </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {categories.map(c => (
          <div key={c.title}>
            <InfoCard
              icon={c.icon}
              title={c.title}
              desc={c.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
}