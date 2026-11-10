import Link from "next/link";

const footerLinks = [["Home", "/"], ["Training Programs", "/programs"], ["Membership Plans", "/membership"], ["Fitness Events", "/events"], ["Gallery", "/gallery"], ["Contact Us", "/contact"]];
export default function SiteFooter() {
  return <footer className="border-t border-white/10 bg-[#0c0e12] px-4 py-10 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
    <div><div className="text-xl font-black uppercase tracking-widest">Eleven Fifteen</div><p className="mt-2 text-sm font-semibold text-[#ffb4aa]">Sweat. Repeat. Transform.</p><p className="mt-3 max-w-xs text-sm leading-6 text-[#b9b0ae]">Training for strength, cardio and weight loss in Ijoko, Ogun State.</p></div>
    <div><h2 className="text-sm font-bold uppercase tracking-widest">Quick Navigation</h2><div className="mt-3 grid gap-2">{footerLinks.map(([label, href]) => <Link key={href} href={href} className="text-sm text-[#b9b0ae] hover:text-white">{label}</Link>)}</div></div>
    <div><h2 className="text-sm font-bold uppercase tracking-widest">Training</h2><p className="mt-3 text-sm leading-6 text-[#b9b0ae]">Cardio<br/>Bodybuilding<br/>Weight Loss</p><p className="mt-3 text-sm text-[#ffb4aa]">Mon – Sat · hours to be confirmed</p></div>
    <div><h2 className="text-sm font-bold uppercase tracking-widest">Visit the Gym</h2><p className="mt-3 text-sm leading-6 text-[#b9b0ae]">Tosin Shopping Complex,<br/>Ijoko Road, Ijoko 112104,<br/>Ogun State, Nigeria</p><a className="mt-3 inline-block text-sm text-[#ffb4aa]" href="tel:07087051788">0708 705 1788</a></div>
  </div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4 text-xs text-[#8f8988]">© 2026 Eleven Fifteen Fitness Gym. All rights reserved.</div></footer>;
}
