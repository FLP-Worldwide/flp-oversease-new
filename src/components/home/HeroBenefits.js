'use client';
import { ArrowRight, ShieldCheck } from 'lucide-react';
export default function HeroBenefits() {


  return (
    <div className="pt-4 border-t border-gray-200 flex flex-col gap-2">

        <div className="flex items-start gap-2">
            <ShieldCheck className="text-emerald-500 shrink-0 mt-1" size={18} />
            <p className="text-sm text-gray-700">
            Ready to work hard as per your company’s needs
            </p>
        </div>

        <div className="flex items-start gap-2">
            <ShieldCheck className="text-emerald-500 shrink-0 mt-1" size={18} />
            <p className="text-sm text-gray-700">
            Grab domestic and international talents for your company
            </p>
        </div>

        <div className="flex items-start gap-2">
            <ShieldCheck className="text-emerald-500 shrink-0 mt-1" size={18} />
            <p className="text-sm text-gray-700">
            Highly skilled workers
            </p>
        </div>
    </div>

  );
}
