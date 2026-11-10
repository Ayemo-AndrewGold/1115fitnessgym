"use client";

import Link from "next/link";

export default function Gallery() {
  // Gallery items: mixed videos and photos (still more videos than images)
  const galleryItems = [
    // Row 1: video, photo, photo, video
    { type: 'video', src: '/gym/videos/chest-shoulder.mp4', poster: '/gym/images_4.png', title: 'Heavy Squat PR', category: 'Strength' },
    { type: 'image', src: '/gym/image8.jpg', title: 'Free Weight Section', category: 'Facility' },
    { type: 'image', src: '/gym/image1.jpg', title: 'Smith Machine Area', category: 'Facility' },
    { type: 'video', src: '/gym/videos/heavy-iron-pr.mp4', poster: '/gym/images_17.png', title: 'Barbell Press', category: 'Bodybuilding' },
    
    // Row 2: photo, video, video, photo
    { type: 'image', src: '/gym/image2.jpg', title: 'Cardio Equipment', category: 'Facility' },
    { type: 'video', src: '/gym/videos/saturday-turf.mp4', poster: '/gym/images.png', title: 'Turf Aerobics', category: 'Cardio' },
    { type: 'video', src: '/gym/videos/community-energy.mp4', poster: '/gym/images_20.png', title: 'Core Circuit', category: 'Functional' },
    { type: 'image', src: '/gym/image3.webp', title: 'Training Floor', category: 'Facility' },
    
    // Row 3: video, photo, video, photo
    { type: 'video', src: '/gym/videos/glute-core.mp4', poster: '/gym/images_19.png', title: 'Dumbbell Rows', category: 'Strength' },
    { type: 'image', src: '/gym/image4.jpg', title: 'Workout Session', category: 'Training' },
    { type: 'video', src: '/gym/videos/gallery-workout-6.mp4', poster: '/gym/images_16.png', title: 'HIIT Training', category: 'Cardio' },
    { type: 'image', src: '/gym/image5.jpg', title: 'Equipment Detail', category: 'Facility' },
    
    // Row 4: photo, video, photo, video
    { type: 'image', src: '/gym/image6.jpg', title: 'Training Area', category: 'Facility' },
    { type: 'video', src: '/gym/videos/heavy-iron-pr.mp4', poster: '/gym/images_1.png', title: 'Bench Press', category: 'Bodybuilding' },
    { type: 'image', src: '/gym/image7.jpg', title: 'Group Training', category: 'Community' },
    { type: 'video', src: '/gym/videos/gallery-workout-8.mp4', poster: '/gym/images_2.png', title: 'Group Session', category: 'Community' },
    
    // Row 5: video, video, photo, photo
    { type: 'video', src: '/gym/videos/glute-core.mp4', poster: '/gym/images_22.png', title: 'Deadlift Form', category: 'Strength' },
    { type: 'video', src: '/gym/videos/chest-shoulder.mp4', poster: '/gym/logo_red_bg.png', title: 'Leg Day', category: 'Bodybuilding' },
    { type: 'image', src: '/gym/image9.jpg', title: 'Full Gym View', category: 'Facility' },
    { type: 'image', src: '/gym/cadio-fitness.jpg', title: '1115 Community', category: 'Brand' },
  ];

  return (
    <main className="overflow-hidden bg-[#111317] text-[#e2e2e8]">
      {/* Font imports */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 bg-[radial-gradient(ellipse_at_top,rgba(179,19,18,.22),transparent_55%),#111317] px-4 py-16 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-3 font-[Oswald] text-xs font-bold uppercase tracking-[.2em] text-[#ffb4aa]">● Training gallery</p>
          <h1 className="max-w-4xl font-[Oswald] text-5xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Inside Eleven Fifteen.
          </h1>
          <p className="mt-5 max-w-2xl font-[Space_Grotesk] text-base leading-7 text-[#e4beb8]">
            A look at training, movement and community at our gym in Ijoko, Ogun State.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-b border-white/5 bg-[#0c0e12] py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#b31312] px-4 py-2 font-[Oswald] text-xs font-bold uppercase tracking-wide">
              All ({galleryItems.length})
            </button>
            <button className="bg-[#1a1c20] px-4 py-2 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#282a2e]">
              Videos ({galleryItems.filter(item => item.type === 'video').length})
            </button>
            <button className="bg-[#1a1c20] px-4 py-2 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#282a2e]">
              Photos ({galleryItems.filter(item => item.type === 'image').length})
            </button>
            <button className="bg-[#1a1c20] px-4 py-2 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#282a2e]">
              Strength
            </button>
            <button className="bg-[#1a1c20] px-4 py-2 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#282a2e]">
              Cardio
            </button>
            <button className="bg-[#1a1c20] px-4 py-2 font-[Oswald] text-xs font-bold uppercase tracking-wide transition hover:bg-[#282a2e]">
              Community
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Portrait Videos + Images */}
      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-white/5 bg-[#1a1c20]"
              style={{ aspectRatio: item.type === 'video' ? '9/16' : '4/3' }}
            >
              {item.type === 'video' ? (
                <>
                  {/* Portrait Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={item.poster}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  
                  {/* Video Indicator */}
                  <div className="absolute right-2 top-2 z-10 flex items-center gap-1 bg-black/80 px-2 py-1">
                    <span className="material-symbols-outlined text-xs text-[#ffb4aa]">play_circle</span>
                    <span className="font-[Space_Grotesk] text-[10px] font-bold uppercase text-white">Video</span>
                  </div>
                </>
              ) : (
                <>
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </>
              )}

              {/* Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
                <span className="font-[Oswald] text-[10px] font-bold uppercase tracking-wide text-[#ffb4aa]">
                  {item.category}
                </span>
                <h3 className="mt-1 font-[Oswald] text-sm font-bold uppercase">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-[Space_Grotesk] text-xs text-[#b9b0ae]">
          Videos and images from training sessions at Eleven Fifteen Fitness Gym, Ijoko.
        </p>
      </section>

      {/* CTA Section */}
      <section className="mx-auto mb-12 max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border border-white/5 bg-[linear-gradient(100deg,#1a1c20,#281719)] p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-[Oswald] text-xs font-bold uppercase tracking-widest text-[#ffb4aa]">Start your training</p>
            <h2 className="mt-1 font-[Oswald] text-3xl font-bold uppercase">Ready to find your discipline?</h2>
            <p className="mt-2 font-[Space_Grotesk] text-sm text-[#c9bfbd]">Tosin Shopping Complex, Ijoko Road, Ogun State.</p>
          </div>
          <Link href="/membership" className="bg-[#b31312] px-5 py-3 font-[Oswald] text-xs font-bold uppercase tracking-widest transition hover:bg-[#c91615]">
            Explore membership →
          </Link>
        </div>
      </section>
    </main>
  );
}
