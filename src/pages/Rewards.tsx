import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Award, Download, Calendar, Users, ArrowLeft, Trophy, Medal, Star, Search, Filter, X } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { certificatesFromCSV } from '@/data/certificatesFromCSV';
import { downloadCertificate } from '@/utils/simpleCertificateDownload';

const Rewards = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadingCerts, setDownloadingCerts] = useState<Set<string>>(new Set());
  const [searchFilters, setSearchFilters] = useState({
    name: true,
    email: true,
    eventName: true,
    certificateId: true
  });
  // Use the certificates from CSV data (46 participants)
  const certificates = certificatesFromCSV;

  const categories = [
    { id: 'all', name: 'All Rewards', icon: Star },
    { id: 'certificate', name: 'Certificates', icon: Award },
    { id: 'recognition', name: 'Recognition', icon: Trophy },
    { id: 'community', name: 'Community', icon: Medal }
  ];

  // Advanced filtering and search logic
  const filteredCertificates = useMemo(() => {
    let filtered = certificates;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cert => cert.type === selectedCategory || cert.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(cert => {
        const searchableFields = [];
        
        if (searchFilters.name) searchableFields.push(cert.recipientName?.toLowerCase() || '');
        if (searchFilters.email) searchableFields.push(cert.recipientEmail?.toLowerCase() || '');
        if (searchFilters.eventName) searchableFields.push(cert.eventName.toLowerCase());
        if (searchFilters.certificateId) searchableFields.push(cert.certificateId?.toLowerCase() || '');
        
        return searchableFields.some(field => field.includes(query)) || 
               cert.title.toLowerCase().includes(query) ||
               cert.description.toLowerCase().includes(query);
      });
    }

    return filtered;
  }, [certificates, selectedCategory, searchQuery, searchFilters]);

  const toggleSearchFilter = (filterKey: keyof typeof searchFilters) => {
    setSearchFilters(prev => ({
      ...prev,
      [filterKey]: !prev[filterKey]
    }));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const handleDownload = async (certificate: any, format: 'png' = 'png') => {
    const certId = certificate.id;
    setDownloadingCerts(prev => new Set([...prev, certId]));
    
    try {
      await downloadCertificate(certificate, format);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download certificate. Please try again.');
    } finally {
      setDownloadingCerts(prev => {
        const newSet = new Set(prev);
        newSet.delete(certId);
        return newSet;
      });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Link 
                to="/#events" 
                className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-6 transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Rewards</span> & Certificates
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your achievements and recognitions from DNA Lead Community events. 
                Download certificates, view badges, and showcase your learning journey.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">{certificates.length}</div>
                <div className="text-muted-foreground">Total Rewards</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{certificates.length}+</div>
                <div className="text-muted-foreground">Recipients</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">1</div>
                <div className="text-muted-foreground">Events Held</div>
              </div>

              <div className="glass-card p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">{filteredCertificates.length}</div>
                <div className="text-muted-foreground">Found Results</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Section */}
            <div className="mb-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-center mb-8">
                  <span className="gradient-text">Find Your Certificate</span>
                </h3>
                
                {/* Search Bar */}
                <div className="relative mb-6">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search by name, email, certificate ID, or event name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 bg-black/50 border border-gray-700 rounded-2xl text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-300"
                  />
                  {searchQuery && (
                    <button
                      onClick={clearSearch}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-orange-400 transition-colors duration-300"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>

                {/* Search Filters */}
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Search In
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {Object.values(searchFilters).filter(Boolean).length} filters active
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={searchFilters.name}
                        onChange={() => toggleSearchFilter('name')}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border-2 mr-3 transition-all duration-300 ${
                        searchFilters.name 
                          ? 'bg-orange-400 border-orange-400' 
                          : 'border-gray-600 group-hover:border-orange-400'
                      }`}>
                        {searchFilters.name && (
                          <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                        Recipient Name
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={searchFilters.email}
                        onChange={() => toggleSearchFilter('email')}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border-2 mr-3 transition-all duration-300 ${
                        searchFilters.email 
                          ? 'bg-orange-400 border-orange-400' 
                          : 'border-gray-600 group-hover:border-orange-400'
                      }`}>
                        {searchFilters.email && (
                          <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                        Email Address
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={searchFilters.eventName}
                        onChange={() => toggleSearchFilter('eventName')}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border-2 mr-3 transition-all duration-300 ${
                        searchFilters.eventName 
                          ? 'bg-orange-400 border-orange-400' 
                          : 'border-gray-600 group-hover:border-orange-400'
                      }`}>
                        {searchFilters.eventName && (
                          <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                        Event Name
                      </span>
                    </label>

                    <label className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={searchFilters.certificateId}
                        onChange={() => toggleSearchFilter('certificateId')}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border-2 mr-3 transition-all duration-300 ${
                        searchFilters.certificateId 
                          ? 'bg-orange-400 border-orange-400' 
                          : 'border-gray-600 group-hover:border-orange-400'
                      }`}>
                        {searchFilters.certificateId && (
                          <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground group-hover:text-white transition-colors duration-300">
                        Certificate ID
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-6 py-3 rounded-full font-mono transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-orange-400 text-black'
                        : 'glass-card text-muted-foreground hover:text-orange-400 hover:border-orange-400/50'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* Results Summary */}
            {(searchQuery || selectedCategory !== 'all') && (
              <div className="mb-8 text-center">
                <p className="text-muted-foreground">
                  Showing <span className="text-orange-400 font-bold">{filteredCertificates.length}</span> result{filteredCertificates.length !== 1 ? 's' : ''}
                  {searchQuery && <span> for "<span className="text-white">{searchQuery}</span>"</span>}
                  {selectedCategory !== 'all' && <span> in <span className="text-white">{categories.find(c => c.id === selectedCategory)?.name}</span></span>}
                </p>
                {(searchQuery || selectedCategory !== 'all') && (
                  <button
                    onClick={clearSearch}
                    className="mt-2 text-sm text-orange-400 hover:text-orange-300 transition-colors duration-300"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}

            {/* Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCertificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="glass-card rounded-2xl overflow-hidden hover-glow group"
                >
                  {/* Certificate Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-orange-400/20 to-red-400/20">
                    <div className="w-full h-full flex items-center justify-center">
                      <Award className="h-20 w-20 text-orange-400/50" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase ${
                        certificate.type === 'certificate' ? 'bg-green-400 text-black' :
                        certificate.type === 'award' ? 'bg-yellow-400 text-black' :
                        'bg-purple-400 text-black'
                      }`}>
                        {certificate.type}
                      </span>
                    </div>

                    {/* Certificate ID */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-mono">
                        ID: {certificate.certificateId}
                      </span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors duration-300">
                      {certificate.title}
                    </h3>
                    
                    {/* Recipient Info */}
                    <div className="mb-4 p-3 bg-black/30 rounded-lg">
                      <div className="text-sm">
                        <div className="text-orange-400 font-semibold">{certificate.recipientName}</div>
                        <div className="text-muted-foreground text-xs">{certificate.recipientEmail}</div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {certificate.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-orange-400" />
                        {new Date(certificate.issueDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-orange-400" />
                        Individual Certificate
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground mb-4 font-mono">
                      From: {certificate.eventName}
                    </div>

                    {/* Download Button */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDownload(certificate, 'png')}
                        disabled={downloadingCerts.has(certificate.id)}
                        className={`flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105 ${
                          downloadingCerts.has(certificate.id) ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        title="Download certificate as PNG image"
                      >
                        {downloadingCerts.has(certificate.id) ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Download Certificate
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredCertificates.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  {searchQuery ? 'No certificates found' : 'No rewards available'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery 
                    ? `No certificates match your search "${searchQuery}". Try different keywords or check the search filters.`
                    : 'No rewards available for the selected category. Try selecting a different filter.'
                  }
                </p>
                {(searchQuery || selectedCategory !== 'all') && (
                  <button
                    onClick={clearSearch}
                    className="px-6 py-3 bg-orange-400 text-black font-bold rounded-lg hover:bg-orange-300 transition-colors duration-300"
                  >
                    Clear All Filters
                  </button>
                )}
                {!searchQuery && selectedCategory === 'all' && (
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Common search tips:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="text-sm font-bold text-orange-400 mb-2">Search by Name</h4>
                        <p className="text-xs text-muted-foreground">Try "John Doe" or "Jane"</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="text-sm font-bold text-orange-400 mb-2">Search by Email</h4>
                        <p className="text-xs text-muted-foreground">Try "john@example.com"</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="text-sm font-bold text-orange-400 mb-2">Search by Event</h4>
                        <p className="text-xs text-muted-foreground">Try "Web Development" or "Workshop"</p>
                      </div>
                      <div className="bg-black/30 p-4 rounded-lg">
                        <h4 className="text-sm font-bold text-orange-400 mb-2">Search by ID</h4>
                        <p className="text-xs text-muted-foreground">Try "WD2025001" or "CC2025001"</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-card">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Earn More Rewards</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Participate in upcoming events and workshops to earn more certificates and recognition.
            </p>
            <Link
              to="/#events"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-bold rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="h-5 w-5 mr-2" />
              View Upcoming Events
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rewards;
