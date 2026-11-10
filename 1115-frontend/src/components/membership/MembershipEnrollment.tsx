"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";

type PlanKey = "standard" | "couples" | "household";
const plans: Record<PlanKey, { title: string; short: string; price: number; people: string; registration: number; waived: number }> = {
  standard: { title: "Monthly Standard", short: "Solo Standard", price: 28000, people: "1 Athlete • 30 Days", registration: 2000, waived: 0 },
  couples: { title: "Couples Membership", short: "Couples Pass", price: 54000, people: "2 Athletes • Save ₦4,000 Reg", registration: 4000, waived: 4000 },
  household: { title: "Family Membership", short: "Household Pro", price: 125000, people: "Up to 5 Athletes", registration: 10000, waived: 10000 },
};

const field = "mt-1 w-full min-w-0 border border-[#25282d] bg-[#13161a] px-3 py-3 text-sm text-[#e2e2e8] outline-none placeholder:text-[#777579] focus:border-[#b31312]";
const label = "block text-xs font-bold uppercase tracking-[.12em] text-[#e4beb8]";
const n = (value: number) => `₦${value.toLocaleString("en-NG")}`;

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? "";

declare global {
  interface Window {
    PaystackPop?: {
      setup: (config: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        metadata: any;
        callback: (response: any) => void;
        onClose: () => void;
      }) => {
        openIframe: () => void;
      };
    };
  }
}

