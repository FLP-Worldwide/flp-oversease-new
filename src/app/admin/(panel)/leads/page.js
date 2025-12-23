"use client";

import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

/* ---------------- STATIC COLUMNS ---------------- */

const initialColumns = [
  { id: "todo", title: "Todo", description: "This item hasn't been started" },
  { id: "inprogress", title: "In Progress", description: "This is actively being worked on" },
  { id: "done", title: "Done", description: "This has been completed" },
  { id: "invalid", title: "Innvalid", description: "This has been marked as invalid" },
  { id: "delete", title: "Delete", description: "This has been deleted" },
];

export default function LeadsPage() {
  const [columns, setColumns] = useState(initialColumns);
  const [leads, setLeads] = useState([]);

  const [showCreateLead, setShowCreateLead] = useState(false);
  const [createStatus, setCreateStatus] = useState(null);

  const [selectedLead, setSelectedLead] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);

  /* ================= FETCH LEADS ================= */

  const loadLeads = async () => {
    const res = await fetch("/api/leads");
    const data = await res.json();

    if (!data.success) return;

const UI_STATUS_MAP = {
  todo: "todo",
  "in-progress": "inprogress",
  done: "done",
  invalid: "invalid",
  delete: "delete",
};

setLeads(
  data.leads
    .sort((a, b) => (a.sequence || 0) - (b.sequence || 0))
    .map((l) => ({
      id: l._id,
      name:
        l.fullName ||
        `${l.firstName || ""} ${l.lastName || ""}`.trim() ||
        "—",
      email: l.email,
      phone: l.phone,
      companyName: l.companyName,
      designation: l.designation,
      industry: l.industry,
      website: l.website,
      message: l.message,
      source: l.source,
      status: UI_STATUS_MAP[l.status] || "todo",
      history: l.history?.map((h) => h.text) || ["Lead created"],
    }))
);


  };

  useEffect(() => {
    loadLeads();
  }, []);

  const STATUS_MAP = {
  todo: "todo",
  inprogress: "in-progress",
  done: "done",
  invalid: "invalid",
  delete: "delete",
};

const onDragEnd = async (result) => {
  const { source, destination, draggableId } = result;
  if (!destination) return;

  // 🚫 Block same-column reorder
  if (source.droppableId === destination.droppableId) return;

  const apiStatus = STATUS_MAP[destination.droppableId];

  // Optimistic UI
  setLeads((prev) =>
    prev.map((l) =>
      l.id === draggableId
        ? { ...l, status: destination.droppableId }
        : l
    )
  );

  // API update
  const res = await fetch("/api/leads", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: draggableId,
      status: apiStatus,
      comment: `Moved to ${apiStatus}`,
    }),
  });

  // 🔁 RELOAD FROM DB (IMPORTANT)
  if (res.ok) {
    loadLeads();
  }
};




  /* ================= CREATE LEAD ================= */

  const createLead = async (data) => {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: data.name,
        email: data.email,
        phone: data.phone,
        source: "manual",
        status: createStatus,
      }),
    });

    const result = await res.json();
    if (result.success) {
      loadLeads();
      setShowCreateLead(false);
    }
  };

  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div>
        <h2 className="text-xl font-semibold">Leads</h2>
        <p className="text-sm text-gray-500">
          Drag and drop leads between stages
        </p>
      </div>

      {/* KANBAN */}
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-4">

          {columns.map((col) => {
            const columnLeads = leads.filter((l) => l.status === col.id);

            return (
              <Droppable droppableId={col.id} key={col.id} isDragDisabled={false}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="bg-white min-w-[320px] bg-gray-50 rounded-xl border border-gray-200 p-3 flex flex-col min-h-[520px]"
                  >
                    <div className="mb-3">
                      <h3 className="font-semibold text-sm">
                        {col.title} ({columnLeads.length})
                      </h3>
                      <p className="text-xs text-gray-500">
                        {col.description}
                      </p>
                    </div>

                    <div className="flex-1 space-y-3">
                      {columnLeads.map((lead, index) => (
                        <Draggable
                          draggableId={lead.id}
                          index={index}
                          key={lead.id}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              onClick={() => setSelectedLead(lead)}
                              className="bg-gray-50 rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow transition cursor-pointer"
                            >
                              
                              <div className="text-sm font-medium">
                                {lead.name}
                              </div>
                              <div className="text-xs text-gray-600 mt-1">
                                {lead.email}
                              </div>
                              <spann className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">{lead.source}</spann>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>

                    <button
                      onClick={() => {
                        setCreateStatus(col.id);
                        setShowCreateLead(true);
                      }}
                      className="mt-3 text-sm text-gray-600 hover:text-gray-900"
                    >
                      + Add Lead
                    </button>
                  </div>
                )}
              </Droppable>
            );
          })}

          {/* <div className="min-w-[220px] flex items-center justify-center">
            <button
              onClick={() => setShowStatusModal(true)}
              className="h-10 px-4 rounded-lg border border-dashed text-sm text-gray-600 hover:bg-gray-50"
            >
              + Add Status
            </button>
          </div> */}

        </div>
      </DragDropContext>

      {showCreateLead && (
        <CreateLeadModal
          onClose={() => setShowCreateLead(false)}
          onSave={createLead}
        />
      )}

      {showStatusModal && (
        <CreateStatusModal
          onClose={() => setShowStatusModal(false)}
          onSave={(data) => {
            setColumns((prev) => [
              ...prev,
              { id: data.title.toLowerCase(), ...data },
            ]);
            setShowStatusModal(false);
          }}
        />
      )}

      {selectedLead && (
        <LeadDetailModal
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </div>
  );
}

/* ================= MODALS ================= */

function CreateLeadModal({ onClose, onSave }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  return (
    <Modal title="Create Lead" onClose={onClose}>
      <Input label="Name" onChange={(v) => setForm({ ...form, name: v })} />
      <Input label="Email" onChange={(v) => setForm({ ...form, email: v })} />
      <Input label="Phone" onChange={(v) => setForm({ ...form, phone: v })} />

      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onClose} className="px-3 py-1 rounded-md border">
          Cancel
        </button>
        <button
          onClick={() => onSave(form)}
          className="px-3 py-1 rounded-md bg-emerald-600 text-white"
        >
          Save
        </button>
      </div>
    </Modal>
  );
}

