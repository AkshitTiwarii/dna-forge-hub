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
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<Certificate[]>(certificatesFromCSV);

  useEffect(() => {
    let filtered = certificatesFromCSV;

    // Filter by type
    if (activeFilter !== 'all') {
      if (activeFilter === 'certificates') {
        filtered = certificatesFromCSV;
      } else {
        filtered = [];
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        item.recipientName.toLowerCase().includes(query) ||
        (item.title || 'Certificate of Participation').toLowerCase().includes(query)
      );
    }

    setFilteredItems(filtered);
  }, [activeFilter, searchQuery]);

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

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-[#111111] border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
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
              className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col relative overflow-hidden"
            >
              {/* Certificate Icon */}
              <div className="absolute top-4 right-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#A87D2C" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Certificate Status */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#0D9344]/10 text-[#0D9344] w-fit">
                CERTIFIED
              </div>

              {/* Certificate Content */}
              <div className="mt-6 flex-grow">
                <h2 className="text-2xl font-semibold text-white mb-1">
                  {item.title || 'Certificate of Participation'}
                </h2>
                
                <h3 className="text-base text-gray-400 font-medium mb-6">
                  {item.recipientName}
                </h3>

                {/* Date with calendar icon */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3333 2.66667H2.66667C1.93029 2.66667 1.33333 3.26362 1.33333 4V13.3333C1.33333 14.0697 1.93029 14.6667 2.66667 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V4C14.6667 3.26362 14.0697 2.66667 13.3333 2.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.33333 6.66667H14.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {new Date(item.issueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>

                <p className="text-sm text-gray-400">From:</p>
                <p className="text-sm text-gray-300 font-medium">DNA Lead Community Event</p>
              </div>

              {/* Download Button */}
              <a
                href={"/" + item.certificatePath}
                download
                className="w-full mt-6 bg-[#0D9344] hover:bg-[#0B8239] text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm font-medium"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83333 8.33333L10 12.5L14.1667 8.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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