export default function MembershipEnrollment() {
  const searchParams = useSearchParams();
  const initialPlan = searchParams.get("plan") ?? "";
  const planFromUrl: PlanKey = /couple/i.test(initialPlan) ? "couples" : /family|household/i.test(initialPlan) ? "household" : initialPlan ? "standard" : "couples";
  
  const [planKey, setPlanKey] = useState<PlanKey>(planFromUrl);
  const [notice, setNotice] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paystackLoaded, setPaystackLoaded] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    gender: "",
    dob: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
    partnerName: "",
    partnerPhone: "",
    partnerGoal: "",
    partnerDob: "",
    householdMembers: "",
    startDate: "",
    fitnessGoal: "",
    medicalDisclosure: "",
    termsAccepted: false,
  });

  const plan = plans[planKey];
  const total = plan.price + plan.registration - plan.waived;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const initiatePaystackPayment = () => {
    if (!PAYSTACK_PUBLIC_KEY) {
      setNotice("Checkout key is missing. Set NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY in 1115-frontend/.env.local, then restart the dev server.");
      return;
    }
    if (!paystackLoaded || !window.PaystackPop) {
      setNotice("Payment system is loading. Please try again.");
      return;
    }

    if (!formData.email || !formData.fullName) {
      setNotice("Please provide your email and full name to proceed with payment.");
      return;
    }

    setIsProcessing(true);
    setNotice("");

    // Generate unique reference
    const reference = `1115-${planKey}-${Date.now()}`;

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount: total * 100, // Paystack expects amount in kobo (multiply by 100)
      currency: "NGN",
      ref: reference,
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: formData.fullName
          },
          {
            display_name: "Phone Number",
            variable_name: "phone",
            value: formData.phone
          },
          {
            display_name: "Membership Plan",
            variable_name: "membership_plan",
            value: plan.title
          },
          {
            display_name: "Plan Type",
            variable_name: "plan_type",
            value: planKey
          }
        ]
      },
      callback: (response: any) => {
        setIsProcessing(false);
        // Payment successful
        setNotice(`Payment successful! Reference: ${response.reference}. Our team will contact you shortly to complete your enrollment at the gym.`);
        
        // TODO: Send this data to your backend to verify payment and save enrollment
        console.log("Payment Response:", response);
        console.log("Form Data:", formData);
        
        // You can send data to your backend here
        // fetch('/api/verify-payment', {
        //   method: 'POST',
        //   body: JSON.stringify({ reference: response.reference, formData })
        // });
      },
      onClose: () => {
        setIsProcessing(false);
        setNotice("Payment was closed. You can try again when ready.");
      }
    });

    handler.openIframe();
  };

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (!formData.termsAccepted) {
      setNotice("Please accept the terms and conditions to proceed.");
      return;
    }

    initiatePaystackPayment();
  }

  return <>
    <Script
      src="https://js.paystack.co/v1/inline.js"
      strategy="afterInteractive"
      onReady={() => setPaystackLoaded(true)}
      onError={() => setNotice("Could not load Paystack checkout. Check your connection and try again.")}
    />
    <div className="mx-auto max-w-7xl px-4 pb-4 pt-5 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3 border border-white/5 bg-[#1a1c20] px-4 py-3 text-xs font-bold uppercase tracking-[.13em] text-[#e4beb8] sm:text-sm">
        <span><i className="mr-2 inline-block h-1.5 w-1.5 bg-[#b31312]"/>Official athlete admission portal</span>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-[#b8acab]"><span>▣ Online payment enabled</span><span>◉ Instant enrollment confirmation</span><span>↗ WhatsApp support available</span></div>
      </div>
      <div className="flex flex-col justify-between gap-4 py-5 sm:flex-row sm:items-end">
        <div><p className="text-xs font-bold uppercase tracking-[.18em] text-[#ffb4aa]">Discipline · Rigor · Result</p><h1 className="mt-1 font-[Oswald] text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">Membership enrollment &amp; checkout</h1><p className="mt-2 max-w-2xl text-base leading-6 text-[#c9bfbd]">Choose your membership, provide your details, and complete payment securely with Paystack.</p></div>
        <div className="flex items-center gap-3 border border-white/5 bg-[#1a1c20] p-3"><span className="grid h-8 w-8 place-items-center bg-[#281719] text-[#ffb4aa]">◈</span><div><p className="text-xs font-bold uppercase">Eleven Fifteen Gym</p><p className="mt-1 text-xs text-[#b8acab]">Tosin Complex · Ijoko Road</p></div></div>
      </div>
      <ol className="grid grid-cols-2 gap-1.5 md:grid-cols-4">{[["01","Tier selected","Choose membership"],["02","Your details","Personal info"],["03","Payment method","Secure checkout"],["04","Confirmation","Start training"]].map(([num,title,desc],i)=><li key={num} className={`border-b-2 px-3 py-2 ${i===0?"border-[#b31312] bg-[#1e2024]":"border-[#2d3035] bg-[#1a1c20]"}`}><p className="text-xs font-bold text-[#ffb4aa]">STEP {num}</p><p className="mt-0.5 text-sm font-bold uppercase">{title}</p><p className="mt-0.5 text-xs text-[#b8acab]">{desc}</p></li>)}</ol>
    </div>

    <div className="mx-auto grid max-w-7xl items-start gap-5 px-4 pb-12 sm:px-6 lg:grid-cols-[1.42fr_.95fr] lg:px-8">
      <div className="space-y-5">
        <section className="border border-white/5 bg-[#1a1c20] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.15em] text-[#ffb4aa]">Configured package</p><h2 className="mt-1 font-[Oswald] text-xl font-bold uppercase">Active enrollment tier</h2></div><span className="bg-[#282a2e] px-2 py-1 text-xs font-bold uppercase text-[#e4beb8]">{planKey === "standard" ? "Standard" : "Special bundle"}</span></div>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">{(Object.entries(plans) as [PlanKey, typeof plans[PlanKey]][]).map(([key,item])=><button type="button" key={key} onClick={()=>{setPlanKey(key);setNotice("")}} aria-pressed={planKey===key} className={`min-h-[76px] border p-3 text-left transition ${planKey===key?"border-[#b31312] bg-[#111317]":"border-transparent bg-[#282a2e] hover:border-white/10"}`}><span className="block text-xs font-bold uppercase tracking-wider text-[#e4beb8]">{item.short}</span><span className="mt-1 block font-[Oswald] text-xl font-bold">{n(item.price)}</span><span className="mt-0.5 block text-xs text-[#b8acab]">{item.people}</span></button>)}</div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/5 pt-3 text-xs font-bold uppercase text-[#c9bfbd]"><span>♧ &nbsp;{planKey === "standard" ? "1 Athlete" : planKey === "couples" ? "2 Athletes Total" : "Up to 5 Athletes"}</span><span>◉ &nbsp;{plan.waived ? "Registration waived" : "Registration applies"}</span><span>⚒ &nbsp;Full gym access</span><span>▱ &nbsp;Locker included</span></div>
        </section>

        <form id="enrollment-form" onSubmit={submit} className="space-y-5">
          <section className="border border-white/5 bg-[#1a1c20] p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2"><span className="grid h-6 w-6 place-items-center bg-[#b31312] text-xs font-black">1</span><div><h2 className="font-[Oswald] text-base font-bold uppercase">Primary athlete profile</h2><p className="text-xs text-[#b8acab]">Account holder and enrollment contact</p></div></div>
            <div className="grid gap-x-3 gap-y-3 sm:grid-cols-2">
              <label className={label}>Full legal name *<input required name="fullName" value={formData.fullName} onChange={handleInputChange} autoComplete="name" className={field} placeholder="Your full name"/></label>
              <label className={label}>Email address *<input required type="email" name="email" value={formData.email} onChange={handleInputChange} autoComplete="email" className={field} placeholder="you@example.com"/></label>
              <label className={label}>Phone number *<input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} autoComplete="tel" className={field} placeholder="080..."/></label>
              <label className={label}>WhatsApp contact<input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} className={field} placeholder="If different from phone"/></label>
              <label className={label}>Gender identity<select name="gender" value={formData.gender} onChange={handleInputChange} className={field}><option value="">Select an option</option><option>Female</option><option>Male</option><option>Prefer not to say</option></select></label>
              <label className={label}>Date of birth<input type="date" name="dob" value={formData.dob} onChange={handleInputChange} className={field}/></label>
              <label className={`${label} sm:col-span-2`}>Residential address<input name="address" value={formData.address} onChange={handleInputChange} autoComplete="street-address" className={field} placeholder="Street, area, city"/></label>
              <label className={label}>Emergency contact<input name="emergencyContact" value={formData.emergencyContact} onChange={handleInputChange} className={field} placeholder="Contact name"/></label>
              <label className={label}>Emergency phone &amp; relationship<input type="tel" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} className={field} placeholder="Phone and relationship"/></label>
            </div>
          </section>

          {planKey === "couples" && <section className="border border-white/5 bg-[#1a1c20] p-4 sm:p-5"><div className="mb-4 flex items-center justify-between gap-3"><div className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center bg-[#b31312] text-xs font-black">2</span><div><h2 className="font-[Oswald] text-base font-bold uppercase">Partner athlete details</h2><p className="text-xs text-[#b8acab]">Second athlete on the couples pass</p></div></div><span className="bg-[#282a2e] px-2 py-1 text-xs font-bold uppercase">Athlete 02</span></div><div className="grid gap-x-3 gap-y-3 sm:grid-cols-2"><label className={label}>Partner full name *<input required name="partnerName" value={formData.partnerName} onChange={handleInputChange} className={field} placeholder="Partner's full name"/></label><label className={label}>Partner phone / WhatsApp<input type="tel" name="partnerPhone" value={formData.partnerPhone} onChange={handleInputChange} className={field} placeholder="080..."/></label><label className={label}>Partner training goal<select name="partnerGoal" value={formData.partnerGoal} onChange={handleInputChange} className={field}><option value="">Choose a goal</option><option>Cardio</option><option>Bodybuilding</option><option>Weight loss</option><option>General fitness</option></select></label><label className={label}>Partner date of birth<input type="date" name="partnerDob" value={formData.partnerDob} onChange={handleInputChange} className={field}/></label></div></section>}

          {planKey === "household" && <section className="border border-white/5 bg-[#1a1c20] p-4 sm:p-5"><div className="mb-3 flex items-center gap-2"><span className="grid h-6 w-6 place-items-center bg-[#b31312] text-xs font-black">2</span><div><h2 className="font-[Oswald] text-base font-bold uppercase">Household member details</h2><p className="text-xs text-[#b8acab]">Add the names of other household athletes</p></div></div><label className={label}>Additional household members<textarea rows={3} name="householdMembers" value={formData.householdMembers} onChange={handleInputChange} className={field} placeholder="List each member's full name and contact number"/></label></section>}

          <section className="border border-white/5 bg-[#1a1c20] p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2"><span className="grid h-6 w-6 place-items-center bg-[#b31312] text-xs font-black">{planKey === "standard" ? "2" : "3"}</span><div><h2 className="font-[Oswald] text-base font-bold uppercase">Training ambition &amp; scheduling</h2><p className="text-xs text-[#b8acab]">Help us understand your training preferences</p></div></div>
            <div className="grid gap-x-3 gap-y-3 sm:grid-cols-2"><label className={label}>Preferred start date<input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} className={field}/></label><label className={label}>Primary fitness goal<select name="fitnessGoal" value={formData.fitnessGoal} onChange={handleInputChange} className={field}><option value="">Select your goal</option><option>Cardio fitness</option><option>Bodybuilding &amp; strength</option><option>Weight loss</option><option>General fitness</option></select></label><label className={`${label} sm:col-span-2`}>Medical or physical disclosures (optional)<textarea rows={3} name="medicalDisclosure" value={formData.medicalDisclosure} onChange={handleInputChange} className={field} placeholder="Share any relevant training considerations"/></label></div>
            <label className="mt-3 flex items-start gap-2 border border-white/5 bg-[#282a2e] p-3 text-sm leading-5 text-[#c9bfbd]"><input required type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleInputChange} className="mt-0.5 accent-[#b31312]"/><span>I confirm that the details provided are accurate and agree to the gym&apos;s membership terms, privacy policy, and facility safety guidelines.</span></label>
          </section>
        </form>
      </div>

      <aside className="space-y-3 lg:sticky lg:top-20">
        <section className="border border-white/5 bg-[#1a1c20] p-4 sm:p-5"><div className="flex items-center justify-between gap-2"><h2 className="font-[Oswald] text-lg font-bold uppercase">Order summary</h2><span className="bg-[#282a2e] px-2 py-1 text-xs font-bold uppercase text-[#ffb4aa]">{planKey === "standard" ? "Standard tier" : "Special bundle"}</span></div><div className="mt-4 space-y-2 text-sm"><div className="flex justify-between gap-3"><span className="text-[#c9bfbd]">{plan.title} (1 month)</span><b>{n(plan.price)}</b></div><div className="flex justify-between gap-3"><span className="text-[#c9bfbd]">Registration & setup ({planKey === "standard" ? "1" : planKey === "couples" ? "2" : "up to 5"} athlete{planKey === "standard" ? "" : "s"})</span><b>{n(plan.registration)}</b></div>{plan.waived>0&&<div className="flex justify-between gap-3 text-[#ffb4aa]"><span>Bundle registration waiver</span><b>−{n(plan.waived)}</b></div>}<div className="flex justify-between gap-3"><span className="text-[#c9bfbd]">Locker &amp; facility access</span><b>Included</b></div></div><div className="mt-4 flex items-center justify-between border-y border-white/5 bg-[#111317] px-3 py-3"><div><p className="text-xs font-bold uppercase tracking-wider text-[#e4beb8]">Total payable</p><p className="text-xs text-[#9f9694]">Secure payment via Paystack</p></div><b className="font-[Oswald] text-3xl text-[#ffb4aa]">{n(total)}</b></div>
          <div className="mt-4 border border-[#b31312]/40 bg-[#13161a] p-3"><p className="text-xs font-bold uppercase tracking-widest text-[#ffb4aa]">Secure checkout with Paystack</p><p className="mt-1 text-sm leading-5 text-[#b8acab]">Pay by card, bank transfer, or USSD in Paystack’s secure payment window.</p></div>
          <button type="submit" form="enrollment-form" disabled={isProcessing} className="mt-3 w-full bg-[#b31312] px-3 py-3 text-sm font-bold uppercase tracking-widest transition hover:bg-[#c91615] disabled:bg-[#666] disabled:cursor-not-allowed">{isProcessing ? "Opening secure checkout…" : "Continue to Paystack checkout"}</button>
          <a href="https://wa.me/2347087051788" target="_blank" rel="noreferrer" className="mt-2 block bg-[#282a2e] px-3 py-2.5 text-center text-xs font-bold uppercase tracking-wide transition hover:bg-[#3a3c3e]">WhatsApp front desk</a>
          {notice&&<p role="status" className="mt-3 whitespace-pre-line border border-[#b31312]/60 bg-[#241619] p-3 text-sm leading-5 text-[#ffb4aa]">{notice}</p>}
          <div className="mt-3 flex items-center gap-2 text-xs text-[#9f9694]"><svg className="h-4 w-4 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg><span>Secured by Paystack • PCI DSS Compliant</span></div>
        </section>
      </aside>
    </div>
  </>;
}

