import facebook from "../assets/SocialMediaIcon/facebook.png";
import instagram from "../assets/SocialMediaIcon/instagram.png";
import whats from "../assets/SocialMediaIcon/what's.png";
import xIcon from "../assets/SocialMediaIcon/x.png";

export interface SocialIcon {
  label: string;
  src: string;
  href: string;
}

export const socialIcons: SocialIcon[] = [
  { label: "Facebook", src: facebook, href: "https://www.facebook.com" },
  { label: "Instagram", src: instagram, href: "https://www.instagram.com" },
  { label: "WhatsApp", src: whats, href: "https://www.whatsapp.com" },
  { label: "X", src: xIcon, href: "https://www.x.com" },
];
