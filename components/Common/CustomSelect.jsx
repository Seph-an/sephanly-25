"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomDropdown({ value, options, onChange, error }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleOptionClick = (option) => {
    setSelectedValue(option);
    onChange(option); // Call the parent-provided onChange function
    setIsOpen(false);
  };

  return (
    <div
      className={`mt-1 cursor-pointer relative rounded-sm bg-transparent shadow-sm focus:outline-none  border  ${
        error ? "border-red-500" : "border-slate-400"
      }`}
    >
      {/* Dropdown Trigger */}
      <div
        className={` text-secondary w-full px-3 py-1 cursor-pointer flex justify-between items-center`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="text-gap-bg">
          {selectedValue || "Select a digital solution"}
        </span>
        {/* Use the imported SVG */}
        <ChevronDown color="#34464f" size={16} strokeWidth={2} />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul className="absolute z-10 bg-black bg-opacity-90 border border-gap-bg rounded-sm mt-[0.5px] w-full">
          {options.map((option) => (
            <li
              key={option}
              className="px-3 py-2 text-white opacity-70 hover:bg-gray-700 cursor-pointer"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
