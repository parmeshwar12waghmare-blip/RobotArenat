import icon1 from "../assets/icon_1.png";
import icon2 from "../assets/icon_2.png";
import icon3 from "../assets/icon_3.png";
import icon4 from "../assets/icon_4.png";

const steps = [
  {icon:icon1,step:"STEP 1",title:"BUILD YOUR",sub:"TEAM"},
  {icon:icon2,step:"STEP 2",title:"COMPETE ACROSS",sub:"INDIA"},
  {icon:icon3,step:"STEP 3",title:"EARN NATIONAL",sub:"RANKING & VALUE"},
  {icon:icon4,step:"STEP 4",title:"JOIN THE",sub:"LEAGUE"}
];

export default function UserJourney(){

return(
<section className="bg-black text-white py-14 px-5 border-t border-white/10 overflow-hidden">

<div className="text-center mb-14">
<p className="text-red-500 font-bold tracking-[0.3em] text-sm">USER JOURNEY</p>

<h1 className="text-3xl sm:text-4xl font-black uppercase tracking-widest mt-3">
YOUR PATH TO THE LEAGUE
</h1>

<p className="text-gray-500 mt-3 text-sm sm:text-base">
Build • Compete • Rank • Win
</p>
</div>

<div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="hidden lg:block absolute top-14 left-16 right-16 h-[2px] bg-blue-600/60">
<div className="h-full bg-cyan-400 animate-pulse"/>
</div>

{steps.map((item,index)=>(

<div key={index} className="relative z-10 text-center group transition duration-300 hover:-translate-y-3">

<div className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#151515] border-2 border-blue-500 flex items-center justify-center transition duration-300 group-hover:scale-110 group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_cyan]">

<img
src={item.icon}
className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition duration-300 group-hover:scale-110"
/>

</div>

<div className="h-8 w-[2px] bg-gray-600 mx-auto group-hover:bg-cyan-400 transition"/>

<h3 className="text-red-500 font-bold text-sm sm:text-base group-hover:text-white transition">
{item.step}
</h3>

<p className="mt-2 font-bold text-sm sm:text-base leading-relaxed">
{item.title}
<br/>
{item.sub}
</p>

</div>

))}

</div>

</section>
)

}