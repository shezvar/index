import { Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {

  return (
    <footer className="w-full py-8 flex flex-col items-center gap-2 mt-8 ">
    <div className="flex gap-4 mb-2">
      <a href="mailto:hello@segunoroyo.com" className="hover:text-blue-600">
        <Mail size={20} />
      </a>
      <a
        href="https://linkedin.com/in/segunoroyo"
        className="hover:text-blue-700"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="https://twitter.com/segunoroyo"
        className="hover:text-blue-400"
      >
        <Twitter size={20} />
      </a>
    </div>
    <div className="text-stone-500 text-sm">
      &copy; {new Date().getFullYear()} Segun Oroyo
    </div>
  </footer>
  );
}