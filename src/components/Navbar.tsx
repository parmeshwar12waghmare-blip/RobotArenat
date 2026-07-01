import NeonButton from "./NeonButton";

export default function Navbar(){
return(
<nav className="h-[80px] flex items-center justify-between px-8 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/10 relative z-20">

<div className="group text-xl sm:text-2xl md:text-3xl font-black tracking-widest text-blue-400 transition duration-200 hover:scale-110 cursor-pointer">
  BOT<span className="text-red-500 transition duration-200">LEAGUE</span>
</div>
<div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
  {["Events","Programs","Community","Ranks"].map((item)=>
    <a key={item} className="relative cursor-pointer transition duration-300 hover:text-white hover:drop-shadow-[0_0_10px_white] after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
      {item}
    </a>
  )}
</div>

<div className="flex gap-3">
<NeonButton type="secondary">
EXPLORE EVENTS
</NeonButton>

<NeonButton>
REGISTER
</NeonButton>
</div>

</nav>
)
}
