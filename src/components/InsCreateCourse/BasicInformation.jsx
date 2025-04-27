import React, { useState } from "react";

const BasicInformation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [requirements, setRequirements] = useState("");
  const [level, setLevel] = useState("beginner");
  const [language, setLanguage] = useState("english");

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        Basic Information
      </h2>
      
      {/* Title */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your course title"
          maxLength={80}
          className="w-full border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none"
        />
        <div className="text-right text-gray-400 text-sm mt-1">
          {title.length}/80
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Course Description
        </label>
        <div className="border border-gray-300 rounded-md p-2">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your course content and what students will learn..."
            className="w-full min-h-[150px] px-3 py-2 border-none outline-none resize-y"
          />
          <div className="flex items-center gap-2 border-t border-gray-300 pt-2 mt-2">
            <button className="text-gray-500 hover:text-black text-sm font-medium">
              B
            </button>
            <button className="text-gray-500 hover:text-black text-sm font-medium italic">
              I
            </button>
            <button className="text-gray-500 hover:text-black text-sm font-medium line-through">
              S
            </button>
            <button className="text-gray-500 hover:text-black text-sm font-medium">
              • List
            </button>
            <button className="text-gray-500 hover:text-black text-sm font-medium">
              1. List
            </button>
          </div>
        </div>
      </div>
      
      {/* Category */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none"
        >
          <option value="">Select a category</option>
          <option value="development">Development</option>
          <option value="business">Business</option>
          <option value="finance">Finance & Accounting</option>
          <option value="it">IT & Software</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
          <option value="health">Health & Fitness</option>
          <option value="music">Music</option>
          <option value="photography">Photography & Video</option>
        </select>
      </div>
      
      {/* Price */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="29.99"
          min="0"
          step="0.01"
          className="w-full border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none"
        />
      </div>
      
      {/* Who this course is for */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Who this course is for
        </label>
        <textarea
          value={targetAudience}
          onChange={(e) => setTargetAudience(e.target.value)}
          placeholder="Describe your target audience..."
          className="w-full min-h-[100px] border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none resize-y"
        />
      </div>
      
      {/* Course Requirements */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Course Requirements
        </label>
        <textarea
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          placeholder="List any prerequisites or required knowledge..."
          className="w-full min-h-[100px] border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none resize-y"
        />
      </div>
      
      {/* Level */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Level</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="all-levels">All Levels</option>
        </select>
      </div>
      
      {/* Language */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border border-gray-300 outline-none rounded-md px-4 py-2 focus:outline-none"
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
          <option value="portuguese">Portuguese</option>
          <option value="russian">Russian</option>
          <option value="japanese">Japanese</option>
          <option value="chinese">Chinese</option>
          <option value="arabic">Arabic</option>
        </select>
      </div>
      
      {/* Save Button */}
      
    </div>
  );
};

export default BasicInformation;