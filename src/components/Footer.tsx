import React from 'react';
import { Building2, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold text-white">LeadBlitz</span>
            </div>
            <p className="text-gray-400 mb-4">
              Die intelligente Plattform für B2B Lead-Generierung und Vertriebsoptimierung.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Produkt</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Funktionen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sicherheit</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Ressourcen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dokumentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Hilfe-Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partner</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-gray-400">
              © 2024 LeadBlitz. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">AGB</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie-Einstellungen</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}