"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { useEffect } from "react";

export default function Editor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit, Image, Link],
    content: value || "",
    immediatelyRender: false,         // 🔥 Fix SSR hydration issue

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    }
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value]);

  if (!editor) return <div className="p-3">Loading editor...</div>;

  return (
    <div className="border border-gray-300 rounded-lg bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 border-b p-2 bg-gray-50">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="px-2 py-1 border rounded-sm font-bold">B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="px-2 py-1 border rounded-sm italic">I</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="px-2 py-1 border rounded-sm">• List</button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className="px-2 py-1 border rounded-sm">{`</>`}</button>
      </div>

     <EditorContent
  editor={editor}
  className="prose p-3 min-h-[350px] max-h-[500px] overflow-y-auto [&_.ProseMirror:min-h-[350px]]"
/>

    </div>
  );
}
