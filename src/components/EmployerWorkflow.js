'use client';


import {
  FileText,
  Search,
  Users,
  ClipboardCheck,
  PlaneTakeoff,
} from 'lucide-react';

const STEPS = [
  {
    title: 'Acquire Brief from the Client',
    points: [
      'Understanding manpower requirement details',
      'Defining employment terms, conditions and salary',
      'Role clarity, skill category and contract duration',
      'Job description and deployment location',
    ],
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200',
      icon: FileText,
  },
  {
    title: 'Initiate Recruitment',
    points: [
      'Sourcing candidates through databases & trade centers',
      'Advertising and internal recruitment channels',
      'Preliminary screening and shortlisting',
      'Shortlisting candidates for interview process',
    ],
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200',
      icon: Search,
  },
  {
    title: 'Interviewing Potential Candidates',
    points: [
      'Shortlisting potential candidates',
      'Conducting interviews via video or face-to-face',
      'Trade testing where required',
      'Client participation supported when needed',
    ],
    image:
      'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1200',
    icon: Users,
  },
  {
    title: 'Post Selection Process',
    points: [
      'Medical examination and background verification',
      'Documentation and contract formalities',
      'Visa and immigration processing',
      'Travel arrangements and onboarding preparation',
    ],
    image:
      'https://images.unsplash.com/photo-1581092919531-9c4c6aafc06f?q=80&w=1200',
      icon: ClipboardCheck,
  },
  {
    title: 'Pre-Departure & Deployment',
    points: [
      'Final briefing and orientation',
      'Ticketing and deployment scheduling',
      'Ensuring smooth joining at job location',
      'Continuous coordination with employer',
    ],
    image:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200',
      icon: PlaneTakeoff,
  },
];

export default function EmployerWorkflow() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Our Overseas Recruitment Process
          </h2>
          <p className="text-gray-600 text-lg">
            A structured and transparent recruitment process ensuring quality
            manpower delivery.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-[380px]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="bg-blue-50/40 border border-blue-100 rounded-3xl p-10">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-6">
  {(() => {
    const StepIcon = step.icon;
    return <StepIcon size={24} strokeWidth={2} />;
  })()}
</span>


                  <h3 className="text-2xl font-bold text-blue-950 mb-4">
                    {step.title}
                  </h3>

                  <ul className="space-y-3 text-gray-700">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
