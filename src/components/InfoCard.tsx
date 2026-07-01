type Props = {
  children?: React.ReactNode;
  title: string;
  desc: string;
  icon?: string;
  number?: string;
  small?: boolean;
};

export default function InfoCard({ title, desc, icon, number, small }: Props) {
  return (
    
    <div className={`group border border-white/20 rounded-xl bg-[#202020] transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] cursor-pointer ${small ? "p-3 min-h-[230px]" : "p-5"}`}>

      {number && (
        <h2 className="text-red-500 text-xl font-bold">
          {number}
        </h2>
      )}

      {icon && (
        <img
          src={icon}
          className={`${small ? "w-10 h-10" : "w-14 h-14"} mb-4 group-hover:scale-110 transition max-w-full h-auto`}
        />
      )}

      <h3 className={`font-bold uppercase ${small ? "text-sm" : "text-lg"} group-hover:text-red-400 transition`}>
        {title}
      </h3>

      <p className={`text-gray-400 mt-2 ${small ? "text-xs" : "text-sm"}`}>
        "{desc}"
      </p>

      {small && (
        <button className="mt-5 text-red-500 text-xs font-bold hover:text-white transition">
          LEARN MORE →
        </button>
      )}

    </div>
  );
}