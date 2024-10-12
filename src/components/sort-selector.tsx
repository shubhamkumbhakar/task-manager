"use client";
import { useState } from "react";
import Button from "./buttons/button";

const SortSelector = ({
  selectedSorting,
  onSelectSorting,
}: {
  selectedSorting?: "date-asc" | "date-desc";
  onSelectSorting: (sort?: "date-asc" | "date-desc") => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Newest First", value: "date-desc" },
    { label: "Oldest First", value: "date-asc" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (value: any) => {
    onSelectSorting(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        variant={selectedSorting ? "primary" : "secondary"}
        onClick={toggleDropdown}
        className="flex gap-2 items-center"
      >
        {selectedSorting === "date-asc" ? (
          <svg
            role="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon w-4 h-4 increasing-x1-horizontal-lines-icon"
          >
            <line x1="2" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="18" y2="12" />
            <line x1="6" y1="18" x2="16" y2="18" />
          </svg>
        ) : selectedSorting === "date-desc" ? (
          <svg
            role="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon w-4 h-4 decreasing-x1-horizontal-lines-icon"
          >
            <line x1="6" y1="6" x2="16" y2="6" />
            <line x1="4" y1="12" x2="18" y2="12" />
            <line x1="2" y1="18" x2="20" y2="18" />
          </svg>
        ) : (
          <svg
            role="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon w-4 h-4 decreasing-x1-horizontal-lines-icon"
          >
            <line x1="6" y1="6" x2="16" y2="6" />
            <line x1="2" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="18" y2="18" />
          </svg>
        )}

        {selectedSorting
          ? `${options.find((opt) => opt.value === selectedSorting)?.label}`
          : "Sort By Due Date"}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          {selectedSorting && (
            <button
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => handleSort(undefined)}
            >
              Clear Sorting
            </button>
          )}
          {options.map((option) => (
            <button
              key={option.value}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => handleSort(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortSelector;
