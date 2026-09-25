import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const EMAIL = "ayushpawshedev@gmail.com";

export const socials = [
  { label: "Email", href: `mailto:${EMAIL}`, icon: FaEnvelope },
  { label: "LinkedIn", href: "https://linkedin.com/in/ayushpawshe", icon: FaLinkedinIn },
  { label: "X", href: "https://x.com/ayushpawshe", icon: FaXTwitter }, // Native X icon from react-icons
  { label: "GitHub", href: "https://github.com/ayushpawshe", icon: FaGithub },
];
