// src/components/admin/AdminHeader.jsx
"use client";

import React from "react";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="max-w-full mx-auto px-6 py-3 flex items-center justify-between gap-4 border-b border-gray-100">
        <div className="flex items-center gap-6">
            
          <div className="text-lg font-semibold tracking-tight">Admin Panel</div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-md hover:bg-gray-50 transition" title="Notifications">
            <BellOutlined style={{ fontSize: 18, color: "#374151" }} />
          </button>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-blue-600 w-9 h-9 flex items-center justify-center text-white shadow-sm">
              <UserOutlined />
            </div>
            <div className="hidden md:flex flex-col text-right">
              <span className="text-sm font-medium">Admin</span>
              <span className="text-xs text-gray-500">admin@flpoversease.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
