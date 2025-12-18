"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lang) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <select
      onChange={(e) => changeLang(e.target.value)}
      className="border px-2 py-1 rounded"
    >
      <option value="en">EN</option>
      <option value="de">DE</option>
    </select>
  );
}
