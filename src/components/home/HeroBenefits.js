'use client';
import { ArrowRight, ShieldCheck } from 'lucide-react';
export default function HeroBenefits() {


  return (
    <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">

        <div className="flex items-start gap-2">
            <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={18} />
            <p className="text-sm text-gray-700">
            Government of India & MEA licensed recruitment authority
            </p>
        </div>

        <div className="flex items-start gap-2">
            <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={18} />
            <p className="text-sm text-gray-700">
            End-to-end workforce lifecycle management
            </p>
        </div>

       

        <div className="flex items-start gap-2">
            <ShieldCheck className="text-blue-500 shrink-0 mt-1" size={18} />
            <p className="text-sm text-gray-700">
            Language-trained manpower (German, Japanese, English & more)
            </p>
        </div>
    </div>

  );
}
