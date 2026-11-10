import { ContactForm } from "@/components/InteractiveForms";
import { PageIntro } from "@/components/SiteSections";

export default function Contact() {
  return (
    <main className="overflow-hidden bg-[#111317] text-[#e2e2e8]">
      <PageIntro 
        eyebrow="Contact & location" 
        title="Come train with us." 
        copy="Reach Eleven Fifteen Fitness Gym at Tosin Shopping Complex, Ijoko Road, Ijoko, Ogun State."
      />
      
      {/* Contact Information and Form */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:grid-cols-2 lg:px-8">
        <div className="border border-white/10 bg-[#1a1c20] p-6">
          <h2 className="font-[Oswald] text-xl font-bold uppercase">Visit or call</h2>
          <p className="mt-4 font-[Space_Grotesk] text-sm leading-7 text-[#c9bfbd]">
            Tosin Shopping Complex<br/>
            Ijoko Road, Ijoko 112104<br/>
            Ogun State, Nigeria
          </p>
          <a href="tel:07087051788" className="mt-4 block font-[Space_Grotesk] font-bold text-[#ffb4aa]">
            0708 705 1788
          </a>
          <a href="https://www.instagram.com/1115fitnessgym/" className="mt-3 inline-block font-[Space_Grotesk] text-sm text-[#e4beb8]">
            Instagram · @1115fitnessgym
          </a>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Tosin+Shopping+Complex+Ijoko+Road+Ogun+State" 
            target="_blank" 
            rel="noreferrer" 
            className="mt-5 block bg-[#b31312] px-4 py-3 text-center font-[Oswald] text-xs font-bold uppercase tracking-widest transition hover:bg-[#c91615]"
          >
            Open map directions →
          </a>
        </div>
        
        <div className="border border-white/10 bg-[#1a1c20] p-6">
          <h2 className="mb-5 font-[Oswald] text-xl font-bold uppercase">Send an inquiry</h2>
          <ContactForm/>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="mx-auto max-w-7xl px-4 pb-12 lg:px-8">
        <div className="mb-4">
          <p className="font-[Oswald] text-xs font-bold uppercase tracking-[.16em] text-[#ffb4aa]">
            ● Our Location
          </p>
          <h2 className="mt-2 font-[Oswald] text-3xl font-bold uppercase">
            Find Us in Ijoko
          </h2>
          <p className="mt-2 font-[Space_Grotesk] text-sm text-[#c9bfbd]">
            Directly opposite King Palace, Alasia Bus Stop, Ijoko Road
          </p>
        </div>
        
        <div className="relative h-[400px] overflow-hidden border border-white/10 bg-[#1a1c20] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.2!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eleven Fifteen Fitness Gym Location"
            className="grayscale"
          />
          
          {/* Map Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#1a1c20]/95 p-4 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-[Oswald] text-lg font-bold uppercase">Eleven Fifteen Fitness Gym</h3>
                <p className="mt-1 font-[Space_Grotesk] text-xs text-[#c9bfbd]">
                  Tosin Shopping Complex, Alasia Bus Stop
                </p>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Tosin+Shopping+Complex+Ijoko+Road+Ogun+State"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 whitespace-nowrap bg-[#b31312] px-3 py-2 font-[Oswald] text-xs font-bold uppercase transition hover:bg-[#c91615]"
              >
                Get Directions
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Landmarks Section */}
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="border border-white/5 bg-[#1a1c20] p-4">
            <span className="material-symbols-outlined text-[#ffb4aa]">location_on</span>
            <h3 className="mt-2 font-[Oswald] text-sm font-bold uppercase">Landmark</h3>
            <p className="mt-1 font-[Space_Grotesk] text-xs text-[#a99e9c]">
              Opposite King Palace, Alasia Bus Stop
            </p>
          </div>
          
          <div className="border border-white/5 bg-[#1a1c20] p-4">
            <span className="material-symbols-outlined text-[#ffb4aa]">local_parking</span>
            <h3 className="mt-2 font-[Oswald] text-sm font-bold uppercase">Parking</h3>
            <p className="mt-1 font-[Space_Grotesk] text-xs text-[#a99e9c]">
              On-site parking available at complex
            </p>
          </div>
          
          <div className="border border-white/5 bg-[#1a1c20] p-4">
            <span className="material-symbols-outlined text-[#ffb4aa]">directions_bus</span>
            <h3 className="mt-2 font-[Oswald] text-sm font-bold uppercase">Transit</h3>
            <p className="mt-1 font-[Space_Grotesk] text-xs text-[#a99e9c]">
              Easy access via Ijoko Road buses
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
