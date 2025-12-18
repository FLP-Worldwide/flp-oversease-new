'use client';

import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, isScrolled }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <a
      href={href}
      className={`text-sm font-medium hover:text-emerald-400 ${
        active
          ? 'text-emerald-400'
          : isScrolled
          ? 'text-gray-200'
          : 'text-emerald-900'
      }`}
    >
      {children}
    </a>
  );
}
