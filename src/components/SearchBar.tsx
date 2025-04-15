import { useState } from "react";
import { Search } from "lucide-react";
import { navCategories } from "@/data/navLinks";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  
  // Flatten all links for searching
  const allLinks = navCategories.flatMap(category => category.links);
  
  // Filter links based on search term
  const filteredLinks = allLinks.filter(link => 
    link.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    link.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search links..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(e.target.value.length > 0);
          }}
          onFocus={() => {
            if (searchTerm) setShowResults(true);
          }}
          onBlur={() => {
            // Delay hiding results to allow for clicking
            setTimeout(() => setShowResults(false), 200);
          }}
        />
      </div>
      
      {showResults && filteredLinks.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            {filteredLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <span className="mr-2">
                    {<link.icon size={16} />}
                  </span>
                  <div>
                    <div className="font-medium">{link.title}</div>
                    <div className="text-xs text-gray-500">{link.description}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}