'use client';

import React, { useEffect, useState } from 'react';

export default function AnnouncementBar() {
  const messages = [
    '🇪🇺 Hiring for Germany, Poland & Europe – Apply Now',
    '📞 Free Consultation Available – Request a Call Today'
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setFade(true); // fade in
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-emerald-950 text-white text-sm py-2 px-4 text-center relative z-[60]">
      <p
        className={`transition-opacity duration-400 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {messages[index]}
      </p>
    </div>
  );
}
