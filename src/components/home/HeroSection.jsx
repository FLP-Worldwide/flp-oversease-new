"use client";
import React, {useState} from 'react'
import EnquiryModal from '../ui/EnquiryModal'

export default function HeroSection() {
    const [open, setOpen] = useState(false);
  return (

    <>
    <section
  id="home"
  className="relative w-full min-h-[90vh]"
>
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1759763823587-c8bd07fca246?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Global Workforce Recruitment"
          className="absolute inset-0 w-full min-h-[90vh] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent" />

        {/* Content */}
        <div
            className="
              relative z-10
              h-full
              flex items-center
              pt-[180px]   /* 👈 HEADER GAP HERE */
            "
          >

          <div className="max-w-3xl ml-[8%] px-6">
            <div className="max-w-xl space-y-6">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2
                bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-white font-semibold">
                  Your Global Workforce Partner
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Demand-Ready. <span className="text-[#ffde49]"> Language-Trained. </span> Fully Compliant.
              </h1>

              {/* Subtitle */}
             <p className="text-lg font-medium text-white max-w-xl">
                FLP Overseas is a Government of India–approved overseas recruitment and workforce solutions organization, operating under the FLP Worldwide Group <a href="https://flpworldwide.com/" target='_blank' className='underline'>FLP Global Service Private Limited</a>.

              </p>

              {/* CTA */}
              <div className="flex gap-4">
                <button  onClick={() => setOpen(true)} className="px-8 py-4 bg-blue-500 text-white
                  font-semibold rounded-full hover:bg-blue-400 transition">
                    Partner With FLP Overseas
                </button>
              </div>

              {/* Quick Stats */}
                {/* <div className="flex gap-8 pt-6 text-white">
                  <div>
                    <p className="text-3xl font-bold">12K+</p>
                    <p className="text-sm opacity-80">Workers Deployed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">6</p>
                    <p className="text-sm opacity-80">EU Countries</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">98%</p>
                    <p className="text-sm opacity-80">Success Rate</p>
                  </div>
                </div> */}

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
