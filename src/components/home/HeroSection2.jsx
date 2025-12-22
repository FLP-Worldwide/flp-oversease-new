import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] overflow-hidden"
    >
      {/* ===== Background Gradient ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6b2d89] via-[#4b79bb] to-[#c24e94]" />

      {/* Optional background image */}
      <img
        src="https://media.istockphoto.com/id/858569402/photo/portrait-of-a-factory-worker.jpg?s=612x612&w=0&k=20&c=ZWrnI74_PaquSQHpkUpU7tzUb9F_qtkWLueHENRAxCo="
        alt="Global Workforce Recruitment"
        className="absolute inset-0 w-full object-cover opacity-20"
      />

      {/* ===== CONTENT (INSIDE WHITE PANEL) ===== */}
      <div className="relative z-20 h-full flex items-start pt-[180px]">
        <div className="max-w-8xl mx-auto px-6 w-full">
          <div className="ml-auto w-[50%] space-y-6 bg-white  p-10 rounded-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-wider text-blue-900 font-semibold">
                Government Approved Recruitment
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-950 leading-tight">
              Workforce Solutions for
              <span className="block text-[#f4c430]">
                Germany & Europe
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600">
              Skilled & blue-collar hiring with visa, compliance and deployment
              handled end-to-end.
            </p>

            {/* CTA */}
            <button
              className="
                mt-4
                px-8 py-4
                bg-[#f4c430]
                text-blue-950
                font-semibold
                rounded-full
                hover:scale-[1.03]
                transition
              "
            >
              Request a Callback
            </button>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-blue-950">12K+</p>
                <p className="text-sm text-gray-500">Workers Deployed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-950">6</p>
                <p className="text-sm text-gray-500">EU Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-950">98%</p>
                <p className="text-sm text-gray-500">Success Rate</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
