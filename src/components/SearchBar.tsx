import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';

interface SearchSuggestion {
  text: string;
  type: 'tag' | 'industry' | 'category';
}

interface SearchBarProps {
  onSearch: (term: string) => void;
  suggestions: SearchSuggestion[];
  placeholder?: string;
}

export function SearchBar({ onSearch, suggestions, placeholder }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = suggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm, suggestions]);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchTerm(suggestion.text);
    onSearch(suggestion.text);
    setShowSuggestions(false);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'tag':
        return 'Schlagwort';
      case 'industry':
        return 'Branche';
      case 'category':
        return 'Kategorie';
      default:
        return type;
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder || "Was vertreibst du? Gebe Keywords ein wie z.B. Web-Anwendungen/BMS-Systeme/..."}
          className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-2"
            >
              <span className={`
                px-2 py-1 text-xs rounded-full
                ${suggestion.type === 'tag' ? 'bg-blue-100 text-blue-800' : ''}
                ${suggestion.type === 'industry' ? 'bg-green-100 text-green-800' : ''}
                ${suggestion.type === 'category' ? 'bg-purple-100 text-purple-800' : ''}
              `}>
                {getTypeLabel(suggestion.type)}
              </span>
              <span>{suggestion.text}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}