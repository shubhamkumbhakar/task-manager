import { useEffect, useState } from "react";
import Button from "./buttons/button";

type SearchProps = {
  searchQuery: string;
  onSearch: (query: string) => void;
};

export default function Search({ searchQuery, onSearch }: SearchProps) {
  const [query, setQuery] = useState(searchQuery);

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleClear = () => {
    setQuery("");
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(query.trim());
    }, 500); // Set the debounce delay (500ms)

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  return (
    <div className="flex items-center w-full max-w-md mx-auto bg-white rounded-md shadow-md border border-gray-300">
      <div className="w-4" />
      <div>
        <svg
          role="icon"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="#2196F3"
            d="M11 4a7 7 0 105.293 12.707l4.829 4.829a1 1 0 001.415-1.415l-4.829-4.829A7 7 0 0011 4z"
          />
        </svg>
      </div>

      <div className="w-2" />

      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="flex-grow p-2 h-10 text-sm focus:outline-none text-black rounded-md"
        placeholder="Search for a task..."
      />
      {query && (
        <Button variant="transparent" onClick={handleClear}>
          &times;
        </Button>
      )}
    </div>
  );
}
