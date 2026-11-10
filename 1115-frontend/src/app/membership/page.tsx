import Link from "next/link";

export default function Membership() {
  return (
    <main className="overflow-hidden bg-[#111317] text-[#e2e2e8]">
      {/* Hero Section */}
      <section className="relative border-b border-white/5 bg-[radial-gradient(ellipse_at_center,rgba(179,19,18,.18),transparent_60%),#0c0e12]">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          >
            <source src="/gym/hero-video.mp4" type="video/mp4" />
            <source src="/gym/videos/membership-hero.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-8">
            <div className="mb-3 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              OFFICIAL 1115 VERIFIED MEMBERSHIP PORTAL
            </div>
            <h1 className="max-w-4xl font-[Oswald] text-5xl font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
              MEMBERSHIP ENROLLMENT & CHECKOUT
            </h1>
            <p className="mt-6 max-w-3xl font-[Space_Grotesk] text-base leading-7 text-[#c9bfbd]">
              Secure your tier, register your information, and lock in premium commitment plans. All enrollment data stays in your current browser session unless you submit to complete checkout on the frontend.
            </p>
          </div>

          {/* Process Steps */}
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              { step: '01', title: 'SELECT TIER', desc: 'Choose your pricing tier' },
              { step: '02', title: 'PRIMARY ATHLETE', desc: 'Your enrollment info' },
              { step: '03', title: 'PARTNER/ADD INFO', desc: 'If duo or group plan' },
              { step: '04', title: 'CONFIRM & PAY', desc: 'Order checkout & total' },
            ].map((item) => (
              <div key={item.step} className="border border-white/5 bg-[#1a1c20] p-4">
                <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  STEP {item.step}
                </div>
                <div className="font-[Oswald] text-sm font-bold uppercase">{item.title}</div>
                <p className="mt-1 font-[Space_Grotesk] text-xs text-[#a99e9c]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#4ade80]">verified</span>
            <span className="font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#4ade80]">
              VERIFIED 1115 SYSTEM
            </span>
          </div>
        </div>
      </section>

      {/* Enrollment Tiers */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-2 font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
              CONFIRMED PACKAGE
            </div>
            <h2 className="font-[Oswald] text-4xl font-bold uppercase leading-tight sm:text-5xl">
              ACTIVE ENROLLMENT TIER
            </h2>
            <p className="mt-3 max-w-2xl font-[Space_Grotesk] text-base text-[#a99e9c]">
              Select your commitment tier, view included perks, and proceed to checkout. All pricing shown is in Nigerian Naira (₦).
            </p>
          </div>

          {/* Tier Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Per Standard */}
            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-4 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#98a2b3]">
                PER STANDARD
              </div>
              <div className="mb-2 font-[Oswald] text-4xl font-bold">₦28,000</div>
              <div className="font-[Space_Grotesk] text-xs text-[#98a2b3]">
                Single Athlete • Monthly Basis
              </div>

              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                {[
                  '✓ Unlimited Floor Access',
                  '✓ All Floor Disciplines',
                  '✓ Full Power Backup',
                  '✓ Locker Privileges',
                ].map((item) => (
                  <li key={item} className="font-[Space_Grotesk] text-sm text-[#c9bfbd]">
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/membership-application?plan=standard" className="mt-6 block w-full border border-white/10 bg-[#282a2e] px-5 py-3 text-center font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#333539]">
                SELECT TIER
              </Link>
            </div>

            {/* Duo Tier - Featured */}
            <div className="relative border-2 border-[#b31312] bg-[linear-gradient(135deg,#261719,#1a1c20)] p-6">
              <div className="absolute -right-1 -top-3 bg-[#b31312] px-3 py-1 font-[Oswald] text-[10px] font-bold uppercase tracking-wide">
                MOST POPULAR
              </div>

              <div className="mb-4 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                DUO TIER • COUPLES
              </div>
              <div className="mb-2 font-[Oswald] text-4xl font-bold">₦54,000</div>
              <div className="font-[Space_Grotesk] text-xs text-[#98a2b3]">
                2 Athletes • Monthly + ₦0 Reg
              </div>

              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                {[
                  '✓ Full Floor Access (2 Members)',
                  '✓ All Disciplines Included',
                  '✓ Free Group Aerobics',
                  '✓ Changing Room & Lockers',
                ].map((item) => (
                  <li key={item} className="font-[Space_Grotesk] text-sm text-[#c9bfbd]">
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/membership-application?plan=couples" className="mt-6 block w-full bg-[#b31312] px-5 py-3 text-center font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#c91615]">
                SELECT TIER
              </Link>
            </div>

            {/* Premier Household */}
            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-4 font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#98a2b3]">
                HOUSEHOLD PLAN
              </div>
              <div className="mb-2 font-[Oswald] text-4xl font-bold">₦125,000</div>
              <div className="font-[Space_Grotesk] text-xs text-[#98a2b3]">
                Up to 5 Members • Monthly
              </div>

              <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                {[
                  '✓ 5 Full Facility Passes',
                  '✓ Baseline Assessments',
                  '✓ Priority Aerobics Access',
                  '✓ Custom Training Plans',
                ].map((item) => (
                  <li key={item} className="font-[Space_Grotesk] text-sm text-[#c9bfbd]">
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/membership-application?plan=family" className="mt-6 block w-full border border-white/10 bg-[#282a2e] px-5 py-3 text-center font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#333539]">
                SELECT TIER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Athlete Profile */}
      <section className="border-b border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center bg-[#b31312] font-[Oswald] text-sm font-bold">
              01
            </div>
            <div>
              <div className="font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                ENROLLMENT STEP 01
              </div>
              <h2 className="font-[Oswald] text-2xl font-bold uppercase">PRIMARY ATHLETE PROFILE</h2>
            </div>
          </div>

          <div className="space-y-6 border border-white/5 bg-[#1a1c20] p-6">
            {/* Form Fields */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  FULL LEGAL NAME *
                </label>
                <input
                  type="text"
                  placeholder="First name, Middle, Surname"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  ACTIVE EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  placeholder="your.email@domain.com"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  PHONE NUMBER (CALLING) *
                </label>
                <input
                  type="tel"
                  placeholder="0906 4408 9055"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  WHATSAPP CONTACT (BEST ALERTS) *
                </label>
                <input
                  type="tel"
                  placeholder="0906 5678 9012"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  GENDER IDENTITY *
                </label>
                <select className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white focus:border-[#b31312] focus:outline-none">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary / Prefer not to disclose</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  DATE OF BIRTH *
                </label>
                <input
                  type="date"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white focus:border-[#b31312] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  RESIDENTIAL ADDRESS (LAGOS / OGUN / OTHERS) *
                </label>
                <input
                  type="text"
                  placeholder="Street, Estate, District, LGA and State. Optional House# or Block."
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  PREFERRED WORKOUT PERSON
                </label>
                <select className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white focus:border-[#b31312] focus:outline-none">
                  <option>Cardio & Endurance Focus</option>
                  <option>Bodybuilding & Strength Focus</option>
                  <option>Weight Loss & Aerobics Focus</option>
                  <option>Combat & Conditioning Focus</option>
                  <option>Varied / Multi-Discipline Training</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  EMERGENCY CONTACT PERSON
                </label>
                <input
                  type="text"
                  placeholder="Full Name, Relationship (Spouse / Parent / Sibling), Contact Phone# if Available"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Athlete Details */}
      <section className="border-b border-white/5 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center bg-[#b31312] font-[Oswald] text-sm font-bold">
              02
            </div>
            <div>
              <div className="font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                OPTIONAL — REQUIRED IF2
              </div>
              <h2 className="font-[Oswald] text-2xl font-bold uppercase">PARTNER ATHLETE DETAILS</h2>
              <p className="mt-1 font-[Space_Grotesk] text-sm text-[#98a2b3]">
                Required only if you selected Duo Tier (Couples) or Premier Household (Family) membership
              </p>
            </div>
          </div>

          <div className="space-y-6 border border-white/5 bg-[#1a1c20] p-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  PARTNER FULL NAME (IF APPLICABLE)
                </label>
                <input
                  type="text"
                  placeholder="Full name of 2nd athlete (if Duo/Couples)"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  PARTNER WHATSAPP / CALLING
                </label>
                <input
                  type="tel"
                  placeholder="0900 000 0000"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  PARTNER IDENTITY / PRONOUN
                </label>
                <select className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white focus:border-[#b31312] focus:outline-none">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Non-binary / Prefer not to disclose</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                  PARTNER DATE OF BIRTH
                </label>
                <input
                  type="date"
                  className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white focus:border-[#b31312] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Ambitions & Scheduling */}
      <section className="border-b border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="font-[Oswald] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
              OPTIONAL ONBOARDING
            </div>
            <h2 className="font-[Oswald] text-2xl font-bold uppercase">
              TRAINING AMBITIONS & SCHEDULING
            </h2>
            <p className="mt-2 font-[Space_Grotesk] text-sm text-[#98a2b3]">
              Help us understand your goals and preferred schedule. Optional but recommended.
            </p>
          </div>

          <div className="space-y-6 border border-white/5 bg-[#1a1c20] p-6">
            <div>
              <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                TARGET FLOOR ENTRY TIME
              </label>
              <select className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white focus:border-[#b31312] focus:outline-none">
                <option>06:00-09:00 (Early Morning)</option>
                <option>09:00-12:00 (Late Morning)</option>
                <option>12:00-15:00 (Midday)</option>
                <option>15:00-18:00 (Afternoon)</option>
                <option>18:00-21:30 (Evening Peak)</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                PRIMARY DISCIPLINE (OPTIONAL)
              </label>
              <select className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white focus:border-[#b31312] focus:outline-none">
                <option>Cardio Conditioning & VO2 Max</option>
                <option>Hypertrophy Bodybuilding / Strength Iron</option>
                <option>Weight Loss & Metabolic Aerobics</option>
                <option>Combat Conditioning & Agility</option>
                <option>Multi-Discipline / Varied Training</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-[Space_Grotesk] text-xs font-bold uppercase tracking-wide text-[#ffb4aa]">
                MEDICAL OR PHYSICAL DISCLAIMERS (OPTIONAL)
              </label>
              <textarea
                rows={3}
                placeholder="Any joint limitations, past injuries, heart conditions, or dietary restrictions our coaches should be aware of. Everything stays confidential."
                className="w-full border border-white/10 bg-[#13161c] px-4 py-3 font-[Space_Grotesk] text-sm text-white placeholder-[#5d6578] focus:border-[#b31312] focus:outline-none"
              ></textarea>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout call to action */}
      <section className="border-y border-white/5 bg-[#0c0e12] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">Secure membership checkout</p>
          <h2 className="mt-3 font-[Oswald] text-3xl font-bold uppercase sm:text-4xl">Choose your tier and get started</h2>
          <p className="mx-auto mt-3 max-w-2xl font-[Space_Grotesk] text-sm leading-6 text-[#c9bfbd]">Select a membership above, enter your athlete details, then pay securely through Paystack by card, bank transfer, or USSD.</p>
          <Link href="/membership-application" className="mt-7 inline-flex bg-[#b31312] px-7 py-4 font-[Oswald] text-sm font-bold uppercase tracking-wide transition hover:bg-[#c91615]">Continue to membership checkout</Link>
        </div>
      </section>

      {/* Footer Help */}
      <section className="border-t border-white/5 bg-[#0c0e12] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-3 font-[Oswald] text-sm font-bold uppercase">
                STRUGGLING TO FILL THIS ONLINE?
              </div>
              <p className="font-[Space_Grotesk] text-sm leading-6 text-[#b8acab]">
                Walk straight into the gym at Tosin Complex, Ijoko Road. Front desk staff can walk you through the same enrollment process in-person, show you the floor, and finalize your membership instantly.
              </p>
            </div>

            <div className="border border-white/5 bg-[#1a1c20] p-6">
              <div className="mb-3 font-[Oswald] text-sm font-bold uppercase">
                QUICK CONTACT • DESK SUPPORT
              </div>
              <div className="space-y-2">
                <a
                  href="tel:07087051788"
                  className="flex items-center gap-2 font-[Space_Grotesk] text-sm font-semibold text-[#ffb4aa]"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  0708 705 1788
                </a>
                <a
                  href="tel:09067408089"
                  className="flex items-center gap-2 font-[Space_Grotesk] text-sm font-semibold text-[#ffb4aa]"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  0906 740 8089
                </a>
                <a
                  href="https://wa.me/2347087051788"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-[Space_Grotesk] text-sm font-semibold text-[#ffb4aa]"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  WhatsApp Front Desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
