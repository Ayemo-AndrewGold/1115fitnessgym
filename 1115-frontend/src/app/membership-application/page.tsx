import { Suspense } from "react";
import MembershipEnrollment from "@/components/membership/MembershipEnrollment";

export default function MembershipApplication() {
  return <main className="min-h-screen bg-[#111317] text-[#e2e2e8]">
    <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet"/>
    <Suspense fallback={<div className="mx-auto min-h-96 max-w-7xl px-4 py-16 text-sm text-[#c9bfbd]">Loading enrollment form…</div>}><MembershipEnrollment/></Suspense>
  </main>;
}
