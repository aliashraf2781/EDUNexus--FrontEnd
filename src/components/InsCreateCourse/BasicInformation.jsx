import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const BasicInformation = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
  })

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Basic Information</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          placeholder="You course title"
          maxLength={80}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
        />
        <div className="text-right text-gray-400 text-sm mt-1">0/80</div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Course Descriptions</label>
      <div className="border border-gray-300 rounded-md p-2">
      <EditorContent 
        editor={editor}
        className="min-h-[150px] px-3 py-2 outline-none"
      />
      <div className="flex items-center gap-2 border-t border-gray-300 pt-2 mt-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="text-gray-500 hover:text-black text-sm font-medium">B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="text-gray-500 hover:text-black text-sm font-medium italic">I</button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className="text-gray-500 hover:text-black text-sm font-medium line-through">S</button>
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="text-gray-500 hover:text-black text-sm font-medium">• List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="text-gray-500 hover:text-black text-sm font-medium">1. List</button>
      </div>
    </div>
      </div>
    </div>
  );
};

export default BasicInformation;