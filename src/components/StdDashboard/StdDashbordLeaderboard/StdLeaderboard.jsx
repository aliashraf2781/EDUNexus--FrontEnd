import { useState, useEffect } from 'react';
import { Calendar, Award, FileText, ExternalLink } from 'lucide-react';

const CertificatePage = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);
        
        // Get token from local storage
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('Authentication token not found. Please log in again.');
        }
        
        // Set up headers with the token and ngrok skip browser warning
        const headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true'
        };
        
        // First, get the user ID
        const userResponse = await fetch('https://rat-intent-hideously.ngrok-free.app/api/auth/me', {
          headers: headers
        });
        
        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }
        
        const userData = await userResponse.json();
        const userId = userData._id;
        
        // Then, use the user ID to fetch certificates
        const certificatesResponse = await fetch(`https://rat-intent-hideously.ngrok-free.app/api/certificates/user/${userId}`, {
          headers: headers
        });
        
        if (!certificatesResponse.ok) {
          throw new Error('Failed to fetch certificates');
        }
        
        const certificatesData = await certificatesResponse.json();
        setCertificates(certificatesData.certificates || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  // Format date function
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Open certificate modal
  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
  };

  // Close certificate modal
  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">My Certificates</h2>
          <p className="text-gray-600">Your achievement certificates for completed courses</p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-blue-600 mb-4"></div>
            <p className="text-gray-600">Loading certificates...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  Error loading certificates: {error}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && certificates.length === 0 && (
          <div className="text-center py-8 bg-white rounded-lg shadow-sm border border-gray-100">
            <Award className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No certificates yet</h3>
            <p className="mt-1 text-gray-500">Complete courses to earn certificates.</p>
          </div>
        )}

        {/* Certificate Grid */}
        {!loading && !error && certificates.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <div 
                key={certificate._id} 
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer"
                onClick={() => openCertificate(certificate)}
              >
                <div className="relative aspect-video overflow-hidden bg-gray-200">
                  {certificate.certificateImageUrl ? (
                    <img 
                      src={certificate.certificateImageUrl} 
                      alt={`Certificate for ${certificate.courseId?.title}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-100">
                      <Award className="h-16 w-16 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded">
                    {certificate.courseId?.category || "Uncategorized"}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {certificate.courseId?.title || "Untitled Course"}
                  </h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Issued: {formatDate(certificate.issueDate)}</span>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
                  <button 
                    className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(certificate.certificateUrl, '_blank');
                    }}
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    View PDF
                  </button>
                  <button 
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      const link = document.createElement('a');
                      link.href = certificate.certificateUrl;
                      link.download = `${certificate.courseId?.title || 'Certificate'}.pdf`;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Certificate Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-semibold text-gray-900">
                  {selectedCertificate.courseId?.title || "Certificate"}
                </h3>
                <button 
                  onClick={closeCertificate}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>
              <div className="p-4">
                <div className="bg-gray-100 rounded-lg p-2 mb-4">
                  <img 
                    src={selectedCertificate.certificateImageUrl} 
                    alt={`Certificate for ${selectedCertificate.courseId?.title}`}
                    className="w-full rounded shadow"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Course</h4>
                    <p className="text-gray-900">{selectedCertificate.courseId?.title || "Untitled Course"}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Category</h4>
                    <p className="text-gray-900">{selectedCertificate.courseId?.category || "Uncategorized"}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Issue Date</h4>
                    <p className="text-gray-900">{formatDate(selectedCertificate.issueDate)}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200">
                  <a 
                    href={selectedCertificate.certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-1.5 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    Open Certificate
                  </a>
                  <a 
                    href={selectedCertificate.certificateUrl} 
                    download={`${selectedCertificate.courseId?.title || 'Certificate'}.pdf`}
                    className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatePage;