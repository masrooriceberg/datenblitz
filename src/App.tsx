import React, { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IndustrySelector } from './components/IndustrySelector';
import { LeadListCard } from './components/LeadListCard';
import { SearchBar } from './components/SearchBar';
import { LandingSection } from './components/LandingSection';
import { SelectionTabs } from './components/SelectionTabs';
import { ResultsPage } from './components/ResultsPage';
import { Industry, LeadList } from './types';

const searchSuggestions = [
  { text: 'Software-Entwicklung', type: 'industry' },
  { text: 'Finanzdienstleistungen', type: 'industry' },
  { text: 'B2B', type: 'tag' },
  { text: 'Enterprise', type: 'category' },
  { text: 'Startup', type: 'tag' },
  { text: 'IT-Entscheider', type: 'category' },
  { text: 'Marketing', type: 'industry' },
  { text: 'DACH-Region', type: 'tag' },
  { text: 'C-Level', type: 'category' }
];

const sampleLeadLists: LeadList[] = [
  // Technologie Branche
  {
    id: '1',
    title: 'IT-Entscheider in DACH',
    description: 'Qualifizierte Kontakte zu IT-Entscheidern in Deutschland, Österreich und der Schweiz.',
    industry: 'Technologie',
    category: 'Enterprise',
    leadCount: 5000,
    price: 1499,
    previewLeads: [],
    tags: ['IT', 'DACH', 'Enterprise', 'B2B'],
    qualityScore: 9.2,
    lastUpdated: '2024-03-15'
  },
  {
    id: '2',
    title: 'Software-Entwicklungsfirmen',
    description: 'Umfassende Liste von Software-Entwicklungsunternehmen im DACH-Raum.',
    industry: 'Technologie',
    category: 'Development',
    leadCount: 3200,
    price: 999,
    previewLeads: [],
    tags: ['Software', 'Development', 'DACH', 'B2B'],
    qualityScore: 8.9,
    lastUpdated: '2024-03-16'
  },
  {
    id: '3',
    title: 'Cloud Service Provider',
    description: 'Kontakte zu führenden Cloud-Dienstleistern und MSPs.',
    industry: 'Technologie',
    category: 'Cloud',
    leadCount: 1800,
    price: 799,
    previewLeads: [],
    tags: ['Cloud', 'MSP', 'IaaS', 'B2B'],
    qualityScore: 9.0,
    lastUpdated: '2024-03-14'
  },

  // Finanzen Branche
  {
    id: '4',
    title: 'Finanz-CTOs',
    description: 'Direkter Zugang zu technischen Entscheidern im Finanzsektor.',
    industry: 'Finanzen',
    category: 'C-Level',
    leadCount: 2500,
    price: 1299,
    previewLeads: [],
    tags: ['Finanzen', 'CTO', 'Banking', 'B2B'],
    qualityScore: 8.8,
    lastUpdated: '2024-03-14'
  },
  {
    id: '5',
    title: 'Investment Manager DACH',
    description: 'Verifizierte Kontakte zu Investment Managern und Fondsverwaltern.',
    industry: 'Finanzen',
    category: 'Investment',
    leadCount: 1800,
    price: 899,
    previewLeads: [],
    tags: ['Investment', 'Fonds', 'DACH', 'B2B'],
    qualityScore: 9.1,
    lastUpdated: '2024-03-13'
  },
  {
    id: '6',
    title: 'FinTech Entscheider',
    description: 'Kontakte zu Führungskräften in innovativen FinTech-Unternehmen.',
    industry: 'Finanzen',
    category: 'FinTech',
    leadCount: 1500,
    price: 799,
    previewLeads: [],
    tags: ['FinTech', 'Innovation', 'Startup', 'B2B'],
    qualityScore: 8.7,
    lastUpdated: '2024-03-15'
  },

  // Marketing Branche
  {
    id: '7',
    title: 'Marketing-Führungskräfte',
    description: 'Verifizierte Kontakte zu Marketing-Entscheidern in Deutschland.',
    industry: 'Marketing',
    category: 'Management',
    leadCount: 3500,
    price: 999,
    previewLeads: [],
    tags: ['Marketing', 'Management', 'Digital', 'B2B'],
    qualityScore: 8.5,
    lastUpdated: '2024-03-13'
  },
  {
    id: '8',
    title: 'Digital Marketing Agenturen',
    description: 'Umfassende Liste von Digital Marketing Agenturen im DACH-Raum.',
    industry: 'Marketing',
    category: 'Agency',
    leadCount: 2800,
    price: 899,
    previewLeads: [],
    tags: ['Digital', 'Agency', 'DACH', 'B2B'],
    qualityScore: 8.9,
    lastUpdated: '2024-03-16'
  },
  {
    id: '9',
    title: 'E-Commerce Marketing',
    description: 'Kontakte zu Marketing-Entscheidern im E-Commerce Bereich.',
    industry: 'Marketing',
    category: 'E-Commerce',
    leadCount: 2200,
    price: 799,
    previewLeads: [],
    tags: ['E-Commerce', 'Marketing', 'Retail', 'B2B'],
    qualityScore: 8.6,
    lastUpdated: '2024-03-15'
  },

  // Gesundheitswesen
  {
    id: '10',
    title: 'Krankenhaus-Management',
    description: 'Führungskräfte und Entscheider in Krankenhäusern und Kliniken.',
    industry: 'Gesundheitswesen',
    category: 'Healthcare',
    leadCount: 2800,
    price: 1199,
    previewLeads: [],
    tags: ['Healthcare', 'Management', 'Klinik', 'B2B'],
    qualityScore: 9.3,
    lastUpdated: '2024-03-16'
  },
  {
    id: '11',
    title: 'MedTech Innovatoren',
    description: 'Kontakte zu Entscheidern in der Medizintechnik-Branche.',
    industry: 'Gesundheitswesen',
    category: 'MedTech',
    leadCount: 1500,
    price: 899,
    previewLeads: [],
    tags: ['MedTech', 'Innovation', 'Healthcare', 'B2B'],
    qualityScore: 8.8,
    lastUpdated: '2024-03-15'
  },
  {
    id: '12',
    title: 'Pharma Führungskräfte',
    description: 'Hochwertige Kontakte zu Entscheidungsträgern in der Pharmaindustrie.',
    industry: 'Gesundheitswesen',
    category: 'Pharma',
    leadCount: 2000,
    price: 1299,
    previewLeads: [],
    tags: ['Pharma', 'Management', 'DACH', 'B2B'],
    qualityScore: 9.1,
    lastUpdated: '2024-03-14'
  },

  // Produktion/Fertigung
  {
    id: '13',
    title: 'Industrielle Fertigung',
    description: 'Kontakte zu Entscheidern in der industriellen Produktion.',
    industry: 'Produktion',
    category: 'Manufacturing',
    leadCount: 3200,
    price: 1199,
    previewLeads: [],
    tags: ['Industrie', 'Fertigung', 'Produktion', 'B2B'],
    qualityScore: 8.9,
    lastUpdated: '2024-03-15'
  },
  {
    id: '14',
    title: 'Automatisierungstechnik',
    description: 'Führungskräfte im Bereich Automatisierung und Robotik.',
    industry: 'Produktion',
    category: 'Automation',
    leadCount: 1800,
    price: 899,
    previewLeads: [],
    tags: ['Automatisierung', 'Robotik', 'Industrie', 'B2B'],
    qualityScore: 8.7,
    lastUpdated: '2024-03-16'
  },
  {
    id: '15',
    title: 'Supply Chain Manager',
    description: 'Verifizierte Kontakte zu Supply Chain Verantwortlichen.',
    industry: 'Produktion',
    category: 'Supply Chain',
    leadCount: 2500,
    price: 999,
    previewLeads: [],
    tags: ['Supply Chain', 'Logistik', 'DACH', 'B2B'],
    qualityScore: 8.8,
    lastUpdated: '2024-03-14'
  }
];

