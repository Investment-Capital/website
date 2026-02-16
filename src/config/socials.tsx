import { Github, Mail, Twitter } from "lucide-react";
import Social from "../types/social";

const socials: Social[] = [
  {
    icon: Github,
    link: import.meta.env.VITE_GITHUB,
  },
  {
    icon: Mail,
    link: `mailto:${import.meta.env.VITE_EMAIL}`,
  },
  {
    icon: Twitter,
    link: `https://x.com/${import.meta.env.VITE_TWITTER}`,
  },
];

export default socials;
