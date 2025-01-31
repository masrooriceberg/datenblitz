import React from 'react';
import { Star, Users, Calendar } from 'lucide-react';
import { LeadList } from '../types';

interface LeadListCardProps {
  leadList: LeadList;
  onSelect: (list: LeadList) => void;
}

export function LeadListCard({ leadList, onSelect }: LeadListCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{leadList.title}</h3>
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            {leadList.industry}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{leadList.description}</p>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">{leadList.leadCount} Leads</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-gray-600">{leadList.qualityScore}/10</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">Aktualisiert am {leadList.lastUpdated}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {leadList.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-800">{leadList.price} €</div>
            <button
              onClick={() => onSelect(leadList)}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Details anzeigen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}