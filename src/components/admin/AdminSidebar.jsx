// src/components/admin/AdminSidebar.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  DashboardOutlined,
  UsergroupAddOutlined,

  MenuFoldOutlined,
  MenuUnfoldOutlined,

  ProductOutlined,
  CodeSandboxOutlined
} from "@ant-design/icons";
import { usePathname } from "next/navigation";

const nav = [
  { key: "dashboard", label: "Dashboard", href: "/admin", icon: <DashboardOutlined /> },
  { key: "jobs", label: "Job Post", href: "/admin/jobs", icon: <CodeSandboxOutlined /> },
  { key: "leads", label: "Leads", href: "/admin/leads", icon: <ProductOutlined /> },
  { key: "resume", label: "Resume Download", href: "/admin/resume", icon: <UsergroupAddOutlined /> },
];


export default function AdminSidebar() {
  const pathname = usePathname() || "/admin";
  const parts = pathname.split("/").filter(Boolean);
  const active = parts[1] || "dashboard";
const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
async function logout() {
  await fetch("/api/admin/logout", { method: "POST" });
  window.location.href = "/admin/login";
}
  async function handleLogout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.replace("/admin/login");
  }

  useEffect(() => {
    const saved = typeof window !== "undefined" && localStorage.getItem("admin_sidebar_collapsed");
    if (saved) setCollapsed(saved === "1");
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("admin_sidebar_collapsed", collapsed ? "1" : "0");
  }, [collapsed]);

  return (
    // full-height sidebar card
    <aside className={`h-screen ${collapsed ? "w-20" : "w-64"} transition-all duration-200 `}>
      <div className="h-full flex flex-col">
        <div className="bg-gray-700 text-white  shadow-sm p-4 flex flex-col h-full">
          {/* top: brand + toggle */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`${collapsed ? "w-8 h-8" : "w-10 h-10"} rounded-md bg-blue-600 text-white flex items-center justify-center font-bold`}>FLP</div>
              {!collapsed && (
                <div>
                  <div className="text-lg font-semibold">FLP Oversease</div>
                  <div className="text-xs text-white">Admin Portal</div>
                </div>
              )}
            </div>

            <button
              onClick={() => setCollapsed((s) => !s)}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              className="p-1 rounded-md hover:bg-gray-50 transition"
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button>
          </div>

          {/* nav */}
       <nav className="flex-1 overflow-auto">
  <ul className="flex flex-col gap-2">
    {nav.map((item) => {
      const isActive = item.key === active;

      return (
        <li key={item.key}>
          <Link href={item.href} className="block">
            {/* 👇 ADD group HERE */}
            <div
              className={`
                group flex items-center gap-3 rounded-lg px-3 py-2 transition-colors
                ${collapsed ? "justify-center" : ""}
                ${
                  isActive
                    ? "bg-blue-50 ring-1 ring-blue-100"
                    : "hover:bg-white"
                }
              `}
            >
              {/* ICON */}
              <div
                className={`
                  transition-colors
                  ${
                    isActive
                      ? "text-blue-600"
                      : "text-white group-hover:text-gray-700"
                  }
                `}
              >
                {item.icon}
              </div>

              {/* LABEL */}
              {!collapsed && (
                <span
                  className={`
                    text-sm transition-colors
                    ${
                      isActive
                        ? "text-blue-700 font-medium"
                        : "text-white group-hover:text-gray-700"
                    }
                  `}
                >
                  {item.label}
                </span>
              )}
            </div>
          </Link>
        </li>
      );
    })}
  </ul>
</nav>
<button
        onClick={handleLogout}
        className="text-sm text-white hover:underline"
      >
        Logout
      </button>

          {/* footer */}
          <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-white">
            v1.0 • Admin
          </div>
        </div>
      </div>
    </aside>
  );
}
