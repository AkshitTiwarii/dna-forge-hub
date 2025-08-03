import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Award, Download, Calendar, Users, ArrowLeft, Trophy, Medal, Star, Search, Filter, X } from 'lucide-react';
import { certificatesFromCSV, type Certificate } from '@/data/certificatesFromCSV';
import { downloadCertificate } from '@/utils/simpleCertificateDownload';

const RewardsContent = () => {
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
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cert => cert.type === selectedCategory || cert.category === selectedCategory);
    }

    if (!searchQuery) return filtered;

    return filtered.filter(cert => {
      const searchFields = [];
      if (searchFilters.name) searchFields.push(cert.recipientName.toLowerCase());
      if (searchFilters.email) searchFields.push(cert.recipientEmail.toLowerCase());
      if (searchFilters.eventName) searchFields.push(cert.eventName.toLowerCase());
      if (searchFilters.certificateId) searchFields.push(cert.certificateId.toLowerCase());

      return searchFields.some(field => field.includes(searchQuery.toLowerCase()));
    });
  }, [searchQuery, searchFilters, certificates]);

  const handleCertificateDownload = async (certificateId: string) => {
    setDownloadingCerts(prev => new Set(prev).add(certificateId));
    try {
      const certificate = certificates.find(cert => cert.certificateId === certificateId);
      if (certificate) {
        await downloadCertificate(certificate);
      }
    } finally {
      setDownloadingCerts(prev => {
        const newSet = new Set(prev);
        newSet.delete(certificateId);
        return newSet;
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Your </span>
            <span className="text-orange-400">Rewards</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track your achievements and download certificates from our community events and activities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-mono text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-orange-400 text-black shadow-lg shadow-orange-400/25'
                    : 'bg-black/30 text-orange-400 hover:bg-black/50'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search rewards and certificates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/30 border border-orange-400/30 rounded-xl py-3 px-12 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              <div className="relative group">
                <button className="flex items-center px-6 py-3 bg-black/30 border border-orange-400/30 rounded-xl text-white hover:bg-black/50 transition-all">
                  <Filter className="w-5 h-5 mr-2" />
                  Search Filters
                </button>
                <div className="absolute right-0 mt-2 w-48 py-2 bg-black/90 rounded-xl shadow-xl border border-orange-400/30 hidden group-hover:block z-50">
                  {Object.entries(searchFilters).map(([key, value]) => (
                    <label
                      key={key}
                      className="flex items-center px-4 py-2 hover:bg-black/50 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() =>
                          setSearchFilters(prev => ({
                            ...prev,
                            [key]: !prev[key as keyof typeof searchFilters]
                          }))
                        }
                        className="mr-3"
                      />
                      <span className="text-white capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

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
                        onClick={() => handleCertificateDownload(certificate.certificateId)}
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

        {/* Back Home */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RewardsContent;