function App() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'recommend' | 'search' | 'request'>('recommend');
  const [isLoading, setIsLoading] = useState(false);
  
  const filteredLeadLists = sampleLeadLists.filter(list => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      list.title.toLowerCase().includes(searchLower) ||
      list.description.toLowerCase().includes(searchLower) ||
      list.industry.toLowerCase().includes(searchLower) ||
      list.category.toLowerCase().includes(searchLower) ||
      list.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  });

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleBack = () => {
    setSelectedIndustry(null);
  };

  const handleIndustrySelect = async (industry: Industry) => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSelectedIndustry(industry);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">Ergebnisse werden geladen...</h2>
            <p className="text-gray-600 mt-2">Wir suchen die besten Leads für Sie.</p>
          </div>
        ) : selectedIndustry ? (
          <ResultsPage
            industry={selectedIndustry}
            leadLists={sampleLeadLists}
            onBack={handleBack}
          />
        ) : (
          <>
            <div className="headersearch max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
              <div className="headersearchbox text-center mb-12">
                <h1 className="text-[3.4rem] leading-tight font-bold text-gray-900 mb-4">
                  Finde maßgeschneiderte Leadlisten. Einfach suchen & direkt starten!
                </h1>
                <p className="text-[22px] text-gray-700 mb-8">
                  Gib deine Branche oder Keywords ein und erhalte maßgeschneiderte Leadlisten – perfekt abgestimmt auf deine individuellen Anforderungen.
                </p>
                <SelectionTabs activeTab={activeTab} onTabChange={setActiveTab} />
                {activeTab === 'recommend' && (
                  <div className="flex justify-center mb-8">
                    <SearchBar
                      onSearch={setSearchTerm}
                      suggestions={searchSuggestions}
                    />
                  </div>
                )}
                {activeTab === 'search' && (
                  <IndustrySelector onSelect={handleIndustrySelect} />
                )}
                {activeTab === 'request' && (
                  <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-6">Individuelle Lead-Anfrage</h2>
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Branche
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="z.B. IT, Finanzen, Industrie"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Zielgruppe
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="z.B. Geschäftsführer, IT-Entscheider"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Anzahl gewünschter Leads
                        </label>
                        <input
                          type="number"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="z.B. 1000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Zusätzliche Anforderungen
                        </label>
                        <textarea
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          rows={4}
                          placeholder="Beschreiben Sie Ihre spezifischen Anforderungen..."
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                          Anfrage senden
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              {searchTerm && activeTab === 'recommend' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={handleClearSearch}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5 mr-2" />
                      Zurück zur Branchenauswahl
                    </button>
                    <p className="text-gray-600">
                      Ergebnisse für "{searchTerm}"
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    {filteredLeadLists.map((list) => (
                      <LeadListCard
                        key={list.id}
                        leadList={list}
                        onSelect={(list) => console.log('Selected list:', list)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            <LandingSection />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;