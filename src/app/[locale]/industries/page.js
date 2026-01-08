import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getMessages } from '@/i18n';
import { CheckCircle } from 'lucide-react';


  export const INDUSTRY_CARDS = [
  {
    title: "Technical & Engineering Trades",
    subtitle: "Skilled Technical Workforce for Engineering and Maintenance Operations",
    description:
      "Technical and engineering sectors require trade-qualified workers with strong safety awareness and technical competence. Workforce shortages in these roles directly impact operational reliability. FLP Overseas supplies skilled technical manpower aligned with employer standards and job requirements.",
    roles: [
      "Electricians",
      "Plumbers",
      "HVAC technicians",
      "Maintenance technicians",
      "Mechanical helpers",
    ],
    img: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0",
  },
  {
    title: "Healthcare & Nursing",
    subtitle: "Healthcare Workforce Solutions for Hospitals and Care Facilities",
    description:
      "Healthcare systems worldwide face critical shortages of nursing and care professionals due to demographic shifts and increasing patient demand. Workforce readiness and professional conduct are essential in regulated healthcare environments.",
    roles: [
      "B.Sc Nursing professionals",
      "GNM nurses",
      "Caregivers",
      "Nursing aides",
      "Healthcare assistants",
    ],
    img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?",
  },
  {
    title: "Security & Guarding Services",
    subtitle: "Trained Security Workforce for Commercial and Industrial Sites",
    description:
      "Security service providers and facility operators face growing demand for disciplined, reliable manpower to protect assets, people, and infrastructure, particularly where local availability is limited.",
    roles: [
      "Security guards",
      "Facility security staff",
      "Access control personnel",
      "Patrol and monitoring staff",
    ],
    img: "https://images.unsplash.com/photo-1617813884752-54618acb4b94?",
  },
  {
    title: "Retail, Supermarkets & Commercial Services",
    subtitle: "Retail Workforce for High-Volume Customer Environments",
    description:
      "Retail and commercial businesses require consistent frontline staff to manage operations, customer service, and inventory flow in high-footfall environments.",
    roles: [
      "Shop assistants",
      "Cashiers",
      "Store helpers",
      "Stock handling staff",
      "Customer service assistants",
    ],
    img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d",
  },
  {
    title: "Office, Administrative & Support Services",
    subtitle: "Administrative Workforce for Business Operations",
    description:
      "International employers require reliable support staff for back-office operations, reception, and clerical roles that demand basic digital skills and workplace communication ability.",
    roles: [
      "Office clerks",
      "Data entry assistants",
      "Receptionists",
      "Front-desk staff",
      "Administrative support personnel",
    ],
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Food Processing & Packaging",
    subtitle: "Workforce Solutions for Food Production and Packaging Units",
    description:
      "Food processing and packaging facilities require manpower trained to operate under hygiene, safety, and productivity standards in compliance-driven environments.",
    roles: [
      "Food processing workers",
      "Packing and sorting staff",
      "Production helpers",
      "Quality and hygiene assistants",
    ],
    img: "https://images.unsplash.com/photo-1652211955971-7517ff03529d?",
  },
  {
    title: "Agriculture, Farming & Seasonal Workforce",
    subtitle: "Seasonal and General Workforce for Agricultural Operations",
    description:
      "Agricultural employers face recurring labor shortages during planting, harvesting, and seasonal production cycles. Reliable manpower ensures continuity in time-critical operations.",
    roles: [
      "Farm workers",
      "Harvesting staff",
      "Greenhouse workers",
      "General agricultural labor",
    ],
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    title: "Transportation, Delivery & Mobility Services",
    subtitle: "Workforce for Logistics, Delivery, and Mobility Operations",
    description:
      "Transportation and delivery services rely on dependable manpower to support last-mile operations and internal logistics where workforce reliability directly affects service continuity.",
    roles: [
      "Couriers and delivery staff",
      "Loading and unloading workers",
      "Transport support staff",
      "Fleet support assistants",
    ],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
  {
    title: "Seasonal & Temporary Workforce Programs",
    subtitle: "Seasonal & Temporary Job Profiles",
    description:
      "FLP Overseas recruits and prepares seasonal manpower for time-bound roles across agriculture, food processing, logistics, hospitality, cleaning, events, and short-term projects.",
    roles: [
      "Agricultural & farm workers",
      "Warehouse & logistics support",
      "Food processing & packing staff",
      "Hotel & tourism staff",
      "Cleaning & facility teams",
      "Event & peak-season staff",
    ],
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
];

export default async function IndustriesPage({ params }) {
  const { locale } = await params;
  const t = await getMessages(locale);

  return (
    <>
      <Header currentLang={locale} t={t} />

        <section className="pt-24 pb-8">
        {/* Hero Banner */}
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
            }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-800/50" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Global Workforce Solutions
                <span className="block text-blue-300">
                    Across Key Industries
                </span>
                </h1>

                <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Delivering compliant, workforce-ready international manpower solutions
                tailored to industry-specific operational and seasonal demands.
                </p>
            </div>
            </div>
        </div>
        </div>
        </section>

      {/* Page Intro */}
      <section className="py-10 px-6 ">

            <div className="max-w-7xl mx-auto">
                
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-5">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 tracking-tight">
                    Industries We Serve
                </h2>

                {/* Accent line */}
                <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full " />
                </div>

                {/* Body Content */}
                <div className="max-w-7xl mx-auto">
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                    FLP Overseas delivers compliant, workforce-ready international manpower across industries facing both sustained and seasonal labor shortages. Our industry-focused recruitment and staffing programs support permanent, project-based, temporary, and seasonal workforce requirements, ensuring workers are operationally prepared, employer-aligned, and deployed under legally compliant frameworks across global markets.
                </p>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    We also support time-critical seasonal hiring for sectors such as logistics, hospitality, food processing, agriculture, and peak-demand operations. Seasonal workforce deployment is planned and prepared in advance—reducing last-minute hiring risk, maintaining compliance, and ensuring uninterrupted business continuity.
                </p>
                </div>

            </div>
      </section>



        <section className="py-24 px-6 bg-white" id='manufacturing'>
        <div className="max-w-7xl mx-auto">

            {/* ================= TOP IMAGES ================= */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">

                {/* LEFT — BIG IMAGE */}
                <div className="md:col-span-2 rounded-2xl overflow-hidden">
                    <img
                    src="https://images.unsplash.com/photo-1547895749-888a559fc2a7?"
                    alt="Manufacturing Workforce"
                    className="w-full h-[560px] object-cover"
                    />
                </div>

                {/* RIGHT — TWO STACKED IMAGES */}
                <div className="flex flex-col gap-6 h-[560px]">

                    {/* TOP SMALL IMAGE */}
                    <div className="flex-1 rounded-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b"
                        alt="Industrial Facility"
                        className="w-full h-full object-cover"
                    />
                    </div>

                    {/* BOTTOM SMALL IMAGE */}
                    <div className="flex-1 rounded-2xl overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b"
                        alt="Industrial Operations"
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
            </div>

            {/* Main Heading (same style as screenshot) */}
            <h4 className="text-3xl  lg:text-5xl font-light text-blue-950 leading-tight max-w-4xl mb-4">
            Empowering global manufacturing
            <span className="font-bold"> into reliable workforce solutions</span>
            </h4>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mb-6 font-bold">
            Manufacturing & Industrial Workforce Solutions for Global Operations
            </p>


            {/* Two-column paragraph (same style) */}
            <div className="grid md:grid-cols-2 gap-12 mb-10">
            <p className="text-gray-600 text-base leading-relaxed">
                Manufacturing and industrial employers worldwide continue to experience workforce
                shortages driven by aging labor pools, production expansion, and limited availability
                of trained local workers. International recruitment has become essential for maintaining
                productivity, meeting output targets, and ensuring uninterrupted operational continuity.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
                FLP Overseas supports manufacturing companies by supplying job-ready industrial manpower
                that is skill-assessed, workplace-prepared, and fully compliant with regulatory and safety
                standards. Our approach emphasizes workforce reliability, operational consistency, and
                long-term workforce stability across global manufacturing environments.
            </p>
            </div>

            {/* ================= POINTS BELOW ================= */}
            <div>
            <h3 className="text-2xl font-semibold text-blue-950 mb-8">
                Roles Supplied
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-gray-700">
                <span>• Production line workers</span>
                <span>• Factory helpers and general workers</span>
                <span>• Machine and CNC operators</span>
                <span>• Assembly workers</span>
                <span>• Quality assistants</span>
                <span>• Maintenance helpers</span>
                <span>• Shift supervisors and team leads</span>
            </div>
            </div>

        </div>
        </section>


<section className="py-24 px-6 bg-blue-50/40" id='logistics'>
  <div className="max-w-7xl mx-auto">

   <div className='max-w-5xl'>
        

        {/* Heading */}
        <h2 className="text-5xl md:text-5xl font-light text-blue-950 leading-tight mb-4">
          Workforce solutions for 
          <span className="font-bold"> logistics & warehousing operations</span>
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Logistics, warehousing, and supply chain workforce support
        </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 ">
      <div>
        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-5">
          The rapid growth of e-commerce and global distribution networks has significantly
          increased demand for reliable logistics and warehousing manpower. Employers require
          workers who can perform efficiently in fast-paced, volume-driven operational
          environments while maintaining accuracy and safety.
        </p>

        <p className="text-gray-700 leading-relaxed mb-10">
          FLP Overseas supplies dependable logistics and warehouse personnel trained for
          productivity, inventory accuracy, and workplace safety—helping businesses maintain
          smooth supply chain operations and meet fluctuating demand levels.
        </p>

        {/* Roles */}
        <h3 className="text-2xl font-semibold text-blue-950 mb-6">
          Roles Supplied
        </h3>

       <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
          {[
            'Warehouse associates',
            'Pickers and packers',
            'Sorting and labeling staff',
            'Loading and unloading workers',
            'Inventory assistants',
            'Forklift operators (where applicable)',
            'Warehouse supervisors',
          ].map((role, i) => (
            <span
              key={i}
              className=""
            >
              •  {role}
            </span>
          ))}
        </div>

      </div>

     
    {/* RIGHT IMAGE */}
<div className="relative">
  <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />

  <div className="relative z-10 rounded-xl overflow-hidden h-[420px]">
    <img
      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
      alt="Warehouse operations"
      className="w-full h-full object-cover"
    />
  </div>
</div>


    </div>
  </div>
</section>



<section className="py-24 px-6 bg-white" id='construction'>
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="max-w-4xl mb-6">
      
      <h2 className="text-4xl md:text-5xl font-light text-blue-950 leading-tight mb-4">
        Skilled construction workforce for large-scale
        <span className="font-bold">  infrastructure projects</span>
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl">
        Construction & infrastructure workforce deployment
      </p>
    </div>

    {/* CONTENT + ROLES */}
    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT — DESCRIPTION */}
      <div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Construction and infrastructure projects consistently face shortages of
          site-ready labor and skilled support staff. Tight project timelines,
          regulatory compliance requirements, and safety obligations make workforce
          reliability a critical factor in successful project execution.
        </p>

        <p className="text-gray-700 leading-relaxed">
          FLP Overseas provides construction manpower trained for physically demanding,
          safety-sensitive environments. Our workforce solutions help contractors and
          infrastructure developers maintain productivity, meet compliance standards,
          and control project costs across all phases of construction.
        </p>
      </div>

      {/* RIGHT — ROLES GRID */}
      <div>
        <h3 className="text-2xl font-semibold text-blue-950 mb-8">
          Roles Supplied
        </h3>

       <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
          {[
            'Construction laborers',
            'Masons and painters',
            'Site helpers and assistants',
            'Maintenance staff',
            'Equipment support workers',
            'Supervisors and foremen',
          ].map((role, i) => (
            <div
              key={i}
              className=""
            >
              • {role}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


<section className="py-24 px-6 bg-white" id='hospitality'>
    
    <div className='max-w-7xl mx-auto'>

        <div className="max-w-5xl ">
            <h2 className="text-4xl md:text-5xl font-light text-blue-950 leading-tight  ">
                Hospitality staffing
                <span className="font-bold"> for hotels, restaurants & resorts</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl ">
                Hospitality & gastronomy workforce solutions
            </p>
        </div>
  
        <div className=" grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
            <p className="text-gray-700 leading-relaxed mb-5">
                High employee turnover and seasonal demand continue to challenge hospitality
                employers worldwide. Maintaining service quality, hygiene standards, and
                positive guest interaction requires trained, dependable, and service-oriented staff.
            </p>

            <p className="text-gray-700 leading-relaxed mb-10">
                FLP Overseas supplies hospitality professionals prepared for service excellence,
                operational discipline, and guest-facing environments—helping employers deliver
                consistent customer experiences across peak and off-season operations.
            </p>

            <h3 className="text-2xl font-semibold text-blue-950 mb-6">
                Roles Supplied
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-y-4 gap-x-8 text-gray-700">
                {[
                'Chefs and cooks',
                'Kitchen helpers',
                'Waiters and service staff',
                'Housekeeping professionals',
                'Hotel support staff',
                ].map((role, i) => (
                <div
                    key={i}
                    className=""
                >
                    • {role}
                </div>
                ))}
            </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="rounded-3xl overflow-hidden h-[460px]">
            <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c"
                alt="Hospitality workforce"
                className="w-full h-full object-cover"
            />
            </div>

        </div>
    </div>
</section>



<section className="py-24 px-6 bg-blue-50/40" id='cleaning'>
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="max-w-4xl mb-6">
      <span className="block text-sm font-semibold uppercase tracking-wider text-blue-600">
        Industry Focus
      </span>

      <h2 className="text-4xl md:text-5xl font-light text-blue-950 leading-tight ">
        Facility workforce solutions for
        <span className="font-bold">  commercial & industrial operations</span>
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl">
        Cleaning & facility management staffing
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-start">

      {/* LEFT DESCRIPTION */}
      <div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Facility management providers depend on consistent, well-trained manpower to
          maintain hygiene, safety, and operational standards across commercial and
          industrial environments. Workforce reliability is essential to compliance
          and service continuity.
        </p>
      </div>

     
        <div>
            <p className="text-gray-700 leading-relaxed">
            FLP Overseas delivers trained cleaning and facility personnel suited for
            structured, compliance-driven work environments—supporting long-term contracts,
            safety protocols, and service quality benchmarks.
            </p>
        </div>

    </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-950 mb-6">
          Roles Supplied
        </h3>

        <div className="grid sm:grid-cols-4 gap-5">
          {[
            'Industrial cleaners',
            'Hotel and commercial cleaning staff',
            'Facility maintenance helpers',
            'Janitorial teams',
          ].map((role, i) => (
            <div
              key={i}
              className=""
            >
               • {role}
            </div>
          ))}
        </div>
      </div>
  </div>
</section>


<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-2 gap-6">
      {INDUSTRY_CARDS.map((item, i) => (
        <div
          key={i}
          className="relative group h-[460px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          {/* Background image */}
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/70" />

          {/* Content */}
          <div className="absolute  p-10 flex flex-col justify-end text-white">

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 drop-shadow-lg">
              {item.title}
            </h3>

            {/* Subtitle */}
            <p className="text-md text-white/90 mb-3">
              {item.subtitle}
            </p>

            {/* Hidden content on hover */}
            <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <p className="text-md text-white/85 mb-3 leading-relaxed">
                {item.description}
              </p>

              <ul className="text-sm space-y-1 text-white/90">
                {item.roles.slice(0, 5).map((role, idx) => (
                  <li key={idx}>• {role}</li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>





      
      <Footer />
    </>
  );
}
