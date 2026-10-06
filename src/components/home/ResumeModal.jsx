'use client';

import React, { useRef, useState } from 'react';
import ResumePreview from './ResumePreview';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const YEARS = Array.from({ length: 30 }, (_, i) => `${new Date().getFullYear() - i}`);

export default function ResumeModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [showPreview, setShowPreview] = useState(false);
  const [aadhaar, setAadhaar] = useState(null);
  const [existingResume, setExistingResume] = useState(null);
  const existingResumeInput = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

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

  const validateBasics = () => {
    if (!data.basics.name.trim()) return 'Please enter your full name.';
    if (!aadhaar) return 'Please upload your Aadhaar card.';
    if (aadhaar.size > 5 * 1024 * 1024) return 'Aadhaar card must be 5 MB or less.';
    if (existingResume?.size > 5 * 1024 * 1024) return 'Resume must be 5 MB or less.';
    return '';
  };

  const continueFromBasics = async () => {
    const validationError = validateBasics();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    if (!existingResume) {
      setStep(2);
      return;
    }

    setSubmitting(true);
    try {
      const form = new FormData();
      form.set('mode', 'uploaded');
      form.set('basics', JSON.stringify(data.basics));
      form.set('aadhaar', aadhaar);
      form.set('existingResume', existingResume);
      const response = await fetch('/api/resumes', { method: 'POST', body: form });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Upload failed.');
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Upload failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-xl shadow p-6 text-center">
          <h2 className="font-semibold text-blue-950">Resume uploaded</h2>
          <p className="mt-3 text-sm text-gray-600">Your resume and Aadhaar card have been submitted.</p>
          <button onClick={onClose} className="mt-6 btn-primary bg-blue-500 text-white rounded-sm py-2 px-5 text-sm">Close</button>
        </div>
      </div>
    );
  }

  if (showPreview) {
    return (
      <ResumePreview
        data={data}
        aadhaar={aadhaar}
        onBack={() => setShowPreview(false)}
        onClose={onClose}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center rounded-xl">
      <div className="bg-white w-[calc(100vw-2rem)] md:w-[50vw] h-[95vh] rounded-xl shadow flex flex-col">

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
              <Input placeholder="Full Name" aria-label="Full Name" value={data.basics.name} onChange={e=>updateBasics('name',e.target.value)} />
              <Input placeholder="Email" aria-label="Email" type="email" value={data.basics.email} onChange={e=>updateBasics('email',e.target.value)} />
              <Input placeholder="Phone" aria-label="Phone" value={data.basics.phone} onChange={e=>updateBasics('phone',e.target.value)} />
              <Input placeholder="Address" aria-label="Address" value={data.basics.address} onChange={e=>updateBasics('address',e.target.value)} />
              <Textarea placeholder="Professional Summary"
                value={data.basics.summary}
                onChange={e=>updateBasics('summary',e.target.value)} />
              <label className="block text-sm font-medium text-gray-700">
                Aadhaar card (PDF, JPG or PNG, up to 5 MB)
                <Input type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                  onChange={e=>{ setAadhaar(e.target.files?.[0] || null); setError(''); }} />
                {aadhaar && <span className="block mt-1 text-xs text-gray-500">Selected: {aadhaar.name}</span>}
              </label>
              <label className="block text-sm font-medium text-gray-700">
                Existing resume (optional; PDF, DOC or DOCX, up to 5 MB)
                <Input ref={existingResumeInput} type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={e=>{ setExistingResume(e.target.files?.[0] || null); setError(''); }} />
                {existingResume && <span className="block mt-1 text-xs text-gray-500">Selected: {existingResume.name} <button type="button" className="text-blue-600 underline" onClick={event=>{ event.preventDefault(); setExistingResume(null); existingResumeInput.current.value = ''; }}>Remove</button></span>}
              </label>
              <p className="text-xs text-gray-500">If you do not have a resume to upload, continue to write a new one.</p>
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
        {error && <p role="alert" className="px-6 py-2 text-sm text-red-600">{error}</p>}
        <div className="border-t border-gray-200 px-6 py-2 flex justify-between">
          {step > 1 && <button className="btn-primary bg-gray-500 text-white rounded-sm py-1 px-3 text-sm" onClick={()=>setStep(step-1)}>Back</button>}
          {step < 4
            ? <button disabled={submitting} onClick={step === 1 ? continueFromBasics : ()=>setStep(step+1)} className="btn-primary bg-blue-500 text-white rounded-sm py-1 px-4 text-sm disabled:opacity-50">{submitting ? 'Uploading...' : step === 1 && existingResume ? 'Submit Existing Resume' : 'Next'}</button>
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