function LeadDetailModal({ lead, onClose }) {
  const [comment, setComment] = useState("");

  const addComment = async () => {
    if (!comment.trim()) return;

    await fetch("/api/leads", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: lead.id,
        comment,
      }),
    });

    lead.history.push(comment);
    setComment("");
  };

  return (
    <Modal title="Lead Details" onClose={onClose}>
  <p className="text-sm"><b>Name:</b> {lead.name}</p>
  <p className="text-sm"><b>Email:</b> {lead.email}</p>
  <p className="text-sm"><b>Phone:</b> {lead.phone}</p>
  {lead.companyName && <p className="text-sm"><b>Company:</b> {lead.companyName}</p>}
  {lead.designation && <p className="text-sm"><b>Designation:</b> {lead.designation}</p>}
  {lead.industry && <p className="text-sm"><b>Industry:</b> {lead.industry}</p>}
  {lead.website && <p className="text-sm"><b>Website:</b> {lead.website}</p>}
  {lead.message && <p className="text-sm"><b>Message:</b> {lead.message}</p>}
  <p className="text-sm"><b>Source:</b> {lead.source}</p>

  <div className="mt-4">
    <h4 className="text-sm font-semibold">History / Follow-ups</h4>
    <ul className="list-disc ml-5 text-sm">
      {lead.history.map((h, i) => (
        <li key={i}>{h}</li>
      ))}
    </ul>
  </div>

  <div className="mt-4">
    <Input label="Add Comment / Follow-up" onChange={setComment} />
    <button
      onClick={addComment}
      className="mt-2 px-3 py-1 rounded-md bg-blue-600 text-white text-sm"
    >
      Add Follow-up
    </button>
  </div>
</Modal>

  );
}

/* ================= SHARED ================= */

function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white rounded-xl p-6 shadow-xl">
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function Input({ label, onChange }) {
  return (
    <div className="mb-3">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function CreateStatusModal({ onClose, onSave }) {
  const [form, setForm] = useState({ title: "", description: "" });

  return (
    <Modal title="Add Status" onClose={onClose}>
      <Input label="Status Title" onChange={(v) => setForm({ ...form, title: v })} />
      <Input label="Description" onChange={(v) => setForm({ ...form, description: v })} />

      <div className="flex justify-end gap-2 mt-4">
        <button onClick={onClose} className="px-3 py-1 rounded-md border">
          Cancel
        </button>
        <button
          onClick={() => form.title && onSave(form)}
          className="px-3 py-1 rounded-md bg-emerald-600 text-white"
        >
          Add
        </button>
      </div>
    </Modal>
  );
}
