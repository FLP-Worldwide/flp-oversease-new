import React from 'react'

export default function HeroSection() {
  return (

    
    <section
  id="home"
  className="relative w-full min-h-[90vh]"
>
        {/* Background Image */}
        <img
          src="https://as2.ftcdn.net/jpg/05/15/52/33/1000_F_515523379_CndzPD31zPM38z2I0H3daEnJwkHINPgr.jpg"
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
                  Government Approved Recruitment
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Workforce Solutions for <span className="text-[#ffde49]"> Germany & Europe</span>
              </h1>

              {/* Subtitle */}
             <p className="text-lg font-medium text-white max-w-xl">
                Skilled & blue-collar hiring with visa, compliance and deployment
                handled end-to-end.
              </p>

              {/* CTA */}
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-blue-500 text-white
                  font-semibold rounded-full hover:bg-blue-400 transition">
                    Request a Callback
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 pt-6 text-white">
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
              </div>

            </div>
          </div>
        </div>
      </section>
  )
}
