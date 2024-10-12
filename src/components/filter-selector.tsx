"use client";
import { Status } from "@/utils/interfaces";
import { useState } from "react";
import Button from "./buttons/button";

const FilterSelector = ({
  selectedFilter,
  onSelectFilter,
}: {
  selectedFilter: Status;
  onSelectFilter: (filter: Status) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Pending", value: "pending" },
    { label: "Completed", value: "completed" },
    { label: "In Progress", value: "in-progress" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: any) => {
    onSelectFilter(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <Button
        variant={selectedFilter ? "primary" : "secondary"}
        onClick={toggleDropdown}
        className="flex gap-2 items-center"
      >
        <svg
          role="icon"
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 11.414V17a1 1 0 01-.553.894l-4 2A1 1 0 019 19v-7.586L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
        {selectedFilter
          ? `${options.find((opt) => opt.value === selectedFilter)?.label}`
          : "Filter"}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          {selectedFilter && (
            <button
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => handleSelect(undefined)}
            >
              Clear Filters
            </button>
          )}
          {options.map((option) => (
            <button
              key={option.value}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSelector;
