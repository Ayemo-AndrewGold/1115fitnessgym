"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [["Home", "/"], ["About Us", "/about"], ["Programs", "/programs"], ["Membership", "/membership"], ["Events", "/events"], ["Gallery", "/gallery"], ["Contact", "/contact"]];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleLinkClick = () => {
    setOpen(false);
  };
  
  const isActive = (href: string) => mounted && pathname === href;
  
  return <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0c0e12]/95 backdrop-blur">
    <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 lg:px-8">
      <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
        <img src="/gym/logo_red_bg.png" alt="Eleven Fifteen Fitness Gym crest" className="h-10 w-10 rounded object-cover" />
        <span className="font-black uppercase leading-[.95] tracking-wide"><span className="block text-lg">Eleven Fifteen</span><span className="text-xs tracking-[.18em] text-[#ffb4aa]">Fitness Gym</span></span>
      </Link>
      <nav className="hidden items-center gap-5 xl:flex">{links.map(([label, href]) => <Link key={href} href={href} className={`text-[11px] font-bold uppercase tracking-[.12em] transition hover:text-white ${isActive(href) ? "text-white" : "text-[#e4beb8]"}`}>{label}</Link>)}</nav>
      <div className="hidden items-center gap-3 lg:flex"><a href="tel:07087051788" className="text-xs font-semibold text-[#e4beb8]">☎ 0708 705 1788</a><Link href="/membership" className="bg-[#b31312] px-4 py-2 text-xs font-bold tracking-widest text-white hover:bg-red-700">JOIN NOW</Link></div>
      <button type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center border border-white/10 text-xl xl:hidden">{open ? "×" : "☰"}</button>
    </div>
    {open && <nav className="grid grid-cols-2 gap-2 border-t border-white/10 bg-[#111317] px-4 py-4 xl:hidden">{links.map(([label, href]) => <Link key={href} href={href} onClick={handleLinkClick} className={`px-3 py-3 text-xs font-bold uppercase tracking-widest transition ${isActive(href) ? "bg-[#b31312] text-white" : "bg-[#1a1c20] text-[#e4beb8] hover:bg-[#242629]"}`}>{label}</Link>)}<a href="tel:07087051788" className="col-span-2 bg-[#b31312] px-3 py-3 text-center text-xs font-bold hover:bg-red-700">CALL 0708 705 1788</a></nav>}
  </header>;
}
