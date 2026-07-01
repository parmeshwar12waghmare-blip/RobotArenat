type Props = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
};

export default function NeonButton({ children, type = "primary" }: Props) {
  return (
    <button
      className={`relative overflow-hidden px-8 py-3 rounded-md font-bold transition-all duration-300 hover:scale-105 before:absolute before:inset-0 before:bg-white/30 before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 ${
        type === "primary"
          ? "bg-red-600 hover:shadow-[0_0_30px_red]"
          : "border border-white/50 text-white hover:bg-white hover:text-black hover:shadow-[0_0_30px_white]"
      }`}
    >
      {children}
    </button>
  );
}