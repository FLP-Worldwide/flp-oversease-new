"use client";

import { useState } from "react";
import { ArrowRight, Globe, GraduationCap, Plane, CheckCircle } from "lucide-react";
import Image from 'next/image';
import NavLink from '../../../components/ui/NavLink';

export default function StudyAbroadPage() {
  const [step, setStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);


const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  program: "",
  intake: "",
  destination: "",
  loan: "",
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const submitStep1 = () => {
  setStep(2);
};

const submitAll = async () => {
  await fetch("/api/study", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  setShowThankYou(true);
  setStep(1);
};

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Himachal Pradesh",
  "Haryana",
  "Jharkhand",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
];

    const items = [
        { icon: "🤝", value: "850+", label: "End to End Support", color: "bg-blue-50" },
        { icon: "🏆", value: "60,000+", label: "Curated – Expert-led Application Assistance", color: "bg-orange-50" },
        { icon: "🎓", value: "Up to 50%*", label: "Public University First Approach", color: "bg-purple-50" },
        { icon: "📚", value: "₹8 Lakhs*", label: "Tech-based Solution", color: "bg-green-50" }
    ];
    const advantages = [
        { title: "Finding the Program", subtitle: "That's Right for You", icon: "📍" },
        { title: "Curated Expert-led", subtitle: "Application Assistance", icon: "✨" },
        { title: "English Assessment", subtitle: "Test Prep On-the-go", icon: "✍️" },
        { title: "Hacking thy Interviews", subtitle: "& the All-important VISA", icon: "🛡️" },
        { title: "Solving for Money", subtitle: "Education Loans Made Easy", icon: "💳" },
        { title: "Making Sure You Stay Right,", subtitle: "Pre-departure & Housing", icon: "🏠" }
    ];

    const countries = [

        { name: "Germany", flag: "🇩🇪", active: true },
    ];

    const universities = [
        { name: "Munich Business School", loc: "Munich, Germany", count: "22+ Courses", logo: "M" },
        { name: "EBS Universität", loc: "Oestrich-Winkel, Germany", count: "9+ Courses", logo: "E" },
        { name: "Steinbeis University", loc: "Berlin, Germany", count: "27+ Courses", logo: "S" },
        { name: "SRH Hochschulen", loc: "Heidelberg, Germany", count: "149+ Courses", logo: "H" },
        { name: "FOM University", loc: "Essen, Germany", count: "14+ Courses", logo: "F" },
        { name: "PFH Private Hochschule", loc: "Göttingen, Germany", count: "10+ Courses", logo: "P" }
    ];
    const stories = [
        { name: "Kshitij", from: "Delhi", to: "United Kingdom", text: "My FLPOversease coach made studying abroad a breeze. From university shortlisting to visa application, they guided me every step of the way.", tag: "Data Science", partner: "Uni of Birmingham" },
        { name: "Samad", from: "Gujarat", to: "United Kingdom", text: "Extremely satisfied with FLPOversease for my college application process. Deserves a perfect 5/5 rating!", tag: "Data Science", partner: "Queen Mary Uni" },
        { name: "Shubham", from: "Telangana", to: "United States", text: "Smooth process, supportive team, highly satisfied with FLPOversease's loan experience. Great service!", tag: "Sciences", partner: "Uni of Illinois" },
        { name: "Naveenkumar", from: "Karnataka", to: "United States", text: "I applied to 4 universities and I got offers from 2 universities. FLPOversease helped me through entire process to pursue masters.", tag: "Data Science", partner: "Central Michigan" },
        { name: "Shreya", from: "Noida", to: "Germany", text: "FLPOversease is proactive, detail-oriented, and trustworthy. They made my study abroad dream a breeze. Shoutout to the team for excellence!", tag: "Management", partner: "BSBI Berlin" },
        { name: "Hanna", from: "Maharashtra", to: "Canada", text: "FLPOversease made it incredibly convenient. Deepa, the consultant, provided excellent guidance. I'm thrilled with the support.", tag: "Data Science", partner: "Humber College" }
    ];

  return (
    <>
     <div className="relative min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 py-3 shadow-sm">
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer">
          
           <NavLink href={`/en/`}>
              <Image
                src={ '/images/new1.png'}
                alt="FLP Overseas Logo"
                width={200}
                height={40}
                className="object-contain"
                priority
            /></NavLink>
            <h3 className="text-gray-500 font-semibold">

              Study Abroad
            </h3>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-2 font-semibold text-sm text-slate-600 border border-slate-200 px-5 py-2 rounded-md bg-slate-100">
            <span className="opacity-80 font-normal">Support:</span>
            <span>+91 81491-33730</span>
          </div>
          {/* <button className="bg-[#0046AD] text-white px-5 py-2 rounded-md font-bold text-xs hover:bg-[#00368a] transition-all shadow-sm active:scale-95">
            Free Consultation
          </button> */}
        </div>
      </div>
    </nav>


      <main>
        <section className="relative min-h-[600px] flex items-center mt-[60px] py-12 overflow-hidden bg-slate-900">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?" 
          className="w-full h-full object-cover object-center"
          alt="University Campus"
        />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side Content */}
          <div className="flex-1 text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-md">
              Take the First Step to <br />
              <span className="text-white">STUDY ABROAD</span>
            </h1>
            
            <div className="space-y-3 max-w-lg">
              {[
                "Free Counselling*",
                "University Application*",
                "Loan Assistance*",
                "Visa & Accommodation*",
                "Uniessential*",
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="bg-[#10B981] rounded-full p-0.5 flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-white text-base md:text-lg font-bold drop-shadow-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Form Card */}
          <div className="w-full max-w-[380px]">
            <div className="bg-white rounded-md shadow-2xl p-6 md:p-7 border border-white/20">
            <h3 className="text-lg font-bold text-slate-800 mb-5">Start your Study Abroad Journey</h3>

            {step === 1 && (
              <>
              
              <form className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Name*</label>
                  <input 
                    type="text" 
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all outline-none placeholder:text-slate-300" 
                    placeholder="Enter Full Name*"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Enter Email Address*</label>
                  <input 
                    type="email" 
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm focus:ring-1 focus:ring-blue-400 focus:border-blue-400 transition-all outline-none placeholder:text-slate-300" 
                    placeholder="Enter Email Address*"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Mobile number*</label>
                  <div className="flex items-center bg-white border border-slate-200 rounded focus-within:ring-1 focus-within:ring-blue-400 transition-all">
                    <div className="px-2.5 py-2 border-r border-slate-100 flex items-center space-x-1.5">
                      <span className="text-sm">🇮🇳</span>
                      <span className="text-xs font-bold text-slate-500">+91</span>
                    </div>
                    <input 
                      type="tel" 
                      onChange={handleChange}
                      className="flex-1 px-3 py-2 text-sm outline-none placeholder:text-slate-300" 
                      placeholder="9999999999"
                    />
                  </div>
                </div>

               <div className="grid grid-cols-2 gap-3">

                {/* STATE DROPDOWN */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Current State
                  </label>

                  <select
                    name="state"
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm appearance-none outline-none text-slate-500 cursor-pointer"
                  >
                    <option value="">Select State</option>
                    {states.map((state, i) => (
                      <option key={i} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* CITY INPUT */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Current City
                  </label>

                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    placeholder="Enter City"
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm outline-none placeholder:text-slate-300"
                  />
                </div>

              </div>

                
               
                
                <button 
                  type="button" 
                  onClick={() => setStep(2)}
                  className="w-full bg-[#83C5F8] hover:bg-[#68b1eb] text-white py-2.5 rounded font-bold text-sm shadow-sm transition-all active:scale-[0.98]"
                >
                  Book your free consultation
                </button>
              </form>
              </>
            )}

            {step === 2 && (
              <form className="space-y-4">

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Preferred Program</label>
                  <input
                    name="program"
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm"
                    placeholder="e.g. MBA, MS, etc."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Preferred Intake</label>
                  <input
                    name="intake"
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm"
                    placeholder="e.g. Fall 2024, Spring 2025, etc."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Preferred Destination</label>
                  <input
                    name="destination"
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm"
                    placeholder="e.g. USA, Canada, Germany, etc."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Education Loan Required</label>
                  <select
                    name="loan"
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded text-sm"
                  >
                    <option>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="flex items-start space-x-2 pt-1">
                  <input 
                    type="checkbox" 
                    id="hero-terms" 
                    className="mt-1 w-3 h-3 rounded border-slate-300 text-blue-500 focus:ring-blue-500" 
                    defaultChecked 
                  />
                  <label htmlFor="hero-terms" className="text-[9px] text-slate-500 leading-tight">
                    I have read and agreed to <span className="text-blue-500 font-semibold cursor-pointer">terms</span> & <span className="text-blue-500 font-semibold cursor-pointer">privacy policy</span>
                  </label>
                </div>

                <button
                  type="button"
                  onClick={submitAll}
                  className="w-full bg-[#83C5F8] hover:bg-[#68b1eb] text-white py-2.5 rounded font-bold text-sm"
                >
                  Submit
                </button>

              </form>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
        
        
        <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Why Choose <span className="text-[#0046AD]">FLPOversease?</span>
          </h2>
          <p className="text-slate-500 font-medium text-sm">Leading with technology and transparency in global education.</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#fcfdff] p-8 rounded-3xl bg-slate-50 rounded-xl hover:shadow-lg hover:bg-white transition-all flex flex-col items-center text-center group">
              <div className={`w-12 h-12  rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-105 transition-transform duration-300`}>
                {item.icon}
              </div>
              {/* <div className="text-lg md:text-xl font-black text-slate-900 mb-0.5">{item.value}</div> */}
              <div className="font-extrabold text-slate-900 text-base leading-tight">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>


    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            <span className="text-[#0046AD]">FLPOversease</span> Advantage
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:bg-white hover:border-slate-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 flex-shrink-0 bg-white shadow-sm rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {adv.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg leading-tight mb-2">{adv.title}</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{adv.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      <section className="py-24 bg-[#F8FAFF]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            Top Universities to <span className="text-[#0046AD]">Study Abroad</span>
          </h2>
          
          <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {countries.map((c, i) => (
              <button 
                key={i} 
                className={`px-6 py-2 rounded-xl flex items-center space-x-2 font-bold text-sm transition-all ${c.active ? 'bg-[#0046AD] text-white shadow-md' : 'text-slate-500 hover:text-[#0046AD] hover:bg-blue-50'}`}
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map((uni, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-900/5 transition-all group card-hover">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-[#0046AD] text-xl border border-slate-100 group-hover:bg-[#0046AD] group-hover:text-white transition-colors duration-500">
                    {uni.logo}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base leading-tight">{uni.name}</h4>
                    <p className="text-xs text-slate-400 font-bold mt-1 uppercase tracking-widest">{uni.loc}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center bg-blue-50 text-[#0046AD] text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter">
                  {uni.count}
                </div>
                <button className="text-xs font-black text-slate-800 flex items-center group/btn uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Details
                  <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
            60,000+ <span className="text-[#0046AD]">Success Stories</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">From Dreamers to Achievers</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div key={i} className="bg-[#FAFBFF] p-8 rounded-[2.5rem] border border-slate-100 flex flex-col h-full hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm overflow-hidden p-1 border border-slate-100 group-hover:scale-110 transition-transform">
                  <img src={`https://i.pravatar.cc/150?u=${s.name}`} className="w-full h-full object-cover rounded-xl" alt={s.name} />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm leading-none">{s.name}</h4>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{s.from}</span>
                    <span className="text-[8px] text-blue-300">➔</span>
                    <span className="text-[10px] font-bold text-[#0046AD] uppercase tracking-tighter">{s.to}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-8 flex-grow">
                "{s.text}"
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <span className="bg-white text-[#0046AD] text-[9px] font-black px-4 py-1.5 rounded-full border border-blue-100 uppercase tracking-widest shadow-sm">
                  {s.tag}
                </span>
                <span className="text-[10px] font-extrabold text-slate-800 uppercase tracking-tight">
                  {s.partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <h2 className="text-2xl md:text-4xl font-black mb-8 tracking-tight text-slate-900">
          Study Abroad with <span className="text-blue-600">FLPOversease</span>
        </h2>
        <div className="max-w-4xl space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
          <p>
            As per government estimates, a little over <span className="text-slate-900 font-bold">9,00,000 Indians</span> were studying abroad in 2022. This grew to 1.31 million in 2023 and 1.33 million in 2024. Market insights suggest that by 2025, over <span className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4">2 million Indians</span> will be pursuing global education.
          </p>
          <p>
            India now holds the position of the second-largest student exporter globally. With total education spending abroad expected to cross <span className="text-slate-900 font-bold">USD 70 billion</span> in 2025, FLPOversease is committed to providing the transparency and expertise required to navigate this landscape.
          </p>
          <button className="inline-flex items-center space-x-2 text-blue-600 font-bold uppercase text-[10px] tracking-widest hover:text-blue-700 transition-colors group">
            <span>Read detailed report</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>


      </main>
      
      <footer className="bg-white py-16 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#0046AD] rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
                <span className="text-white font-black text-lg">F</span>
              </div>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">FLP<span className="text-[#0046AD]">Oversease</span></span>
            </div>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em]">A plan for every dream.</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div className="space-y-3">
              <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Legal</h5>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#0046AD] transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#0046AD] transition-colors">Terms of Service</a>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Connect</h5>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#0046AD] transition-colors">Twitter</a>
                <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#0046AD] transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <p>Copyright © 2025 FLPOversease. Registered Consultancy.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-2">
            <span>Powered by</span>
            <span className="text-slate-900">FLP Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
    
    
    </div>


      {showThankYou && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-10 max-w-md text-center shadow-2xl">

            <div className="text-green-500 text-5xl mb-4">✔</div>

            <h2 className="text-xl font-bold mb-2">
              Thank you for booking a consultation
            </h2>

            <p className="text-slate-500 mb-6">
              We will contact you within 24 hours.
            </p>

            <button
              onClick={() => setShowThankYou(false)}
              className="bg-[#83C5F8] text-white px-6 py-2 rounded font-bold"
            >
              Close
            </button>

          </div>
        </div>
      )}


    </>
  );
}
