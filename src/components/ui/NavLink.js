'use client';

import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, isScrolled, className, attributes }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <a
      href={href}
      className={`text-sm font-medium hover:text-blue-400 ${
        active
        ? 'text-blue-400'
        : isScrolled
        ? 'text-gray-200'
        : 'text-blue-900'
      } ${className}`}
      {...attributes}
    >
      {children}
    </a>
  );
}
