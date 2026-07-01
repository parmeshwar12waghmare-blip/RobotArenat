import { quickLinks } from "../data/footerData";
import { socialIcons } from "../data/footerSocialData";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/20 px-8 py-8">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* QUICK LINKS */}

        <div>
          <h3 className="font-bold tracking-widest mb-5">
            QUICK LINKS
          </h3>

          <div className="grid grid-cols-2 gap-x-16 gap-y-2">
            {quickLinks.map(link => (
              <p
                key={link}
                className="text-gray-400 text-sm cursor-pointer transition-all duration-300 hover:text-white hover:translate-x-2"
              >
                {link}
              </p>
            ))}
          </div>
        </div>


        {/* SOCIAL MEDIA */}

        <div>
          <h3 className="font-bold tracking-widest mb-5">
            SOCIAL MEDIA
          </h3>

          <div className="flex flex-wrap gap-4">
            {socialIcons.map(icon => (
              <a
                key={icon.label}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center bg-[#111] cursor-pointer transition hover:border-white hover:shadow-[0_0_15px_white]"
              >
                <img
                  src={icon.src}
                  alt={icon.label}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;