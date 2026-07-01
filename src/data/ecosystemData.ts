import iitBombay from "../assets/sponser/IIT BOMBAY.png";
import indianBit from "../assets/sponser/INDIAN BIT.png";
import nitDelhi from "../assets/sponser/NIT DELHI.png";
import nitSilchar from "../assets/sponser/NIT SILCHAR.png";
import roboCompany from "../assets/sponser/ROBO COMPANY.png";
import roboCompany2 from "../assets/sponser/ROBO COMPANY2.png";

export interface JoinRole {
  title: string;
  fields: string[];
}

export interface Sponsor {
  name: string;
  image: string;
}

export const joinRoles: JoinRole[] = [
  {
    title: "PARTICIPANT",
    fields: ["Name", "Email", "School/College", "Phone Number"],
  },
  {
    title: "MENTOR",
    fields: ["Name", "Email", "Expertise", "LinkedIn Profile"],
  },
  {
    title: "PARTNER",
    fields: ["Organization", "Contact Email", "Industry", "Message"],
  },
];

export const sponsors: Sponsor[] = [
  { name: "IIT BOMBAY", image: iitBombay },
  { name: "INDIAN BIT", image: indianBit },
  { name: "NIT DELHI", image: nitDelhi },
  { name: "NIT SILCHAR", image: nitSilchar },
  { name: "ROBO COMPANY", image: roboCompany },
  { name: "ROBO COMPANY 2", image: roboCompany2 },
];
