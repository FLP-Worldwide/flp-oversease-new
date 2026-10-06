"use client";

import React, { useRef, useState } from "react";

export default function ResumePreview({ data, aadhaar, onBack, onClose, saveOnDownload = true }) {
  const pdfRef = useRef(null);
  const saved = useRef(false);
  const [downloading, setDownloading] = useState(false);

const downloadPDF = async () => {
  try {
    setDownloading(true);
    if (saveOnDownload && !saved.current) {
      const form = new FormData();
      form.set('mode', 'created');
      form.set('resume', JSON.stringify(data));
      if (aadhaar) form.set('aadhaar', aadhaar);
      const response = await fetch('/api/resumes', { method: 'POST', body: form });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to save resume');
      saved.current = true;
    }

    const html2pdfModule = (await import("html2pdf.js")).default;
    await html2pdfModule()
      .set({
        margin: 10,
        filename: `${data.basics.name || "Resume"}.pdf`,
        html2canvas: {
          scale: 4,
          backgroundColor: "#ffffff",
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(pdfRef.current)
      .save();
  } catch (err) {
    console.error(err);
    alert(err.message || "Failed to download resume");
  } finally {
    setDownloading(false);
  }
};


  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-[calc(100vw-2rem)] md:w-[70vw] h-[90vh] rounded-lg flex flex-col">

        {/* HEADER */}
        <div className="px-5 py-3 border-b flex justify-between text-sm">
          <button onClick={onBack}>← Back</button>
          <div className="flex gap-3">
            <button onClick={downloadPDF} disabled={downloading} className="btn-primary disabled:opacity-50">
              {downloading ? 'Preparing PDF...' : 'Download PDF'}
            </button>
            <button onClick={onClose}>✕</button>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div
            ref={pdfRef}
            style={{
              background: '#fff',
              color: '#000',
              fontFamily: 'Arial, Helvetica, sans-serif',
            }}
            className="mx-auto max-w-[800px] p-10 text-[13px] leading-[1.55]"
          >
            {/* HEADER */}
            <h1 className="text-[22px] font-bold">
              {data.basics.name}
            </h1>
            <p className="text-[12px] mt-1">
              {data.basics.address} · {data.basics.phone} · {data.basics.email}
            </p>

            <Section title="PROFESSIONAL SUMMARY">
              <p>{data.basics.summary}</p>
            </Section>

            <Section title="WORK EXPERIENCE">
              {data.experience.map((e, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between">
                    <strong>{e.role}</strong>
                    <span>
                      {e.startMonth} {e.startYear} – {e.endMonth} {e.endYear}
                    </span>
                  </div>
                  <div className="italic text-[14px]"><strong>{e.company}</strong></div>
                  <ul className="list-disc ml-5 mt-1">
                    {e.points?.split(',').map((p, j) => (
                      <li key={j}>{p.trim()}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>

            <Section title="EDUCATION">
              {data.education.map((e, i) => (
                <p key={i}>
                  <strong>{e.degree}</strong> — {e.institute} ({e.year})
                </p>
              ))}
            </Section>

            <Section title="SKILLS">
              <p>{data.skills.join(', ')}</p>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-6">
      <div className="font-bold text-[14px] border-b py-2 mb-2">
        {title}
      </div>
      {children}
    </div>
  );
}
