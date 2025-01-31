import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Loader2 } from 'lucide-react';
import { LocationSuggestion } from '../types';

interface LocationSearchProps {
  value: string;
  onChange: (location: string, coordinates?: { lat: number; lon: number }) => void;
  onClear: () => void;
}

export function LocationSearch({ value, onChange, onClear }: LocationSearchProps) {
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchLocation = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}&countrycodes=de&limit=5&addressdetails=1`,
        {
          headers: {
            'Accept-Language': 'de'
          }
        }
      );
      const data = await response.json();
      
      const formattedSuggestions: LocationSuggestion[] = data
        .filter((item: any) => item.address?.country_code === 'de')
        .map((item: any) => ({
          displayName: item.display_name,
          lat: parseFloat(item.lat),
          lon: parseFloat(item.lon),
          type: item.type,
          postcode: item.address?.postcode
        }));

      setSuggestions(formattedSuggestions);
    } catch (error) {
      console.error('Error fetching locations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onChange(query, undefined);
    setShowSuggestions(true);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (query) {
      debounceTimer.current = setTimeout(() => {
        searchLocation(query);
      }, 300);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: LocationSuggestion) => {
    const displayName = suggestion.postcode
      ? `${suggestion.displayName.split(',')[0]} (${suggestion.postcode})`
      : suggestion.displayName.split(',')[0];
      
    onChange(displayName, { lat: suggestion.lat, lon: suggestion.lon });
    setShowSuggestions(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Stadt oder PLZ in Deutschland eingeben"
          value={value}
          onChange={handleInputChange}
          onFocus={() => value && setShowSuggestions(true)}
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md"
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 animate-spin" />
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
            >
              <div className="font-medium">
                {suggestion.displayName.split(',')[0]}
              </div>
              <div className="text-sm text-gray-500">
                {suggestion.displayName.split(',').slice(1, 3).join(',')}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}