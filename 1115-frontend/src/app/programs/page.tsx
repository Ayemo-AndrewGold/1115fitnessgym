import Link from "next/link";

export default function Programs() {
  return (
    <main className="overflow-hidden bg-[#111317] text-[#e2e2e8]">
      {/* Hero Section */}
      <section className="relative border-b border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(179,19,18,.2),transparent_65%),#0c0e12]">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          >
            <source src="/gym/videos/programs.mp4" type="video/mp4" />
            <source src="/gym/videos/programs-hero.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-8">
            <div className="mb-3 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              STRUCTURED PROGRESSION • ZERO GUESSWORK
            </div>
            <h1 className="max-w-4xl font-[Oswald] text-5xl font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
              ENGINEERED DISCIPLINES.
              <br />
              <span className="text-[#ffb4aa]">ZERO GUESSWORK.</span>
            </h1>
            <p className="mt-6 max-w-3xl font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
              Every track at Eleven Fifteen is built on progressive overload, metabolic conditioning, and coach-led form evaluation. We do not offer random workouts we deliver structured systems designed to systematically elevate your ceiling.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-1 font-[Oswald] text-3xl font-bold text-[#ffb4aa]">04</div>
              <div className="font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide">
                Core Disciplines
              </div>
            </div>
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-1 font-[Oswald] text-3xl font-bold text-[#ffb4aa]">6-DAY</div>
              <div className="font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide">
                Weekly Training
              </div>
            </div>
            <div className="border border-white/5 bg-[#1a1c20] p-5">
              <div className="mb-1 font-[Oswald] text-3xl font-bold text-[#ffb4aa]">100%</div>
              <div className="font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide">
                Coach Supervised
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/membership"
              className="bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]"
            >
              EXPLORE MEMBERSHIPS →
            </Link>
            <Link
              href="/contact"
              className="border border-white/10 bg-[#1a1c20] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:border-[#b31312]"
            >
              CONTACT FRONT DESK
            </Link>
          </div>
        </div>
      </section>

      {/* Track 01 - Strength & Hypertrophy */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-1 w-8 bg-[#b31312]"></div>
              <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
                TRACK 01 • SIGNATURE PROGRAM
              </span>
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              STRENGTH & HYPERTROPHY FLOOR
            </h2>
            <p className="mt-3 max-w-3xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Kinetic muscle hypertrophy built on calibrated iron. Strict Smith machine loading, compound barbell sequences, and dumbbell racks extending to 50kg.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              {['images_4.png', 'images_17.png', 'images_19.png', 'images_2.png'].map((img, i) => (
                <div key={img} className="relative h-48 overflow-hidden border border-white/10 bg-[#1a1c20]">
                  <img
                    src={`/gym/${img}`}
                    alt={`Strength training ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {i === 0 && (
                    <div className="absolute left-2 top-2 bg-[#b31312] px-2 py-1 font-[Oswald] text-[10px] font-bold uppercase tracking-wide">
                      HEAVY IRON
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="border-l-2 border-[#b31312] bg-[#1a1c20] p-5">
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  PROGRESSIVE TENSION MODEL
                </div>
                <h3 className="font-[Oswald] text-xl font-bold uppercase">
                  CALIBRATED COMPOUND LIFTS & AUXILIARY ISOLATION
                </h3>
                <p className="mt-2 font-[Space_Grotesk] text-sm leading-6 text-[#b8acab]">
                  Build raw strength and muscle mass through systematic progressive overload. Every session follows a structured compound-auxiliary split with coach-led form evaluation and load calibration.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="border border-white/5 bg-[#1a1c20] p-4">
                  <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                    EQUIPMENT
                  </div>
                  <ul className="space-y-1 font-[Space_Grotesk] text-xs text-[#c9bfbd]">
                    <li>• Smith Machine Safety Racks</li>
                    <li>• Olympic Barbell Stations</li>
                    <li>• 50kg Calibrated Dumbbells</li>
                    <li>• Cable & Plate Systems</li>
                  </ul>
                </div>

                <div className="border border-white/5 bg-[#1a1c20] p-4">
                  <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                    TRAINING SPLIT
                  </div>
                  <ul className="space-y-1 font-[Space_Grotesk] text-xs text-[#c9bfbd]">
                    <li>• Push/Pull/Legs Model</li>
                    <li>• 4-6 Day Weekly Rotation</li>
                    <li>• Progressive Load Tracking</li>
                    <li>• Auxiliary Burnout Finishers</li>
                  </ul>
                </div>
              </div>

              <div className="border border-white/5 bg-[#1a1c20] p-5">
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  COACH SUPERVISION
                </div>
                <p className="font-[Space_Grotesk] text-sm text-[#b8acab]">
                  Direct form evaluation, spotter assistance, and progressive load calibration from certified strength coaches.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]">
                  JOIN THIS TRACK →
                </button>
                <button className="border border-white/10 bg-[#1a1c20] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:border-[#b31312]">
                  VIEW FLOOR SCHEDULE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track 02 - Cardio */}
      <section className="border-b border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden border border-white/10 bg-[#1a1c20] lg:h-[500px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                poster="/gym/images.png"
              >
                <source src="/gym/videos/cardio-track.mp4" type="video/mp4" />
                <source src="/gym/videos/cardio-track.webm" type="video/webm" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  HIGH VO2 MAX CONDITIONING
                </div>
                <div className="mt-1 font-[Oswald] text-2xl font-bold uppercase">
                  ENDURANCE ACCELERATION
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-1 w-8 bg-[#b31312]"></div>
                <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
                  TRACK 02
                </span>
              </div>
              <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
                CARDIO & HIGH-OCTANE ENDURANCE
              </h2>
              <p className="mt-4 font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
                Increase cardiovascular stamina through interval sprint drills, continuous conditioning cycles, and high-intensity aerobic capacity benchmarking. Built for athletes seeking explosive endurance.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-base text-[#4ade80]">
                    check_circle
                  </span>
                  <div>
                    <div className="font-[Space_Grotesk] text-sm font-bold">
                      HIIT Interval Cycling & Rowing
                    </div>
                    <p className="mt-1 font-[Space_Grotesk] text-xs text-[#a99e9c]">
                      Short, high-intensity bursts followed by active recovery periods
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-base text-[#4ade80]">
                    check_circle
                  </span>
                  <div>
                    <div className="font-[Space_Grotesk] text-sm font-bold">
                      Heart Rate Zone Pacing
                    </div>
                    <p className="mt-1 font-[Space_Grotesk] text-xs text-[#a99e9c]">
                      Structured training within targeted cardiovascular zones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined mt-0.5 text-base text-[#4ade80]">
                    check_circle
                  </span>
                  <div>
                    <div className="font-[Space_Grotesk] text-sm font-bold">
                      Aerobic Capacity Benchmarks
                    </div>
                    <p className="mt-1 font-[Space_Grotesk] text-xs text-[#a99e9c]">
                      Periodic VO2 max testing and stamina progression tracking
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 border border-white/5 bg-[#1a1c20] p-5">
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  CARDIO FLOOR HOURS
                </div>
                <div className="font-[Space_Grotesk] text-sm text-[#c9bfbd]">
                  Monday - Saturday: 06:00 AM - 09:30 PM
                  <br />
                  Sunday: Closed (Recovery Protocol)
                </div>
              </div>

              <button className="mt-6 bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]">
                START CARDIO TRACK →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Track 03 - Weight Loss */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-1 w-8 bg-[#b31312]"></div>
              <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
                TRACK 03 • METABOLIC CONDITIONING
              </span>
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              WEIGHT LOSS & COMMUNITY AEROBICS
            </h2>
            <p className="mt-3 max-w-3xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Targeted fat reduction paired with dynamic rhythmic conditioning. High-energy group floor sessions, agility ropes, and metabolic functional circuits.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-5">
              <div className="relative h-64 overflow-hidden border border-white/10 bg-[#1a1c20]">
                <img
                  src="/gym/images_20.png"
                  alt="Group aerobics session"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-3 top-3 bg-[#ff3b30] px-3 py-1 font-[Oswald] text-[10px] font-bold uppercase tracking-wide">
                  SATURDAY TURF ENERGY
                </div>
              </div>

              <div className="border-l-2 border-[#b31312] bg-[#1a1c20] p-5">
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  COLLECTIVE RHYTHM, UNSTOPPABLE DRIVE
                </div>
                <p className="font-[Space_Grotesk] text-sm leading-6 text-[#b8acab]">
                  Every Saturday morning, the turf floor transforms into a high-energy aerobic dance experience. Afrobeats, dynamic step sequences, and metabolic burnout sessions that leave you dripping with intention.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="border border-white/5 bg-[#1a1c20] p-4">
                  <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                    WEEKLY SESSIONS
                  </div>
                  <div className="font-[Space_Grotesk] text-xs text-[#c9bfbd]">
                    Monday, Wednesday, Friday • 6:00 PM
                    <br />
                    Saturday Turf • 7:00 AM
                  </div>
                </div>

                <div className="border border-white/5 bg-[#1a1c20] p-4">
                  <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                    INCLUDED IN PLANS
                  </div>
                  <div className="font-[Space_Grotesk] text-xs text-[#c9bfbd]">
                    Monthly Memberships
                    <br />
                    Couples & Family Plans
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border border-white/5 bg-[#1a1c20] p-5">
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  WHAT TO EXPECT
                </div>
                <ul className="space-y-2">
                  {[
                    'Dynamic Aerobic Step & Dance Conditioning',
                    'Metabolic Resistance & Kettlebell Circuits',
                    'Bodyweight Functional Movement Patterns',
                    'Nutrition & Body Composition Checkups',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-[#ffb4aa]">▸</span>
                      <span className="font-[Space_Grotesk] text-sm text-[#c9bfbd]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#b31312]/40 bg-[#1f1416] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-[#ff3b30]">
                    local_fire_department
                  </span>
                  <span className="font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                    TURF SATURDAYS
                  </span>
                </div>
                <div className="font-[Space_Grotesk] text-sm font-bold">7:00 AM • EVERY SATURDAY</div>
                <p className="mt-2 font-[Space_Grotesk] text-xs text-[#b8acab]">
                  The most high-energy group session of the week. Afrobeats, synchronized movement, and relentless community sweat.
                </p>
              </div>

              <button className="w-full bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]">
                JOIN WEIGHT LOSS TRACK →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Track 04 - Personal Coaching */}
      <section className="border-b border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-1 w-8 bg-[#b31312]"></div>
              <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
                PREMIUM TIER • DIRECT SUPERVISION
              </span>
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              1-ON-1 VIP PERSONAL COACHING
            </h2>
            <p className="mt-3 max-w-3xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Dedicated coaching sessions with personalized programming, direct form correction, and customized progression plans. For athletes who demand undivided attention and accelerated results.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'COMPLETE BASELINE ASSESSMENT',
                items: [
                  'Body composition analysis',
                  'Movement pattern screening',
                  'Strength & cardio benchmarking',
                  'Goal calibration & timeline mapping',
                ],
              },
              {
                title: 'CUSTOMIZED PROGRAM DESIGN',
                items: [
                  'Personalized training split creation',
                  'Progressive overload modeling',
                  'Injury accommodation protocols',
                  'Weekly load & volume adjustments',
                ],
              },
              {
                title: 'PREMIUM SESSION ACCESS',
                items: [
                  'Reserved 1-on-1 floor time slots',
                  'Direct coach supervision every rep',
                  'Real-time form correction & cues',
                  'Priority equipment & rack access',
                ],
              },
            ].map((package_) => (
              <div key={package_.title} className="border border-white/5 bg-[#1a1c20] p-6">
                <div className="mb-4 font-[Oswald] text-base font-bold uppercase leading-tight text-[#ffb4aa]">
                  {package_.title}
                </div>
                <ul className="space-y-2">
                  {package_.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined mt-0.5 text-sm text-[#4ade80]">
                        check_circle
                      </span>
                      <span className="font-[Space_Grotesk] text-xs text-[#c9bfbd]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-[#b31312]/60 bg-[#1a1c20] p-6">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  LIMITED AVAILABILITY
                </div>
                <h3 className="font-[Oswald] text-2xl font-bold uppercase">
                  BOOKING A 1-ON-1 VIP SESSION?
                </h3>
                <p className="mt-2 font-[Space_Grotesk] text-sm text-[#b8acab]">
                  Personal coaching slots are limited to maintain quality and direct attention. Contact the front desk to check current availability and reserve your baseline assessment.
                </p>
              </div>
              <a
                href="tel:07087051788"
                className="whitespace-nowrap bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]"
              >
                ☎ CALL FOR 1-ON-1
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-[#ffb4aa]">schedule</span>
              <span className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
                OPERATING HOURS
              </span>
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              WEEKLY FLOOR & SESSION SCHEDULE
            </h2>
            <p className="mt-3 max-w-2xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Open six days per week with extended hours for maximum training flexibility. Sunday remains closed for athlete recovery protocols.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                day: 'MONDAY • WEDNESDAY • FRIDAY',
                sessions: [
                  'General Floor Open: 06:00 AM - 09:30 PM',
                  'Weight Loss Aerobics: 6:00 PM',
                  'Strength Coaching Available: All Day',
                ],
              },
              {
                day: 'TUESDAY • THURSDAY',
                sessions: [
                  'General Floor Open: 06:00 AM - 09:30 PM',
                  'Cardio HIIT Cycles: 7:00 AM & 5:00 PM',
                  'Iron Training: Priority Hours',
                ],
              },
              {
                day: 'SATURDAY',
                sessions: [
                  'Turf Aerobics & Dance: 7:00 AM',
                  'General Floor Open: 09:00 AM - 09:30 PM',
                  'Weekend Open Training',
                ],
                featured: true,
              },
              {
                day: 'SUNDAY',
                sessions: ['CLOSED • Recovery Protocol', 'All members encouraged to rest', 'Facility maintenance day'],
                closed: true,
              },
            ].map((schedule) => (
              <div
                key={schedule.day}
                className={`border p-5 ${
                  schedule.featured
                    ? 'border-[#b31312] bg-[#1f1416]'
                    : schedule.closed
                    ? 'border-white/5 bg-[#0c0e12]'
                    : 'border-white/5 bg-[#1a1c20]'
                }`}
              >
                <div
                  className={`mb-3 font-[Oswald] text-xs font-bold uppercase tracking-wide ${
                    schedule.featured ? 'text-[#ff3b30]' : 'text-[#ffb4aa]'
                  }`}
                >
                  {schedule.day}
                </div>
                <ul className="space-y-2">
                  {schedule.sessions.map((session) => (
                    <li key={session} className="font-[Space_Grotesk] text-sm text-[#c9bfbd]">
                      • {session}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="border border-white/5 bg-[#1a1c20] p-4">
              <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                ⚡ POWER GUARANTEE
              </div>
              <p className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                Commercial-grade backup generators ensure zero interruptions during your session.
              </p>
            </div>

            <div className="border border-white/5 bg-[#1a1c20] p-4">
              <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                🔒 MEMBER ACCESS
              </div>
              <p className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                Active members receive priority equipment access and reserved rack slots during peak hours.
              </p>
            </div>

            <div className="border border-white/5 bg-[#1a1c20] p-4">
              <div className="mb-1 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                📅 HOLIDAY ADJUSTMENTS
              </div>
              <p className="font-[Space_Grotesk] text-xs text-[#a99e9c]">
                Schedule changes announced via WhatsApp broadcast to all active members 48 hours in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(179,19,18,.16),transparent_50%),#0c0e12] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-3 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
            BEGIN YOUR TRACK
          </div>
          <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
            READY TO FIND YOUR
            <br />
            DISCIPLINE?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
            Contact the front desk to discuss which training track fits your goals, or walk into Tosin Complex and ask us about a trial session so you can experience the floor firsthand.
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
              className="inline-flex items-centers gap-2 border border-white/10 bg-[#282a2e] px-6 py-3.5 font-[Oswald] text-sm font-bold uppercase tracking-wide transition hover:border-[#b31312]"
            >
              <span className="material-symbols-outlined text-base">call</span>
              ☎ CALL 0708 705 1788
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
