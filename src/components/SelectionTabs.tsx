import React from 'react';

interface SelectionTabsProps {
  activeTab: 'recommend' | 'search' | 'request';
  onTabChange: (tab: 'recommend' | 'search' | 'request') => void;
}

export function SelectionTabs({ activeTab, onTabChange }: SelectionTabsProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-gray-100 p-1 rounded-full">
        <button
          onClick={() => onTabChange('recommend')}
          className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all relative ${
            activeTab === 'recommend'
              ? 'text-gray-900 bg-white shadow'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Lead Empfehlung
        </button>
        <button
          onClick={() => onTabChange('search')}
          className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all relative ${
            activeTab === 'search'
              ? 'text-gray-900 bg-white shadow'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Leads suchen
        </button>
        <button
          onClick={() => onTabChange('request')}
          className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all relative ${
            activeTab === 'request'
              ? 'text-gray-900 bg-white shadow'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Leads Anfrage
        </button>
      </div>
    </div>
  );
}