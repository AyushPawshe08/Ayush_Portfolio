import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const EMAIL = "ayushpawshedev@gmail.com";

export const socials = [
  { label: "Email", href: `mailto:${EMAIL}`, icon: FaEnvelope },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayush-pawshe-aa3a74251/", icon: FaLinkedinIn },
  { label: "X", href: "https://x.com/Ayushp8888", icon: FaXTwitter }, // Native X icon from react-icons
  { label: "GitHub", href: "https://github.com/AyushPawshe08", icon: FaGithub },
];
