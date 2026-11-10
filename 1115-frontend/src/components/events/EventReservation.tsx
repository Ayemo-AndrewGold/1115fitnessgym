"use client";

import { FormEvent, useState } from "react";

const input = "mt-1 w-full border border-white/10 bg-[#0c0e12] px-3 py-2.5 text-xs text-white outline-none placeholder:text-[#777579] focus:border-[#b31312]";
export default function EventReservation() {
  const [ready, setReady] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setReady(true); }
  return <>
    <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
      <label className="text-[9px] font-bold uppercase tracking-wider text-[#e4beb8]">Athlete full name *<input required autoComplete="name" className={input} placeholder="Your full name"/></label>
      <label className="text-[9px] font-bold uppercase tracking-wider text-[#e4beb8]">WhatsApp contact number *<input required type="tel" autoComplete="tel" className={input} placeholder="080..."/></label>
      <label className="text-[9px] font-bold uppercase tracking-wider text-[#e4beb8]">Event or session<select required className={input} defaultValue=""><option value="" disabled>Choose a session</option><option>Community turf aerobics</option><option>Strength challenge</option><option>Fitness community event</option></select></label>
      <label className="text-[9px] font-bold uppercase tracking-wider text-[#e4beb8]">Fitness experience<select className={input} defaultValue=""><option value="" disabled>Choose experience</option><option>Beginner</option><option>Some training experience</option><option>Experienced</option></select></label>
      <label className="flex items-start gap-2 text-[8px] leading-4 text-[#c9bfbd] sm:col-span-2"><input required type="checkbox" className="mt-0.5 accent-[#b31312]"/><span>I agree to be contacted about the selected event. This form does not transmit or save my details.</span></label>
      <button className="bg-[#b31312] px-4 py-3 text-[9px] font-bold uppercase tracking-widest sm:col-span-2">Prepare event inquiry →</button>
    </form>
    {ready&&<div role="status" className="mt-3 border border-[#b31312]/50 bg-[#241619] p-3 text-[9px] leading-4 text-[#ffb4aa]">Your inquiry is ready but has not been sent or saved. Message the front desk to confirm event dates and availability.</div>}
  </>;
}
