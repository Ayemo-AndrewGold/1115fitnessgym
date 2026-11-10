import Link from "next/link";
import EventReservation from "@/components/events/EventReservation";

const schedule = [
  { date: "TBA", kind: "Turf aerobics", title: "Community turf aerobics", note: "Group movement session · Details confirmed by the front desk" },
  { date: "TBA", kind: "Strength challenge", title: "60-day transformation challenge", note: "Ask about the next intake, format and registration" },
  { date: "TBA", kind: "Strength meet", title: "Ijoko bench & squat meet", note: "Community strength event · Upcoming date to be confirmed" },
  { date: "TBA", kind: "Community", title: "Eleven Fifteen community session", note: "Contact the gym for the next gathering" },
];

const label = "text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]";

export default function Events() {
  return <main className="overflow-hidden bg-[#111317] text-[#e2e2e8]">
    <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>

    <section className="border-b border-white/5 bg-[radial-gradient(ellipse_at_80%_30%,rgba(179,19,18,.2),transparent_45%),#0c0e12]">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-7 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap gap-2"><span className="bg-[#241619] px-2 py-1 text-xs font-bold uppercase tracking-widest text-[#ffb4aa]">● Community &amp; competition</span><span className="bg-[#1a1c20] px-2 py-1 text-xs uppercase tracking-wider text-[#b8acab]">⌖ Tosin Complex · Ijoko Road · Ogun State</span></div>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div className="max-w-3xl"><h1 className="font-[Oswald] text-5xl font-bold uppercase leading-[.98] sm:text-6xl lg:text-7xl">Gym events &amp;<br/><span className="text-[#e32c27]">community challenges</span></h1><p className="mt-3 max-w-2xl font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">Stay accountable with group training, seasonal challenges and community fitness events at Eleven Fifteen Fitness Gym. Contact us for current dates, prices and availability.</p></div><div className="grid grid-cols-3 gap-1.5 lg:w-[370px]">{[["03","Core disciplines"],["Ijoko","Local community"],["RSVP","Contact the gym"]].map(([num,text])=><div key={text} className="border border-white/5 bg-[#1a1c20] p-3"><p className="font-[Oswald] text-3xl font-bold text-[#ffb4aa]">{num}</p><p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#c9bfbd]">{text}</p></div>)}</div></div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
      <div className="mb-4 flex items-end justify-between"><div><p className={label}>● Community sessions</p><h2 className="mt-1 font-[Oswald] text-4xl font-bold uppercase">Major event highlights</h2></div><a href="#reservation" className="hidden text-xs font-bold uppercase tracking-widest text-[#ffb4aa] sm:block">Direct desk RSVP required</a></div>
      <div className="grid gap-3 lg:grid-cols-[1.4fr_1fr]">
        <article className="overflow-hidden border border-white/5 bg-[#1a1c20]">
          <div className="relative h-52 sm:h-64"><img src="/gym/images.png" alt="Group fitness session at Eleven Fifteen Fitness Gym" className="h-full w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-black/20 to-black/40"/><div className="absolute left-3 top-3 flex gap-2"><span className="bg-[#b31312] px-2 py-1 text-xs font-bold uppercase tracking-widest">Group aerobics</span><span className="bg-[#0c0e12]/85 px-2 py-1 text-xs font-bold uppercase">Date to be confirmed</span></div><span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider text-[#ffb4aa]">↗ &nbsp;High energy · Group movement</span></div>
          <div className="p-4 sm:p-5"><h3 className="font-[Oswald] text-3xl font-bold uppercase leading-tight">Community turf aerobics</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[#b8acab]">Ask the gym about the next group aerobics session, its schedule and participation details. Session dates and availability are confirmed by the front desk.</p><div className="mt-3 flex flex-wrap gap-2"><span className="border border-white/10 bg-[#13161a] px-2 py-2 text-xs font-bold uppercase">◷ &nbsp;Schedule: confirm with gym</span><span className="border border-white/10 bg-[#13161a] px-2 py-2 text-xs font-bold uppercase">♧ &nbsp;Group session</span></div><a href="#reservation" className="mt-4 inline-block bg-[#b31312] px-4 py-2.5 text-xs font-bold uppercase tracking-widest">Ask about next session →</a></div>
        </article>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          <article className="border border-[#b31312]/30 bg-[#1f1416] p-4"><p className={label}>Challenge program · date to be confirmed</p><h3 className="mt-2 font-[Oswald] text-xl font-bold uppercase leading-tight">60-day transformation challenge</h3><p className="mt-2 text-sm leading-5 text-[#b8acab]">Ask about the next challenge, its training format, schedule and enrollment details.</p><div className="mt-3 flex items-center justify-between gap-2"><span className="text-xs font-bold uppercase text-[#ffb4aa]">Enrollment details at front desk</span><Link href="#reservation" className="bg-[#282a2e] px-3 py-2 text-xs font-bold uppercase">Register →</Link></div></article>
          <article className="border border-white/5 bg-[#1a1c20] p-4"><p className={label}>Strength meet · upcoming</p><h3 className="mt-2 font-[Oswald] text-xl font-bold uppercase leading-tight">Ijoko bench &amp; squat meet</h3><p className="mt-2 text-sm leading-5 text-[#b8acab]">A community strength event. Contact the gym to confirm the date, format and participation requirements.</p><div className="mt-3 flex items-center justify-between gap-2"><span className="text-xs font-bold uppercase text-[#c9bfbd]">Open event inquiry</span><Link href="#reservation" className="bg-[#282a2e] px-3 py-2 text-xs font-bold uppercase">Event details →</Link></div></article>
        </div>
      </div>
    </section>

    <section className="border-y border-white/5 bg-[#0c0e12] py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className={label}>◷ &nbsp;Upcoming sessions &amp; competitions</p><h2 className="mt-2 font-[Oswald] text-4xl font-bold uppercase">Community event schedule</h2></div><div className="flex flex-wrap gap-2"><span className="bg-[#b31312] px-3 py-2 text-xs font-bold uppercase">All events</span><span className="bg-[#1a1c20] px-3 py-2 text-xs font-bold uppercase text-[#c9bfbd]">Aerobics</span><span className="bg-[#1a1c20] px-3 py-2 text-xs font-bold uppercase text-[#c9bfbd]">Challenges</span><span className="bg-[#1a1c20] px-3 py-2 text-xs font-bold uppercase text-[#c9bfbd]">Strength meets</span></div></div>
      <div className="space-y-4">{schedule.map(event=><article key={event.title} className="grid items-center gap-4 border border-white/5 bg-[#1a1c20] p-5 sm:grid-cols-[80px_1fr_auto]"><div className="grid h-16 w-16 place-items-center border border-white/5 bg-[#282a2e] text-center"><div><span className="block font-[Oswald] text-xs font-bold uppercase text-[#ffb4aa]">{event.kind.split(" ")[0]}</span><span className="mt-1 block font-[Oswald] text-base font-bold">{event.date}</span></div></div><div><p className="font-[Oswald] text-xs font-bold uppercase tracking-wider text-[#ffb4aa]">{event.kind} · Date and time to be confirmed</p><h3 className="mt-2 font-[Oswald] text-lg font-bold uppercase">{event.title}</h3><p className="mt-2 font-[Space_Grotesk] text-sm text-[#a99e9c]">{event.note}</p></div><a href="#reservation" className="border border-white/10 bg-[#282a2e] px-4 py-3 text-center font-[Oswald] text-xs font-bold uppercase transition hover:border-[#b31312] hover:bg-[#b31312]">Ask / RSVP</a></article>)}</div>
      <p className="mt-6 font-[Space_Grotesk] text-xs text-[#9f9694]">Dates, times, fees and places are subject to confirmation by Eleven Fifteen Fitness Gym.</p>
    </div></section>

    {/* communuty energy training  */}
    <section className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
      <div>
        <p className={label}>Sweat. Repeat. Transform.</p>
        <h2 className="mt-1 font-[Oswald] text-4xl font-bold uppercase">Community energy &amp; training</h2>
      <div className="relative mt-3 min-h-[300px] overflow-hidden border border-white/5 bg-[#1a1c20] sm:min-h-[380px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/gym/images_20.png"
      >
        <source src="/gym/videos/community-energy.mp4" type="video/mp4" />
        <source src="/gym/videos/community-training.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"/>
      <div className="absolute bottom-0 p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[#ffb4aa]">Inside the training floor</p>
        <h3 className="mt-1 font-[Oswald] text-xl font-bold uppercase">Move together. Keep showing up.</h3>
        <p className="mt-1 text-xs text-[#e4beb8]">Visit the gym gallery for more training photos.</p>
        </div>
        </div>
        </div>
      <aside className="flex flex-col border border-white/5 bg-[#1a1c20] p-4 sm:p-5"><div className="flex items-center justify-between"><div><p className={label}>Eleven Fifteen Fitness</p><h3 className="mt-1 font-[Oswald] text-xl font-bold uppercase">The community</h3></div><Link href="/gallery" className="text-xs font-bold uppercase tracking-wider text-[#ffb4aa]">Gallery →</Link></div><p className="mt-3 text-sm leading-5 text-[#b8acab]">Explore group training, strength sessions and community activities at our Ijoko gym.</p><div className="mt-4 grid grid-cols-2 gap-1.5">{["images_4.png","images_17.png","images.png","images_19.png"].map((src,i)=><img key={src} src={`/gym/${src}`} alt={`Gym community photograph ${i+1}`} className="aspect-[1.4] w-full object-cover"/>)}</div><div className="mt-auto border-t border-white/5 pt-4"><p className="text-xs font-bold uppercase tracking-widest text-[#ffb4aa]">Ask us about an event</p><a href="https://wa.me/2347087051788" target="_blank" rel="noreferrer" className="mt-2 block bg-[#b31312] px-3 py-2.5 text-center text-xs font-bold uppercase tracking-widest">WhatsApp the front desk</a></div></aside>
    </section>

    <section id="reservation" className="px-4 pb-10 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-5 border border-[#b31312]/30 bg-[linear-gradient(125deg,#261719,#1a1c20_55%)] p-4 sm:p-6 lg:grid-cols-[.85fr_1.15fr] lg:p-7"><div><p className="inline-block bg-[#b31312] px-2 py-1 text-xs font-bold uppercase tracking-widest">Direct desk inquiry</p><h2 className="mt-3 font-[Oswald] text-3xl font-bold uppercase leading-tight sm:text-4xl">Lock your spot for the next challenge</h2><p className="mt-2 text-sm leading-5 text-[#c9bfbd]">Ask the front desk to confirm the next event date, availability, fees and participation details.</p><div className="mt-4 space-y-2 text-sm text-[#d0c5c3]"><p>⌖ &nbsp;Tosin Shopping Complex, Ijoko Road</p><p>☎ &nbsp;0708 705 1788</p><p>◷ &nbsp;Contact the gym for current schedule</p></div><p className="mt-4 text-xs text-[#ffb4aa]">No event registration is submitted by this website form.</p></div><div className="border border-white/5 bg-[#111317]/70 p-4"><EventReservation/></div></div></section>
  </main>;
}
