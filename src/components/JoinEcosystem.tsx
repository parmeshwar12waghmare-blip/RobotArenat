import { joinRoles, sponsors } from "../data/ecosystemData";

const JoinEcosystem = () => {
  return (
    <section className="bg-black text-white px-8 py-14">

      <div className="max-w-6xl mx-auto w-full">

      <h1 className="text-3xl font-bold tracking-widest mb-10">
        JOIN THE ECOSYSTEM
      </h1>


      {/* JOIN CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

        {joinRoles.map((role, index) => (
          <div
            key={index}
            className="min-w-0 border border-white/20 rounded-lg p-5"
          >

            <h2 className="font-bold mb-5">
              {role.title}
            </h2>

            {role.fields.map(field => (
              <input
                key={field}
                placeholder={field}
                className="w-full mb-2 bg-[#1d1d1d] border border-white/20 rounded px-3 py-2 text-sm outline-none transition duration-300 hover:border-white hover:bg-white/5 focus:border-red-500 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(255,255,255,0.12)]"
              />
            ))}

            <button className="w-full mt-2 bg-red-500 py-2 rounded font-bold transition duration-300 hover:bg-white hover:text-black hover:scale-105">
              SIGN UP
            </button>

          </div>
        ))}

      </div>


      {/* SPONSORS */}

      <h2 className="mt-12 mb-6 font-bold tracking-widest">
        SPONSORS
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">

        {sponsors.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-center overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex h-32 w-full items-center justify-center p-4">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-32 w-full max-w-[250px] object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        ))}

      </div>

      </div>

    </section>
  );
};

export default JoinEcosystem;