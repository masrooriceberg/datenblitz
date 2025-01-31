import React, { useState } from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Industry, LeadList } from '../types';
import { LeadListCard } from './LeadListCard';
import { SearchBar } from './SearchBar';
import { LocationSearch } from './LocationSearch';

interface ResultsPageProps {
  industry: Industry;
  leadLists: LeadList[];
  onBack: () => void;
}

interface Filters {
  categories: string[];
  minPrice: number | null;
  maxPrice: number | null;
  minQuality: number | null;
  minLeads: number | null;
  location: string;
  coordinates?: {
    lat: number;
    lon: number;
  };
  radius: number;
}

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export function ResultsPage({ industry, leadLists, onBack }: ResultsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    minPrice: null,
    maxPrice: null,
    minQuality: null,
    minLeads: null,
    location: '',
    radius: 50
  });

  // Get unique categories for the current industry
  const categories = Array.from(new Set(
    leadLists
      .filter(list => list.industry.toLowerCase() === industry.name.toLowerCase())
      .map(list => list.category)
  ));

  const filteredLeads = leadLists.filter(list => {
    if (list.industry.toLowerCase() !== industry.name.toLowerCase()) return false;
    
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        list.title.toLowerCase().includes(query) ||
        list.description.toLowerCase().includes(query) ||
        list.category.toLowerCase().includes(query) ||
        list.tags.some(tag => tag.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(list.category)) {
      return false;
    }

    // Price range filter
    if (filters.minPrice !== null && list.price < filters.minPrice) return false;
    if (filters.maxPrice !== null && list.price > filters.maxPrice) return false;

    // Quality score filter
    if (filters.minQuality !== null && list.qualityScore < filters.minQuality) return false;

    // Minimum leads filter
    if (filters.minLeads !== null && list.leadCount < filters.minLeads) return false;

    // Location filter
    if (filters.coordinates && list.coordinates) {
      const distance = calculateDistance(
        filters.coordinates.lat,
        filters.coordinates.lon,
        list.coordinates.lat,
        list.coordinates.lon
      );
      if (distance > filters.radius) {
        return false;
      }
    }

    return true;
  });

  const handleCategoryToggle = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleLocationChange = (location: string, coordinates?: { lat: number; lon: number }) => {
    setFilters(prev => ({
      ...prev,
      location,
      coordinates
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      minPrice: null,
      maxPrice: null,
      minQuality: null,
      minLeads: null,
      location: '',
      radius: 50
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Zurück zur Übersicht
        </button>
        
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Lead-Listen für {industry.name}
            </h1>
            <p className="text-xl text-gray-600">
              {industry.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">Filter</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Zurücksetzen
                </button>
              </div>

              <div className="space-y-6">
                {/* Location Filter */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Standort</h4>
                  <div className="space-y-3">
                    <LocationSearch
                      value={filters.location}
                      onChange={handleLocationChange}
                      onClear={() => handleLocationChange('')}
                    />
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Umkreis: {filters.radius} km
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="10"
                        value={filters.radius}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          radius: Number(e.target.value)
                        }))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0 km</span>
                        <span>200 km</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Kategorien</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Preisbereich</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        type="number"
                        placeholder="Min €"
                        value={filters.minPrice || ''}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          minPrice: e.target.value ? Number(e.target.value) : null
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Max €"
                        value={filters.maxPrice || ''}
                        onChange={(e) => setFilters(prev => ({
                          ...prev,
                          maxPrice: e.target.value ? Number(e.target.value) : null
                        }))}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Quality Score */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Qualitätsscore</h4>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={filters.minQuality || 0}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      minQuality: Number(e.target.value)
                    }))}
                    className="w-full"
                  />
                  <div className="text-sm text-gray-600 mt-1">
                    Min: {filters.minQuality || 0}/10
                  </div>
                </div>

                {/* Minimum Leads */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Mindestanzahl Leads</h4>
                  <select
                    value={filters.minLeads || ''}
                    onChange={(e) => setFilters(prev => ({
                      ...prev,
                      minLeads: e.target.value ? Number(e.target.value) : null
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Alle</option>
                    <option value="1000">1.000+</option>
                    <option value="2000">2.000+</option>
                    <option value="3000">3.000+</option>
                    <option value="4000">4.000+</option>
                    <option value="5000">5.000+</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-6">
              <SearchBar
                onSearch={setSearchQuery}
                suggestions={[]}
                placeholder={`Suche in ${industry.name} Lead-Listen...`}
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredLeads.length > 0 ? (
                filteredLeads.map((list) => (
                  <LeadListCard
                    key={list.id}
                    leadList={list}
                    onSelect={(list) => console.log('Selected list:', list)}
                  />
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    Keine Lead-Listen gefunden, die Ihren Filterkriterien entsprechen.
                    <br />
                    Versuchen Sie es mit weniger einschränkenden Filtern.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}