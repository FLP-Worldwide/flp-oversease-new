"use client";
import React, {useState} from 'react'
import EnquiryModal from '../ui/EnquiryModal'

export default function HeroSection() {
    const [open, setOpen] = useState(false);
  return (

    <>
   <section
      id="home"
      className="relative w-full min-h-[98vh] flex items-center overflow-hidden"
    >

  <video
    src="/images/flp-overseas.mp4"          // <-- your video file path here
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Background Image */}
  {/* <img
    src="https://images.unsplash.com/photo-1758874384232-cfa79a5babf1?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Global Workforce Recruitment"
    className="absolute inset-0 w-full h-full object-cover"
  /> */}

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/50 via-blue-900/30 to-transparent" />

  {/* Content */}
  <div className="relative z-10 w-full flex items-center pt-[140px] md:pt-[180px] pb-10">
    <div className="max-w-6xl mx-auto px-4 md:px-6 text-center space-y-6">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5
        bg-white/10 backdrop-blur-md rounded-full border border-white/20">
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
        <span className="text-[10px] md:text-xs uppercase tracking-wider text-white font-semibold">
          Your Global Workforce Partner
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white leading-snug md:leading-tight px-2">
        Demand-Ready. <span className="text-[#ffde49]">Language-Trained.</span> Fully Compliant.
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto">
        FLP Overseas is a Government of India–approved overseas recruitment and workforce solutions organization,
        operating under the FLP Worldwide Group
        <a href="https://flpworldwide.com/" target="_blank" className="ml-1">
          FLP Global Service Private Limited
        </a>.
      </p>

      {/* CTA Buttons → Mobile Stacked / Desktop Side-by-Side */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4">
        <button 
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-400 transition"
        >
          Partner With FLP Overseas
        </button>

        <button 
          onClick={() => setOpen(true)}
          className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-blue-400 hover:border-blue-400 transition"
        >
          Apply for Overseas Jobs
        </button>
      </div>

    </div>
  </div>
</section>


 <EnquiryModal
  open={open}
  onClose={() => setOpen(false)}
  source="parter"
/>
</>
  )
}
