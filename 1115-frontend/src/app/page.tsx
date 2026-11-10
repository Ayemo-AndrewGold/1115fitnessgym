"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#111317] text-[#e2e2e8]">
      {/* Font imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      {/* Hero Section */}
      <section className="relative border-b border-white/5 bg-[radial-gradient(ellipse_at_75%_40%,rgba(179,19,18,.22),transparent_50%),linear-gradient(110deg,#0c0e12,#17121a_68%,#0c0e12)]">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          >
            <source src="/gym/hero-video.mp4" type="video/mp4" />
            <source src="/gym/hero-video.webm" type="video/webm" />
          </video>
          {/* Dark overlay to maintain readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center">
            <h1 className="font-[Oswald] text-[56px] font-bold uppercase leading-[1.07] tracking-tight text-white sm:text-[64px] lg:text-[72px]">
              <span className="block">SWEAT • REPEAT • TRANSFORM</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl font-[Space_Grotesk] text-lg leading-7 text-[#d4cac8] sm:text-xl">
              YOUR FITNESS JOURNEY STARTS HERE.
            </p>
            <p className="mx-auto mt-4 max-w-2xl font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
              Build strength. Improve your fitness. Challenge yourself. Join a relentless community committed to pure progress, consistency, and athletic transformation in Ijoko.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/membership"
                className="inline-flex items-center gap-2 bg-[#b31312] px-6 py-3.5 font-[Oswald] text-sm font-bold uppercase tracking-[.12em] text-white transition hover:bg-[#c91615]"
              >
                BECOME A MEMBER
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center border border-white/20 bg-[#1a1c20] px-6 py-3.5 font-[Oswald] text-sm font-bold uppercase tracking-[.12em] text-white transition hover:border-[#b31312] hover:bg-[#1e2024]"
              >
                EXPLORE OUR PROGRAMS
              </Link>
            </div>
          </div>

          {/* Location & Power Info */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#b8acab]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffb4aa]">location_on</span>
              <span>Tosin Complex, Alasia B/Stop, Ijoko Road</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff3b30]"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffb4aa]">bolt</span>
              <span>Non-Stop Backup Power</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
            {/* Floor Protocol */}
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.12em] text-[#ffb4aa]">
                FLOOR PROTOCOL
              </div>
              <div className="font-[Oswald] text-lg font-bold uppercase text-white">
                OPEN FOR RIGOR
              </div>
            </div>

            {/* Facility Time */}
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.12em] text-[#ffb4aa]">
                FACILITY TIME
              </div>
              <div className="font-[Oswald] text-base font-bold uppercase text-white">
                06:00 AM - 09:30 PM
              </div>
            </div>

            {/* Specialized Tracks */}
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-[Oswald] text-3xl font-bold text-[#ffb4aa]">5+</span>
                <span className="material-symbols-outlined text-[#b31312]">fitness_center</span>
              </div>
              <div className="mb-1 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide">
                Specialized Tracks
              </div>
              <div className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                Cardio, Iron, Combat, Shred
              </div>
            </div>

            {/* Heavy Dumbbells */}
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-[Oswald] text-3xl font-bold text-[#ffb4aa]">50KG</span>
                <span className="material-symbols-outlined text-[#b31312]">exercise</span>
              </div>
              <div className="mb-1 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide">
                Heavy Free Dumbbells
              </div>
              <div className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                Heavy-duty calibrated iron
              </div>
            </div>

            {/* Power Backup */}
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-[Oswald] text-3xl font-bold text-[#ffb4aa]">100%</span>
                <span className="material-symbols-outlined text-[#b31312]">electric_bolt</span>
              </div>
              <div className="mb-1 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide">
                Verified Power Backup
              </div>
              <div className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                Zero workout interruptions
              </div>
            </div>

            {/* Working Hours */}
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-[Oswald] text-3xl font-bold text-[#ffb4aa]">6-9</span>
                <span className="material-symbols-outlined text-[#b31312]">schedule</span>
              </div>
              <div className="mb-1 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide">
                Active Working Hours
              </div>
              <div className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                Monday through Saturday
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#ffb4aa]">verified</span>
              <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
                OUR PHILOSOPHY
              </span>
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-[1.1] sm:text-5xl">
              MORE THAN A GYM.
              <br />
              <span className="text-[#ffb4aa]">A COMMITMENT TO PROGRESS.</span>
            </h2>
            <p className="mt-4 font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
              At Eleven Fifteen Fitness Gym, sweat is not an accident—it is an intentional ritual. Positioned in the heart of Ijoko, we have constructed an environment engineered to eliminate distractions, dismantle excuses, and systematically elevate your performance ceiling.
            </p>

            {/* Location Card */}
            <div className="mt-6 border-l-2 border-[#b31312] bg-[#1a1c20] p-5">
              <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#ffb4aa]">
                HQ Physical Access
              </div>
              <div className="mb-1 font-[Space_Grotesk] text-sm font-bold uppercase tracking-wide text-white">
                OGUN STATE
              </div>
              <div className="mt-3 font-[Space_Grotesk] text-base font-bold">
                Tosin Complex, Alasia Bus Stop
              </div>
              <p className="mt-1 font-[Space_Grotesk] text-sm text-[#a99e9c]">
                Directly opposite King Palace, Ijoko Road. Easily accessible with secure premises parking and street transit connectivity.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a href="tel:09067408089" className="flex items-center gap-2 font-[Space_Grotesk] text-sm font-semibold text-[#ffb4aa]">
                  <span className="material-symbols-outlined text-base">call</span>
                  0906 740 8089
                </a>
                <a href="tel:07087051788" className="flex items-center gap-2 font-[Space_Grotesk] text-sm font-semibold text-[#ffb4aa]">
                  <span className="material-symbols-outlined text-base">call</span>
                  0708 705 1788
                </a>
              </div>
            </div>

            {/* Feature Grid */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="border border-white/5 bg-[#1a1c20] p-4">
                <div className="mb-1 font-[Space_Grotesk] text-xs font-bold uppercase">
                  COACH-LED
                </div>
                <p className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                  Direct form evaluation and progressive load calibration.
                </p>
              </div>
              <div className="border border-white/5 bg-[#1a1c20] p-4">
                <div className="mb-1 font-[Space_Grotesk] text-xs font-bold uppercase">
                  ALL LEVELS
                </div>
                <p className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                  From first-day beginners to competitive iron athletes.
                </p>
              </div>
            </div>
          </div>

          {/* Equipment Image */}
          <div className="relative min-h-[400px] overflow-hidden border border-white/10 bg-[#1a1c20] lg:min-h-[500px]">
            <img
              src="/gym/images_17.png"
              alt="Smith Machine & Free Racks at Eleven Fifteen Fitness Gym"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#ffb4aa]">sports_gymnastics</span>
                <div>
                  <div className="font-[Oswald] text-xl font-bold uppercase">
                    Smith Machine & Free Racks
                  </div>
                  <div className="font-[Space_Grotesk] text-sm text-[#b8acab]">
                    Heavy load safety hooks & Olympic standard barbells
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#4ade80]">verified</span>
                <span className="font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#4ade80]">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="border-y border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              STRUCTURED TRANSFORMATION
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase sm:text-5xl">
              SPECIALIZED PROGRAMS
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Every track is designed with intentional progressive overload, metabolic conditioning, and coach supervision.
            </p>
            <Link
              href="/programs"
              className="mt-4 inline-flex items-center gap-1 font-[Space_Grotesk] text-sm font-bold uppercase tracking-wide text-[#ffb4aa]"
            >
              View Complete Syllabus
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </Link>
          </div>

          {/* Track 01 - Cardio */}
          <div className="mb-6 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#98a2b3]">
                  TRACK 01
                </span>
                <span className="material-symbols-outlined text-2xl text-[#ffb4aa]">speed</span>
                <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#ffb4aa]">
                  HIGH VO2 MAX
                </span>
              </div>
              <h3 className="font-[Oswald] text-3xl font-bold uppercase">CARDIO FITNESS</h3>
              <p className="mt-3 font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
                Endurance acceleration through high-octane conditioning, continuous spin drills, and fluid rowing intervals to maximize cardiovascular stamina.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  'High-intensity interval cardio cycles',
                  'Stamina & aerobic capacity benchmarks',
                  'Heart rate zone pacing & tracking',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-[#4ade80]">
                      check_circle
                    </span>
                    <span className="font-[Space_Grotesk] text-sm text-[#b8acab]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programs"
                className="mt-6 inline-flex items-center gap-1 border border-white/10 bg-[#111317] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-[.12em] transition hover:border-[#b31312]"
              >
                Explore Discipline
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </Link>
            </div>
            <div className="relative min-h-[300px] overflow-hidden border border-white/10 bg-[#1a1c20]">
              <img
                src="/gym/cadio-fitness.jpg"
                alt="Cardio training at Eleven Fifteen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Track 02 - Bodybuilding (Signature) */}
          <div className="mb-6 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <div className="relative min-h-[300px] overflow-hidden border border-white/10 bg-[#1a1c20]">
              <img
                src="/gym/images_4.png"
                alt="Bodybuilding at Eleven Fifteen"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-3 top-3 bg-[#b31312] px-3 py-1 font-[Oswald] text-xs font-bold uppercase tracking-wide">
                SIGNATURE
              </div>
            </div>
            <div className="border border-[#b31312]/40 bg-[#1a1c20] p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#98a2b3]">
                  TRACK 02 • SIGNATURE
                </span>
                <span className="material-symbols-outlined text-2xl text-[#ffb4aa]">
                  fitness_center
                </span>
                <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#ffb4aa]">
                  HYPERTROPHY
                </span>
              </div>
              <h3 className="font-[Oswald] text-3xl font-bold uppercase">BODYBUILDING</h3>
              <p className="mt-3 font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
                Kinetic muscle hypertrophy built on calibrated iron. Strict Smith machine loading, compound barbell sequences, and dumbbell racks extending to 50kg.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  'Progressive mechanical tension modeling',
                  'Isolated compound & auxiliary splits',
                  'Calibrated dumbbells up to 50kg',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-[#4ade80]">
                      check_circle
                    </span>
                    <span className="font-[Space_Grotesk] text-sm text-[#b8acab]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programs"
                className="mt-6 inline-flex items-center gap-1 bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-[.12em] transition hover:bg-[#c91615]"
              >
                Explore Discipline
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </Link>
            </div>
          </div>

          {/* Track 03 - Weight Loss */}
          <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#98a2b3]">
                  TRACK 03
                </span>
                <span className="material-symbols-outlined text-2xl text-[#ffb4aa]">
                  local_fire_department
                </span>
                <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#ffb4aa]">
                  METABOLIC SHRED
                </span>
              </div>
              <h3 className="font-[Oswald] text-3xl font-bold uppercase">
                WEIGHT LOSS & AEROBICS
              </h3>
              <p className="mt-3 font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
                Targeted fat reduction paired with dynamic rhythmic conditioning. High-energy group floor sessions, agility ropes, and metabolic functional circuits.
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  'Dynamic aerobic step & dance conditioning',
                  'Metabolic resistance & kettlebell circuits',
                  'Nutrition & body composition checkups',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-[#4ade80]">
                      check_circle
                    </span>
                    <span className="font-[Space_Grotesk] text-sm text-[#b8acab]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/programs"
                className="mt-6 inline-flex items-center gap-1 border border-white/10 bg-[#111317] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-[.12em] transition hover:border-[#b31312]"
              >
                Explore Discipline
                <span className="material-symbols-outlined text-base">arrow_outward</span>
              </Link>
            </div>
            <div className="relative min-h-[300px] overflow-hidden border border-white/10 bg-[#1a1c20]">
              <img
                src="/gym/images_20.png"
                alt="Weight loss and aerobics at Eleven Fifteen"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Athletes Train Here */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              TACTICAL ADVANTAGE
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase sm:text-5xl">
              WHY ATHLETES TRAIN HERE
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Every detail of Eleven Fifteen is configured to protect your focus, energy, and momentum.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: 'sports_mma',
                title: 'Focused Athletics',
                description:
                  'Zero clutter, zero passive spectators. A room strictly dedicated to driven individuals who respect every drop of sweat.',
              },
              {
                icon: 'layers',
                title: 'Multiple Disciplines',
                description:
                  'Transition seamlessly between heavy strength training, functional agility tracks, and cardiovascular conditioning under one roof.',
              },
              {
                icon: 'groups',
                title: 'Welcoming Tribe',
                description:
                  'An energetic community of brothers and sisters pushing past fatigue together. Mutual respect and authentic encouragement.',
              },
              {
                icon: 'power',
                title: 'Guaranteed Power',
                description:
                  'Dedicated heavy commercial generator systems running consistently so sound, airflow, and intensity never dip mid-workout.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/5 bg-[#1a1c20] p-6">
                <span className="material-symbols-outlined text-3xl text-[#ffb4aa]">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-[Oswald] text-lg font-bold uppercase">{item.title}</h3>
                <p className="mt-2 font-[Space_Grotesk] text-sm leading-6 text-[#a99e9c]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="border-y border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm text-[#ffb4aa]">domain</span>
              <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
                STANDARDS & AMENITIES
              </span>
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              BUILT FOR DISCIPLINE,
              <br />
              ENGINEERED FOR COMFORT.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              From heavy-duty iron platforms to sanitized individual spaces, the facility is strictly maintained twice daily.
            </p>
          </div>

          {/* Amenity Cards */}
          <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: 'shower',
                title: 'Clean Showers & Changing Lockers',
                description: 'Spacious, private cubicles for quick transition before work.',
              },
              {
                icon: 'local_parking',
                title: 'Dedicated On-Site Complex Parking',
                description: 'Monitored vehicular space right at Tosin Complex grounds.',
              },
              {
                icon: 'sanitizer',
                title: 'Hygiene Standard Protocols',
                description: 'Continuous wipedown of barbells, dumbbells, and cardio equipment.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-white/5 bg-[#1a1c20] p-5">
                <span className="material-symbols-outlined text-2xl text-[#ffb4aa]">
                  {item.icon}
                </span>
                <h3 className="mt-3 font-[Space_Grotesk] text-sm font-bold uppercase">
                  {item.title}
                </h3>
                <p className="mt-2 font-[Space_Grotesk] text-xs text-[#a99e9c]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Facility Images Grid */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { title: 'FREE WEIGHT REPOSITORY', subtitle: '50KG Top Tier Racks', image: 'images_4.png' },
              { title: 'POWER MECHANICS', subtitle: 'Heavy Smith Machines', image: 'images_17.png' },
              { title: 'TURF CONDITIONING', subtitle: 'Group Aerobic Floor', image: 'images.png' },
              { title: 'RECOVERY & HYGIENE', subtitle: 'Private Changing Quarters', image: 'images_20.png' },
            ].map((facility) => (
              <div
                key={facility.title}
                className="group relative min-h-[220px] overflow-hidden border border-white/5 bg-[#1a1c20]"
              >
                <img
                  src={`/gym/${facility.image}`}
                  alt={facility.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                    {facility.title}
                  </div>
                  <div className="mt-1 font-[Space_Grotesk] text-sm font-semibold">
                    {facility.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Video Reels Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-3 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              RAW ATHLETIC REELS • REAL DRILLS
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              RAW FROM THE FLOOR:
              <br />
              <span className="text-[#ffb4aa]">ATHLETE CLIPS & STORIES</span>
            </h2>
            <p className="mt-3 max-w-3xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Witness true transformation in motion: heavy PR lifts, Saturday turf aerobic dance routines, and high-energy conditioning captured live at Tosin Complex, Ijoko.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffb4aa]">play_circle</span>
              <span className="font-[Space_Grotesk] text-sm font-bold uppercase tracking-wide text-[#ffb4aa]">
                100% UNFILTERED GYM FOOTAGE
              </span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="mb-6 flex flex-wrap gap-2">
            {['All Reels (12)', 'Heavy Iron PRs', 'Saturday Turf Dance', 'Combat & HIIT', 'Member Stories'].map(
              (tab) => (
                <button
                  key={tab}
                  className="border border-white/10 bg-[#1a1c20] px-4 py-2 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide transition hover:border-[#b31312]"
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Video Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                tag: '#HEAVY_IRON',
                views: '3.8k',
                duration: '0:45',
                title: 'Babatunde A. | PR Squat 160kg',
                quote: 'From struggling with 60kg to crushing personal records with Coach Segun.',
                handle: '@babatunde_iron',
                category: 'Smith / Barbell Track',
                videoSrc: '/gym/videos/heavy-iron-pr.mp4',
                poster: '/gym/images_4.png',
              },
              {
                tag: '#TURF_ENERGY',
                views: '5.2k',
                duration: '1:15',
                title: 'Saturday Morning Squad',
                quote: 'The 7 AM Turf Aerobics & Afrobeats energy in Ijoko is unmatched.',
                handle: '@1115aerobics',
                category: 'Aerobics & Dance',
                videoSrc: '/gym/videos/saturday-turf.mp4',
                poster: '/gym/images.png',
                featured: true,
              },
              {
                tag: '#UPPER_BODY',
                views: '2.9k',
                duration: '0:38',
                title: 'David O. | Chest & Shoulder Hypertrophy',
                quote: 'Form correction here changed my shoulder stability forever.',
                handle: '@david_hypertrophy',
                category: 'Kinetic Tension',
                videoSrc: '/gym/videos/chest-shoulder.mp4',
                poster: '/gym/images_19.png',
              },
              {
                tag: '#DUO_PASS',
                views: '4.1k',
                duration: '0:52',
                title: 'Rita & Kelechi | Glute & Core Circuit',
                quote: 'High-cadence sweat sessions. Welcoming and relentless community.',
                handle: '@rita_fitlife',
                category: 'Functional Tone',
                videoSrc: '/gym/videos/glute-core.mp4',
                poster: '/gym/images_20.png',
              },
            ].map((video) => (
              <div
                key={video.tag}
                className={`group overflow-hidden border ${
                  video.featured ? 'border-[#b31312]/60' : 'border-white/5'
                } bg-[#1a1c20]`}
              >
                <div className="relative h-48 overflow-hidden">
                  {video.featured && (
                    <div className="absolute left-2 top-2 z-10 flex items-center gap-1 bg-[#ff3b30] px-2 py-1">
                      <span className="material-symbols-outlined text-xs">local_fire_department</span>
                      <span className="font-[Oswald] text-[10px] font-bold uppercase tracking-wide">
                        WEEKLY HIGHLIGHT
                      </span>
                    </div>
                  )}
                  <div className="absolute right-2 top-2 z-10 bg-black/80 px-2 py-1 font-[Space_Grotesk] text-xs font-bold">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-2 right-2 z-10 bg-black/80 px-2 py-1 font-[Space_Grotesk] text-xs">
                    <span className="material-symbols-outlined align-middle text-xs">volume_up</span>
                  </div>
                  
                  {/* Video Element */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    poster={video.poster}
                  >
                    <source src={video.videoSrc} type="video/mp4" />
                  </video>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/10">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#b31312] transition group-hover:scale-110">
                      <span className="material-symbols-outlined text-2xl">play_arrow</span>
                    </div>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                    <div className="flex items-center gap-2">
                      <span className="font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                        {video.tag}
                      </span>
                      <div className="flex items-center gap-1 text-[#98a2b3]">
                        <span className="material-symbols-outlined text-xs">visibility</span>
                        <span className="font-[Space_Grotesk] text-xs">{video.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-[Space_Grotesk] text-sm font-bold">{video.title}</h3>
                  <p className="mt-2 font-[Space_Grotesk] text-xs italic text-[#b8acab]">
                    "{video.quote}"
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="font-[Space_Grotesk] text-[#98a2b3]">{video.handle}</span>
                    <span className="font-[Space_Grotesk] text-[#ffb4aa]">{video.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit CTA */}
          <div className="mt-8 border border-white/5 bg-[#1a1c20] p-6 text-center">
            <span className="material-symbols-outlined text-3xl text-[#ffb4aa]">videocam</span>
            <h3 className="mt-2 font-[Oswald] text-lg font-bold uppercase">
              Got a PR Lift or Transformation Clip?
            </h3>
            <p className="mt-2 font-[Space_Grotesk] text-sm text-[#a99e9c]">
              Submit your PR or tag @1115fitnessgym to get featured on the floor board & official reel stream.
            </p>
            <button className="mt-4 inline-flex items-center gap-2 bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]">
              <span className="material-symbols-outlined text-base">chat</span>
              Submit Workout Clip
            </button>
          </div>
        </div>
      </section>

      {/* Membership Pricing */}
      <section className="border-y border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(179,19,18,.14),transparent_50%),#0c0e12] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              NO HIDDEN FEES
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase sm:text-5xl">
              TRANSPARENT MEMBERSHIPS
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Choose your commitment horizon. Individual, couples, and family packages structured for sustained discipline.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Couples Membership */}
            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#ffb4aa]">
                DUO TIER
              </div>
              <div className="mb-1 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#98a2b3]">
                2 ATHLETE PASSES
              </div>
              <h3 className="mt-4 font-[Oswald] text-2xl font-bold uppercase">
                COUPLES MEMBERSHIP
              </h3>
              <p className="mt-2 font-[Space_Grotesk] text-sm text-[#b8acab]">
                Train together, transform together. Ideal for couples or dedicated workout accountability partners.
              </p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-[Oswald] text-5xl font-bold">₦54,000</span>
                <span className="font-[Space_Grotesk] text-base text-[#98a2b3]">/ month</span>
              </div>

              <div className="mt-3 font-[Space_Grotesk] text-xs text-[#98a2b3]">
                One-Time Registration:{' '}
                <span className="font-bold text-[#ffb4aa]">INCLUDED IN BUNDLE</span>
              </div>

              <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                {[
                  'Unrestricted full-floor access for two individuals',
                  'Cardio zone + heavy bodybuilding access',
                  'Free participation in all scheduled aerobic group sessions',
                  'Lockers & changing room privileges',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-[#4ade80]">
                      check
                    </span>
                    <span className="font-[Space_Grotesk] text-sm text-[#c9bfbd]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/membership-application?plan=couples"
                className="mt-6 flex items-center justify-center gap-2 bg-[#282a2e] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#333539]"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                SECURE COUPLES PASS
              </Link>
            </div>

            {/* Family Membership (Featured) */}
            <div className="border-2 border-[#b31312] bg-[linear-gradient(135deg,#261719,#1a1c20)] p-6">
              <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.14em] text-[#ffb4aa]">
                PREMIER HOUSEHOLD
              </div>
              <div className="mb-1 font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#98a2b3]">
                UP TO 5 MEMBERS
              </div>
              <h3 className="mt-4 font-[Oswald] text-2xl font-bold uppercase">FAMILY MEMBERSHIP</h3>
              <p className="mt-2 font-[Space_Grotesk] text-sm text-[#b8acab]">
                Holistic health foundation for your complete home. Unlocks peak vitality across parents and teens.
              </p>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-[Oswald] text-5xl font-bold">₦125,000</span>
                <span className="font-[Space_Grotesk] text-base text-[#98a2b3]">/ month</span>
              </div>

              <div className="mt-3 font-[Space_Grotesk] text-xs text-[#98a2b3]">
                All 5 Registrations: <span className="font-bold text-[#ffb4aa]">100% WAIVED</span>
              </div>

              <ul className="mt-5 space-y-3 border-t border-white/10 pt-5">
                {[
                  'Full facility passes for up to 5 family members',
                  'Personal fitness baseline assessment for each member',
                  'Priority access to aerobic schedules & personal trainers',
                  'Customized training routines calibrated to age & experience',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-base text-[#4ade80]">
                      verified
                    </span>
                    <span className="font-[Space_Grotesk] text-sm text-[#c9bfbd]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/membership-application?plan=family"
                className="mt-6 flex items-center justify-center gap-2 bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]"
              >
                <span className="material-symbols-outlined text-base">chat</span>
                ENROLL HOUSEHOLD PLAN
              </Link>
            </div>
          </div>

          {/* Standard Passes */}
          <div className="mt-6 border border-white/5 bg-[#1a1c20] p-5">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <div className="font-[Oswald] text-sm font-bold uppercase tracking-wide">
                  STANDARD PASSES:
                </div>
                <div className="mt-2 font-[Space_Grotesk] text-sm text-[#c9bfbd]">
                  Single Walk-In: ₦2,500 • Weekly Pass: ₦8,000 • Monthly Standard: ₦28,000
                </div>
              </div>
              <Link
                href="/membership"
                className="inline-flex items-center gap-1 font-[Space_Grotesk] text-sm font-bold uppercase tracking-wide text-[#ffb4aa]"
              >
                View All Membership Details
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              COMMUNITY ENERGY
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase sm:text-5xl">
              HEAR FROM OUR SQUAD
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Testimonial Card */}
            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-4 text-xl tracking-[.2em] text-[#ffb4aa]">★★★★★</div>
              <blockquote className="font-[Space_Grotesk] text-base italic leading-7 text-[#e4beb8]">
                "The atmosphere here is pure focus. No nonsense, no equipment breakdowns, and the trainers actually correct your form before you hurt your spine. Dropped 8kg in 6 weeks without losing muscle."
              </blockquote>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-[Space_Grotesk] text-base font-bold">Tunde A.</div>
                    <div className="font-[Space_Grotesk] text-sm text-[#98a2b3]">
                      Member since Jan 2024 • Bodybuilding Track
                    </div>
                  </div>
                  <div className="rounded bg-[#282a2e] px-3 py-1.5 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                    Verified Athlete
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center bg-[#b31312] font-[Oswald] text-xl font-bold">
                    11
                  </div>
                  <div>
                    <div className="font-[Space_Grotesk] text-base font-bold">
                      @1115fitnessgym
                    </div>
                    <div className="font-[Space_Grotesk] text-sm text-[#98a2b3]">
                      Official Training Feed
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/1115fitnessgym/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/10 bg-[#282a2e] px-4 py-2 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:border-[#b31312]"
                >
                  Follow
                </a>
              </div>
              <p className="mb-4 font-[Space_Grotesk] text-sm leading-6 text-[#b8acab]">
                Daily motivation, member lift records, conditioning routines, and transformation spotlights streamed straight from the Ijoko weight room floor.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {['images_4.png', 'images.png', 'images_20.png'].map((img, i) => (
                  <div key={img} className="aspect-square overflow-hidden border border-white/10">
                    <img
                      src={`/gym/${img}`}
                      alt={`Instagram post ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/5 bg-[radial-gradient(ellipse_at_bottom,rgba(179,19,18,.18),transparent_50%),#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-3 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              COMMIT TODAY
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              READY TO START YOUR TRANSFORMATION?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
              Walk through our doors at Tosin Complex, Ijoko Road, or connect directly with desk management on WhatsApp right now to reserve your intro session.
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
              <a
                href="tel:07087051788"
                className="inline-flex items-center gap-2 border border-white/10 bg-[#282a2e] px-6 py-3.5 font-[Oswald] text-sm font-bold uppercase tracking-wide transition hover:border-[#b31312]"
              >
                <span className="material-symbols-outlined text-base">call</span>
                CALL FRONT DESK
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
