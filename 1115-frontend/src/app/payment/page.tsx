import { PageIntro } from "@/components/SiteSections";
import { CheckoutPanel } from "@/components/InteractiveForms";
export default function Payment(){return <main><PageIntro eyebrow="Membership checkout" title="Secure your membership." copy="Review the payment channels and membership summary. Online payment is not active on this site yet."/><section className="mx-auto max-w-6xl px-4 py-10 lg:px-8"><CheckoutPanel/></section></main>}
