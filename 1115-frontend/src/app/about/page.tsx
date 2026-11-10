import Link from "next/link";

export default function About() {
  return (
    <main className="overflow-hidden bg-[#111317] text-[#e2e2e8]">
      {/* Hero Section */}
      <section className="relative border-b border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(179,19,18,.18),transparent_60%),#0c0e12]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mb-8">
            <div className="mb-3 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              ELEVEN FIFTEEN FITNESS GYM
            </div>
            <h1 className="max-w-4xl font-[Oswald] text-5xl font-bold uppercase leading-[1.1] sm:text-6xl lg:text-7xl">
              BUILT ON DISCIPLINE.
              <br />
              <span className="text-[#ffb4aa]">DRIVEN BY TRANSFORMATION.</span>
            </h1>
            <p className="mt-6 max-w-3xl font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
              At Eleven Fifteen Fitness Gym, we are committed to building a space where intentional effort meets progressive results. Located in the heart of Ijoko, Ogun State, our gym brings together structured training disciplines, professional coaching support, and a community focused on real athletic development.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 flex items-center gap-3">
            <Link
              href="/membership"
              className="bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]"
            >
              BECOME A MEMBER →
            </Link>
            <a
              href="tel:07087051788"
              className="border border-white/10 bg-[#1a1c20] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:border-[#b31312]"
            >
              ☎ CALL US • 0708 705 1788
            </a>
          </div>
        </div>

        {/* Hero Video */}
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="relative h-[400px] overflow-hidden border border-white/10 bg-[#1a1c20] lg:h-[500px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
              poster="/gym/images_4.png"
            >
              <source src="/gym/videos/about.mp4" type="video/mp4" />
              <source src="/gym/videos/about-hero.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                ESTABLISHED IN IJOKO
              </div>
              <div className="mt-1 font-[Oswald] text-2xl font-bold uppercase">
                A RELENTLESS COMMITMENT TO PROGRESS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-white/5 bg-[#0c0e12] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { stat: '100%', label: 'POWER BACKUP', desc: 'Uninterrupted training with verified generator systems' },
              { stat: '4-IN-1', label: 'TRAINING SYSTEMS', desc: 'Cardio, Bodybuilding, Weight Loss, Combat Conditioning' },
              { stat: '50 KG+', label: 'HEAVY DUMBBELLS', desc: 'Calibrated free weight iron up to 50kg per hand' },
              { stat: '24/7', label: 'MEMBERSHIP SUPPORT', desc: 'Direct contact access for active members' },
            ].map((item) => (
              <div key={item.label} className="border border-white/5 bg-[#1a1c20] p-6">
                <div className="mb-2 font-[Oswald] text-4xl font-bold text-[#ffb4aa]">
                  {item.stat}
                </div>
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide">
                  {item.label}
                </div>
                <p className="font-[Space_Grotesk] text-xs text-[#a99e9c]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              THE 1115 EDGE
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              BRIDGING THE GAP BETWEEN COMFORT
              <br />
              AND ATHLETIC DOMINANCE.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
                Most gyms ask you to choose between functional equipment and comfortable facilities. We refuse that compromise. Eleven Fifteen delivers uncompromising iron training, calibrated resistance systems, and genuine coach supervision — without sacrificing clean showers, monitored parking, or guaranteed power backup.
              </p>
              <p className="mt-4 font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
                Our philosophy is simple: athletes deserve both respect for their discipline and environments that support peak performance. No excuses. No interruptions. Pure, sustained progress.
              </p>
              <Link
                href="/programs"
                className="mt-6 inline-flex items-center gap-2 border border-white/10 bg-[#1a1c20] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:border-[#b31312]"
              >
                VIEW ALL PROGRAMS
              </Link>
            </div>

            <div className="space-y-5">
              <div className="border border-white/5 bg-[#1a1c20] p-5">
                <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  01 • REAL IRON
                </div>
                <h3 className="font-[Oswald] text-lg font-bold uppercase">
                  "WEIGHTS DO NOT ASK FOR CONVENIENCE—THEY DEMAND COMMITMENT."
                </h3>
                <p className="mt-2 font-[Space_Grotesk] text-sm text-[#a99e9c]">
                  Heavy compound barbells, Smith machines for load safety, and calibrated dumbbells up to 50kg. Built for those who show up to lift, not spectate.
                </p>
              </div>

              <div className="border border-white/5 bg-[#1a1c20] p-5">
                <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  02 • ELITE ENVIRONMENT
                </div>
                <h3 className="font-[Oswald] text-lg font-bold uppercase">
                  VERIFIED POWER BACKUP • SANITIZED CHANGING QUARTERS
                </h3>
                <p className="mt-2 font-[Space_Grotesk] text-sm text-[#a99e9c]">
                  Commercial-grade generator systems keep lights, ventilation, and equipment running without fail. Clean, private showers and secure on-site parking at Tosin Complex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="border-y border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              A MODE • A PLACE • A TRIBE
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase sm:text-5xl">
              OUR THREE CORE PILLARS
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Eleven Fifteen is built on three unwavering commitments that define every session, every rep, and every transformation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'DISCIPLINE OVER COMFORT & SHOW',
                description:
                  'Zero mirrors designed for selfies. No passive spectators cluttering the floor. This is a workspace for intentional athletic development, not casual browsing. Every piece of equipment serves a training purpose. Every member respects the space and the sweat.',
                cta: 'EXPLORE PHILOSOPHY →',
              },
              {
                number: '02',
                title: 'STRUCTURED, PROGRESSIVE PROGRAMS',
                description:
                  'We do not offer random workouts. Every discipline—Cardio Conditioning, Hypertrophy Bodybuilding, Metabolic Weight Loss, Combat Training—follows a structured progression model with coach-led form evaluation and load calibration.',
                cta: 'VIEW PROGRAMS →',
              },
              {
                number: '03',
                title: 'RELENTLESS OPERATIONAL RIGOR',
                description:
                  'Power never fails. Equipment stays calibrated and sanitized. Changing rooms remain clean. Parking stays monitored. We eliminate every operational excuse so your only focus is the work ahead.',
                cta: 'EXPLORE FACILITY →',
              },
            ].map((pillar) => (
              <div key={pillar.number} className="border border-white/5 bg-[#1a1c20] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center border border-[#b31312] bg-[#241619] font-[Oswald] text-xl font-bold text-[#ffb4aa]">
                    {pillar.number}
                  </div>
                </div>
                <h3 className="font-[Oswald] text-xl font-bold uppercase leading-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-[Space_Grotesk] text-sm leading-6 text-[#b8acab]">
                  {pillar.description}
                </p>
                <button className="mt-5 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  {pillar.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Disciplines */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              TRAINING DISCIPLINES
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase sm:text-5xl">
              TARGETED TRAINING DISCIPLINES
            </h2>
            <p className="mt-3 max-w-3xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Every training track at Eleven Fifteen is designed with progressive overload, metabolic conditioning, and coach supervision. Choose your discipline and build your regimen.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '01',
                title: 'CARDIO • VO2 MAX CONDITIONING',
                description: 'High-intensity interval cycling, rowing drills, and aerobic capacity benchmarking for pure endurance acceleration.',
                tag: 'STAMINA • INTERVALS',
              },
              {
                icon: '02',
                title: 'IRON • HYPERTROPHY BODYBUILDING',
                description: 'Calibrated compound barbell sequences, Smith machine loading, and heavy dumbbell splits for kinetic muscle hypertrophy.',
                tag: 'STRENGTH • MASS BUILD',
              },
              {
                icon: '03',
                title: 'SHRED • WEIGHT LOSS & AEROBICS',
                description: 'Dynamic rhythmic conditioning, functional kettlebell circuits, and Saturday turf dance sessions for targeted fat reduction.',
                tag: 'METABOLIC • FUNCTIONAL',
              },
              {
                icon: '04',
                title: 'COMBAT • TACTICAL AGILITY',
                description: 'High-cadence combat drills, agility rope work, and explosive conditioning for tactical athletic readiness.',
                tag: 'EXPLOSIVE • TACTICAL',
              },
            ].map((discipline) => (
              <div key={discipline.title} className="border border-white/5 bg-[#1a1c20] p-6">
                <div className="mb-4 grid h-12 w-12 place-items-center border border-[#b31312]/40 bg-[#241619] font-[Oswald] text-xl font-bold text-[#ffb4aa]">
                  {discipline.icon}
                </div>
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#98a2b3]">
                  {discipline.tag}
                </div>
                <h3 className="font-[Oswald] text-base font-bold uppercase leading-tight">
                  {discipline.title}
                </h3>
                <p className="mt-3 font-[Space_Grotesk] text-sm leading-6 text-[#b8acab]">
                  {discipline.description}
                </p>
                <Link
                  href="/programs"
                  className="mt-4 inline-flex items-center gap-1 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]"
                >
                  EXPLORE TRACK →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="border-y border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="grid grid-cols-2 gap-3">
              {['images_4.png', 'images_20.png', 'images.png', 'images_17.png'].map((img, i) => (
                <div key={img} className="relative h-48 overflow-hidden border border-white/10 bg-[#1a1c20]">
                  <img
                    src={`/gym/${img}`}
                    alt={`Training at Eleven Fifteen ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div>
              <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
                THE 11:15 TRIBE: NO LONE WOLVES
              </div>
              <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
                A RELENTLESS COMMUNITY OF ATHLETES
              </h2>
              <p className="mt-4 font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
                Training is hard. Transformation is harder. At Eleven Fifteen, you are surrounded by brothers and sisters who understand the grind—people who respect every drop of sweat and push past fatigue together.
              </p>
              <p className="mt-4 font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
                From first-day beginners to competitive iron athletes, the floor is a space of mutual respect, authentic encouragement, and zero passive spectators. This is not a social club—it is a tribe committed to progress.
              </p>
              <div className="mt-6 border-l-2 border-[#b31312] bg-[#1a1c20] p-5">
                <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  TRIBE TESTIMONIAL
                </div>
                <blockquote className="font-[Space_Grotesk] text-sm italic text-[#e4beb8]">
                  "The atmosphere here is pure focus. No nonsense, no equipment breakdowns, and the trainers actually correct your form before you hurt your spine."
                </blockquote>
                <div className="mt-3 font-[Space_Grotesk] text-xs font-bold">— Tunde A. • Member</div>
              </div>
              <Link
                href="/gallery"
                className="mt-6 inline-flex items-center gap-2 bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]"
              >
                VIEW GALLERY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Amenities */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              VERIFIED AMENITIES
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase sm:text-5xl">
              VERIFIED FACILITY AMENITIES
            </h2>
            <p className="mt-3 max-w-2xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              From iron to infrastructure, every operational detail is maintained to eliminate excuses and maximize focus.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: 'electric_bolt',
                title: '100% POWER BACKUP',
                description: 'Commercial-grade generator systems ensure uninterrupted lighting, ventilation, and equipment operation.',
              },
              {
                icon: 'local_parking',
                title: 'SECURE ON-SITE PARKING',
                description: 'Monitored vehicular space right at Tosin Shopping Complex premises. Secure and accessible.',
              },
              {
                icon: 'shower',
                title: 'CLEAN CHANGING QUARTERS',
                description: 'Spacious, private shower cubicles and locker facilities for quick transition before or after training.',
              },
              {
                icon: 'sanitizer',
                title: 'EQUIPMENT HYGIENE PROTOCOLS',
                description: 'Continuous wipedown of barbells, dumbbells, benches, and cardio equipment twice daily.',
              },
              {
                icon: 'location_on',
                title: 'CENTRAL IJOKO LOCATION',
                description: 'Tosin Complex, Alasia Bus Stop, directly opposite King Palace. Easy transit connectivity.',
              },
              {
                icon: 'support_agent',
                title: 'DIRECT MEMBER SUPPORT',
                description: '24/7 WhatsApp contact access for active members. Questions answered within hours.',
              },
            ].map((amenity) => (
              <div key={amenity.title} className="border border-white/5 bg-[#1a1c20] p-6">
                <span className="material-symbols-outlined text-3xl text-[#ffb4aa]">
                  {amenity.icon}
                </span>
                <h3 className="mt-4 font-[Oswald] text-base font-bold uppercase">
                  {amenity.title}
                </h3>
                <p className="mt-2 font-[Space_Grotesk] text-sm leading-6 text-[#a99e9c]">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-12 border border-white/5 bg-[#1a1c20] p-6">
            <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  OUR EXACT LOCATION
                </div>
                <h3 className="font-[Oswald] text-2xl font-bold uppercase">
                  TOSIN COMPLEX • IJOKO ROAD
                </h3>
                <p className="mt-3 font-[Space_Grotesk] text-sm text-[#b8acab]">
                  Tosin Shopping Complex, Alasia Bus Stop
                  <br />
                  Directly opposite King Palace, Ijoko Road
                  <br />
                  Ijoko 112104, Ogun State, Nigeria
                </p>
                <div className="mt-5 space-y-2">
                  <a
                    href="tel:09067408089"
                    className="flex items-center gap-2 font-[Space_Grotesk] text-sm font-semibold text-[#ffb4aa]"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    0906 740 8089
                  </a>
                  <a
                    href="tel:07087051788"
                    className="flex items-center gap-2 font-[Space_Grotesk] text-sm font-semibold text-[#ffb4aa]"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    0708 705 1788
                  </a>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]"
                >
                  GET DIRECTIONS →
                </a>
              </div>
              <div className="relative min-h-[300px] overflow-hidden bg-[#0c0e12]">
                <img
                  src="/gym/images_2.png"
                  alt="Map to Eleven Fifteen Fitness Gym"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-[#ffb4aa]">location_on</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(179,19,18,.16),transparent_50%),#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
            JOIN THE TRANSFORMATION
          </div>
          <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
            READY TO START YOUR
            <br />
            TRANSFORMATION?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
            Walk through our doors at Tosin Complex, Ijoko Road, or connect directly on WhatsApp to ask about membership, training programs, and facility access.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/2347087051788"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#b31312] px-6 py-3.5 font-[Oswald] text-sm font-bold uppercase tracking-wide transition hover:bg-[#c91615]"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              CHAT ON WHATSAPP
            </a>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 border border-white/10 bg-[#282a2e] px-6 py-3.5 font-[Oswald] text-sm font-bold uppercase tracking-wide transition hover:border-[#b31312]"
            >
              EXPLORE MEMBERSHIPS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
