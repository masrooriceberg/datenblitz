import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="w-5 h-5 bg-white transform rotate-[20deg] translate-y-[2px] translate-x-[1px]" style={{
                  clipPath: 'polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)'
                }}></div>
              </div>
              <h1 className="ml-2 text-2xl font-bold text-gray-900">LeadBlitz.</h1>
            </div>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              <div className="relative group">
                <button className="text-gray-600 group-hover:text-gray-900 flex items-center">
                  Produkte
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-600 group-hover:text-gray-900 flex items-center">
                  Lösungen
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-900">Preise</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Ressourcen</a>
            </div>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Anmelden</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Registrieren
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}