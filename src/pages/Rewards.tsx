import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Certificate, certificatesFromCSV } from '@/data/certificatesFromCSV';

type FilterType = 'all' | 'certificates' | 'badges' | 'achievements';

const Rewards = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [filteredItems, setFilteredItems] = useState<Certificate[]>(certificatesFromCSV);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(certificatesFromCSV);
      return;
    }

    // Currently all items are certificates, but we can extend this later
    if (activeFilter === 'certificates') {
      setFilteredItems(certificatesFromCSV);
    } else {
      setFilteredItems([]);
    }
  }, [activeFilter]);

  const filters = [
    { label: 'All', value: 'all' as const },
    { label: 'Certificates', value: 'certificates' as const },
    { label: 'Badges', value: 'badges' as const },
    { label: 'Achievements', value: 'achievements' as const }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to DNA Forge Hub
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#111111] border border-gray-800 rounded-lg px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
            <span className="text-gray-400 text-sm font-medium tracking-wide">COMMUNITY REWARDS</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
            Rewards Gallery
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Showcase of certificates, badges, and achievements earned by our community members.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid of Certificates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col"
            >
              <div className="mb-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex-shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="20" fill="#1E1E1E"/>
                      <path d="M28 14H12C11.4477 14 11 14.4477 11 15V25C11 25.5523 11.4477 26 12 26H28C28.5523 26 29 25.5523 29 25V15C29 14.4477 28.5523 14 28 14Z" stroke="#A87D2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                      CERTIFICATE
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mt-4 mb-1 text-white">{item.recipientName}</h3>
                <p className="text-gray-400 text-sm">{item.title || 'Certificate of Participation'}</p>
                <p className="text-gray-500 text-sm mt-3 mb-6">{new Date(item.issueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <p className="text-gray-400 text-sm mb-1">From:</p>
                <p className="text-gray-500 text-sm">DNA Lead Community Event</p>
              </div>
              <a
                href={"/" + item.certificatePath}
                download
                className="w-full mt-auto bg-[#27ae60] hover:bg-[#219a54] text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Certificate
              </a>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No {activeFilter === 'all' ? 'items' : activeFilter.slice(0, -1) + 's'} found.
            </p>
          </div>
        )}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Rewards;