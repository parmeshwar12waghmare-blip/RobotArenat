type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function GlowCard({ children, className = "" }: Props) {
  return (
    <div className={`bg-[#202020] border border-white/20 rounded-xl transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] cursor-pointer ${className}`}>
      {children}
    </div>
  );
}