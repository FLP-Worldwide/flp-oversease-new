'use client';

import React, { useState } from 'react';
import ResumePreview from './ResumePreview';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const YEARS = Array.from({ length: 30 }, (_, i) => `${new Date().getFullYear() - i}`);

export default function ResumeModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);

  const [data, setData] = useState({
    basics: { name:'', email:'', phone:'', address:'', summary:'' },
    experience: [],
    education: [],
    skills: [],
  });

  const updateBasics = (k, v) =>
    setData(d => ({ ...d, basics: { ...d.basics, [k]: v } }));

  const updateArray = (type, index, key, value) => {
    const arr = [...data[type]];
    arr[index][key] = value;
    setData(d => ({ ...d, [type]: arr }));
  };

  if (showPreview) {
    return (
      <ResumePreview
        data={data}
        onBack={() => setShowPreview(false)}
        onClose={onClose}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center rounded-xl">
      <div className="bg-white w-[50vw] h-[95vh] rounded-xl shadow flex flex-col">

        {/* HEADER */}
        <div className="px-6 py-2 bg-gray-100  border-b border-gray-200 flex justify-between">
          <h2 className="font-semibold">Resume Builder</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* BODY */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">

          {/* BASIC INFO */}
          {step === 1 && (
            <Section title="Basic Information">
              <Input placeholder="Full Name" onChange={e=>updateBasics('name',e.target.value)} />
              <Input placeholder="Email" onChange={e=>updateBasics('email',e.target.value)} />
              <Input placeholder="Phone" onChange={e=>updateBasics('phone',e.target.value)} />
              <Input placeholder="Address" onChange={e=>updateBasics('address',e.target.value)} />
              <Textarea placeholder="Professional Summary"
                onChange={e=>updateBasics('summary',e.target.value)} />
            </Section>
          )}

          {/* EXPERIENCE */}
          {step === 2 && (
            <Section title="Work Experience">
              {data.experience.map((e,i)=>(
                <div key={i} className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="Role"
                      onChange={ev=>updateArray('experience',i,'role',ev.target.value)} />
                    <Input placeholder="Company"
                      onChange={ev=>updateArray('experience',i,'company',ev.target.value)} />
                  </div>

                  <div className="grid grid-cols-4 gap-2 mt-3">
                    <Select options={MONTHS} placeholder="Start Month"
                      onChange={v=>updateArray('experience',i,'startMonth',v)} />
                    <Select options={YEARS} placeholder="Year"
                      onChange={v=>updateArray('experience',i,'startYear',v)} />
                    <Select options={MONTHS} placeholder="End Month"
                      onChange={v=>updateArray('experience',i,'endMonth',v)} />
                    <Select options={YEARS} placeholder="Year"
                      onChange={v=>updateArray('experience',i,'endYear',v)} />
                  </div>

                  <Textarea placeholder="Achievements (comma separated)" 
                    onChange={ev=>updateArray('experience',i,'points',ev.target.value)} />
                </div>
              ))}

              <AddBtn onClick={() =>
                setData(d=>({
                  ...d,
                  experience:[...d.experience,{
                    role:'',company:'',startMonth:'',startYear:'',
                    endMonth:'',endYear:'',points:''
                  }]
                }))
              }/>
            </Section>
          )}

          {/* EDUCATION */}
          {step === 3 && (
            <Section title="Education">
              {data.education.map((e,i)=>(
                <div key={i} className="grid grid-cols-3 gap-3 mb-3">
                  <Input placeholder="Degree"
                    onChange={ev=>updateArray('education',i,'degree',ev.target.value)} />
                  <Input placeholder="Institute"
                    onChange={ev=>updateArray('education',i,'institute',ev.target.value)} />
                  <Input placeholder="Year"
                    onChange={ev=>updateArray('education',i,'year',ev.target.value)} />
                </div>
              ))}
              <AddBtn onClick={() =>
                setData(d=>({...d,education:[...d.education,{degree:'',institute:'',year:''}]}))
              }/>
            </Section>
          )}

          {/* SKILLS */}
          {step === 4 && (
            <Section title="Skills">
              <Textarea placeholder="React, Laravel, Node"
                onChange={e=>setData(d=>({...d,skills:e.target.value.split(',').map(s=>s.trim())}))} />
            </Section>
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-200 px-6 py-2 flex justify-between">
          {step > 1 && <button className="btn-primary bg-gray-500 text-white rounded-sm py-1 px-3 text-sm" onClick={()=>setStep(step-1)}>Back</button>}
          {step < 4
            ? <button onClick={()=>setStep(step+1)} className="btn-primary bg-blue-500 text-white rounded-sm py-1 px-4 text-sm">Next</button>
            : <button onClick={()=>setShowPreview(true)} className="btn-primary bg-blue-500 text-white rounded-sm py-1 px-4 text-sm">Generate Resume</button>
          }
        </div>
      </div>
    </div>
  );
}

/* ---------- UI HELPERS ---------- */

const Section = ({ title, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-3">
    <h3 className="text-sm font-semibold mb-4">{title}</h3>
    <div className="space-y-2   ">{children}</div>
  </div>
);

const Input = props => (
  <input {...props}
    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm" />
);

const Textarea = props => (
  <textarea {...props}
    rows={4}
    className="w-full mt-2 border border-gray-200 rounded-md px-3 py-2 text-sm" />
);

const Select = ({ options, placeholder, onChange }) => (
  <select
    className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm"
    onChange={e=>onChange(e.target.value)}
  >
    <option>{placeholder}</option>
    {options.map(o=> <option key={o}>{o}</option>)}
  </select>
);

const AddBtn = ({ onClick }) => (
  <button onClick={onClick} className="text-blue-600 text-sm font-medium">
    + Add
  </button>
);
