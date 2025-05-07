import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import thumbnailImg from "../../assets/instructorIMG/Icon.png";
import uploadIcon from "../../assets/instructorIMG/UploadSimple.png";

const CourseTrailer = () => {
  // File state
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const fileInputRef = useRef(null);
  const cancelTokenRef = useRef(null);

  // Process state tracking
  const [uploadProgress, setUploadProgress] = useState(0);
  const [publicId, setPublicId] = useState(null);
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  
  // Status tracking for each step
  const [uploadStatus, setUploadStatus] = useState({
    isLoading: false,
    isComplete: false,
    error: null
  });
  
  const [transcriptStatus, setTranscriptStatus] = useState({
    isLoading: false,
    isComplete: false,
    error: null
  });
  
  const [summaryStatus, setSummaryStatus] = useState({
    isLoading: false,
    isComplete: false,
    error: null
  });

  // Base URL for API endpoints
  const API_BASE_URL = "http://localhost:4000";

  // Handle file selection
  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      
      // Check file type
      if (!file.type.includes('video/')) {
        setUploadStatus(prev => ({ ...prev, error: "Please select a valid video file." }));
        return;
      }
      
      // Check file size (limit to 100MB)
      if (file.size > 100 * 1024 * 1024) {
        setUploadStatus(prev => ({ ...prev, error: "File size exceeds 100MB limit." }));
        return;
      }
      
      // Reset all states when a new file is selected
      setVideoFile(file);
      setPublicId(null);
      setTranscript("");
      setSummary("");
      setUploadProgress(0);
      
      // Reset status states
      setUploadStatus({ isLoading: false, isComplete: false, error: null });
      setTranscriptStatus({ isLoading: false, isComplete: false, error: null });
      setSummaryStatus({ isLoading: false, isComplete: false, error: null });
      
      // Create preview URL
      const previewURL = URL.createObjectURL(file);
      setVideoPreview(previewURL);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Step 1: Upload video to server
  const uploadVideo = async () => {
    if (!videoFile) {
      setUploadStatus(prev => ({ ...prev, error: "Please select a video file." }));
      return;
    }

    // Reset status and start loading
    setUploadStatus({ isLoading: true, isComplete: false, error: null });
    setUploadProgress(0);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('video', videoFile);
      
      // Create cancel token for axios
      const CancelToken = axios.CancelToken;
      cancelTokenRef.current = CancelToken.source();
      
      // Configure axios request with progress tracking
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
        cancelToken: cancelTokenRef.current.token
      };
      
      // Send the upload request to your local server
      const response = await axios.post(`${API_BASE_URL}/upload-video`, formData, config);
      
      // Get the public_id from the response
      const { public_id } = response.data;
      setPublicId(public_id);
      
      // Mark upload as complete
      setUploadStatus({ isLoading: false, isComplete: true, error: null });
      
      // Automatically start transcript fetch if upload succeeds
      fetchTranscript(public_id);
      
    } catch (err) {
      if (axios.isCancel(err)) {
        setUploadStatus(prev => ({ ...prev, isLoading: false, error: "Upload cancelled." }));
      } else {
        setUploadStatus({
          isLoading: false,
          isComplete: false,
          error: err.response?.data?.error || err.message || "Video upload failed."
        });
        console.error("Upload Error:", err);
      }
    }
  };

  // Step 2: Fetch transcript for the uploaded video
  const fetchTranscript = async (id) => {
    const useId = "ggenleddht4sg9ngdrgz";
    
    if (!useId) {
      setTranscriptStatus(prev => ({ ...prev, error: "No video ID available. Please upload a video first." }));
      return;
    }

    // Reset status and start loading
    setTranscriptStatus({ isLoading: true, isComplete: false, error: null });

    try {
      // Wait for a moment to let Cloudinary process the video
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Fetch the transcript
      const transcriptResponse = await axios.get(`${API_BASE_URL}/get-transcript/${useId}`);
      
      if (!transcriptResponse.data.transcript) {
        throw new Error("Failed to get transcript from the video.");
      }
      
      // Save the transcript
      setTranscript(transcriptResponse.data.transcript);
      
      // Mark transcript fetch as complete
      setTranscriptStatus({ isLoading: false, isComplete: true, error: null });
      
      // Automatically generate summary if transcript fetch succeeds
      generateSummary(transcriptResponse.data.transcript);
      
    } catch (err) {
      setTranscriptStatus({
        isLoading: false,
        isComplete: false,
        error: err.response?.data?.error || err.message || "Failed to get transcript."
      });
      console.error("Transcript Error:", err);
    }
  };

  // Step 3: Generate summary from transcript
  const generateSummary = async (text) => {
    const useTranscript = text || transcript;
    
    if (!useTranscript) {
      setSummaryStatus(prev => ({ ...prev, error: "No transcript available. Please fetch the transcript first." }));
      return;
    }

    // Reset status and start loading
    setSummaryStatus({ isLoading: true, isComplete: false, error: null });

    try {
      // Send transcript for summarization
      const summaryResponse = await axios.post(`${API_BASE_URL}/summarize`, {
        transcript: useTranscript
      });
      
      // Set the summary from Gemini
      setSummary(summaryResponse.data.summary);
      
      // Mark summary generation as complete
      setSummaryStatus({ isLoading: false, isComplete: true, error: null });
      
    } catch (err) {
      setSummaryStatus({
        isLoading: false,
        isComplete: false,
        error: err.response?.data?.error || err.message || "Failed to generate summary."
      });
      console.error("Summary Error:", err);
    }
  };

  // Cancel upload if in progress
  const cancelUpload = () => {
    if (cancelTokenRef.current && uploadStatus.isLoading) {
      cancelTokenRef.current.cancel("Upload cancelled by user");
      setUploadStatus(prev => ({ ...prev, isLoading: false }));
      setUploadProgress(0);
    }
  };

  // Process management - start the whole process
  const startProcess = () => {
    uploadVideo();
  };

  // Cleanup function to release object URLs on component unmount
  useEffect(() => {
    return () => {
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
    };
  }, [videoPreview]);

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Lesson Video
      </h3>
      
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Video Preview Section */}
        <div className="w-full md:w-1/3">
          {videoPreview ? (
            <div className="aspect-video bg-gray-100 rounded-md overflow-hidden mb-3">
              <video 
                src={videoPreview} 
                className="w-full h-full object-cover" 
                controls
              />
            </div>
          ) : (
            <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center mb-3">
              <img
                src={thumbnailImg}
                alt="Video placeholder"
                className="w-24 h-24 opacity-60"
              />
            </div>
          )}
          
          <div className="text-sm text-gray-500">
            <p className="font-medium mb-2">Video requirements:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>File format: MP4, MOV, or AVI</li>
              <li>Maximum file size: 100MB</li>
              <li>Clear audio for better transcription</li>
            </ul>
          </div>
        </div>
        
        {/* Upload and Process Controls */}
        <div className="w-full md:w-2/3">
          <p className="text-gray-600 mb-4">
            Upload your lesson video. The system will automatically transcribe and summarize 
            the content using AI to help students understand what they'll learn.
          </p>
          
          <input
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
            ref={fileInputRef}
            id="video-upload"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button 
              onClick={handleUploadClick}
              className="bg-gray-50 border border-gray-200 text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 flex items-center justify-center"
            >
              Select Video
              <img src={uploadIcon} alt="Upload Icon" className="w-5 h-5 ml-2" />
            </button>
            
            <button
              onClick={startProcess}
              disabled={uploadStatus.isLoading || !videoFile}
              className={`bg-[#FF6636] text-white font-medium px-6 py-2 rounded-md hover:bg-[#e55d2e] transition-colors duration-200 flex items-center justify-center
                ${(uploadStatus.isLoading || !videoFile) ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {uploadStatus.isLoading ? "Uploading..." : "Start Processing"}
            </button>
            
            {videoFile && !uploadStatus.isLoading && (
              <p className="text-sm text-gray-500 self-center">
                {videoFile.name}
              </p>
            )}
          </div>
          
          {/* Process Status Panels */}
          <div className="space-y-4">
            {/* Step 1: Upload Status */}
            <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-md font-medium">1. Video Upload</h4>
                <span className={`text-sm px-2 py-0.5 rounded ${
                  uploadStatus.isComplete ? "bg-green-100 text-green-800" : 
                  uploadStatus.error ? "bg-red-100 text-red-800" : 
                  uploadStatus.isLoading ? "bg-blue-100 text-blue-800" : 
                  "bg-gray-100 text-gray-800"
                }`}>
                  {uploadStatus.isComplete ? "Complete" : 
                   uploadStatus.error ? "Failed" : 
                   uploadStatus.isLoading ? "Uploading" : "Pending"}
                </span>
              </div>
              
              {uploadStatus.isLoading && (
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Uploading: {uploadProgress}%</span>
                    <button 
                      onClick={cancelUpload}
                      className="text-red-500 hover:text-red-700"
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-[#FF6636] h-1.5 rounded-full" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {uploadStatus.error && (
                <div className="mb-2">
                  <p className="text-sm text-red-600">{uploadStatus.error}</p>
                  <button 
                    onClick={uploadVideo}
                    className="mt-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                  >
                    Retry Upload
                  </button>
                </div>
              )}
              
              {uploadStatus.isComplete && publicId && (
                <p className="text-sm text-gray-600">Video ID: {publicId}</p>
              )}
            </div>
            
            {/* Step 2: Transcript Status */}
            <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-md font-medium">2. Generate Transcript</h4>
                <span className={`text-sm px-2 py-0.5 rounded ${
                  transcriptStatus.isComplete ? "bg-green-100 text-green-800" : 
                  transcriptStatus.error ? "bg-red-100 text-red-800" : 
                  transcriptStatus.isLoading ? "bg-blue-100 text-blue-800" : 
                  "bg-gray-100 text-gray-800"
                }`}>
                  {transcriptStatus.isComplete ? "Complete" : 
                   transcriptStatus.error ? "Failed" : 
                   transcriptStatus.isLoading ? "Processing" : "Pending"}
                </span>
              </div>
              
              {transcriptStatus.isLoading && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#FF6636]"></div>
                  <span>Generating transcript...</span>
                </div>
              )}
              
              {transcriptStatus.error && (
                <div className="mb-2">
                  <p className="text-sm text-red-600">{transcriptStatus.error}</p>
                  <button 
                    onClick={() => fetchTranscript()}
                    className="mt-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                    disabled={!publicId}
                  >
                    Retry Transcript Generation
                  </button>
                </div>
              )}
              
              {transcriptStatus.isComplete && transcript && (
                <div className="text-sm text-gray-600">
                  <p>Transcript generated successfully.</p>
                  <button 
                    onClick={() => {
                      const el = document.createElement('textarea');
                      el.value = transcript;
                      document.body.appendChild(el);
                      el.select();
                      document.execCommand('copy');
                      document.body.removeChild(el);
                      alert('Transcript copied to clipboard!');
                    }}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800"
                  >
                    Copy Transcript
                  </button>
                </div>
              )}
            </div>
            
            {/* Step 3: Summary Status */}
            <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-md font-medium">3. AI Summary Generation</h4>
                <span className={`text-sm px-2 py-0.5 rounded ${
                  summaryStatus.isComplete ? "bg-green-100 text-green-800" : 
                  summaryStatus.error ? "bg-red-100 text-red-800" : 
                  summaryStatus.isLoading ? "bg-blue-100 text-blue-800" : 
                  "bg-gray-100 text-gray-800"
                }`}>
                  {summaryStatus.isComplete ? "Complete" : 
                   summaryStatus.error ? "Failed" : 
                   summaryStatus.isLoading ? "Processing" : "Pending"}
                </span>
              </div>
              
              {summaryStatus.isLoading && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#FF6636]"></div>
                  <span>Generating AI summary...</span>
                </div>
              )}
              
              {summaryStatus.error && (
                <div className="mb-2">
                  <p className="text-sm text-red-600">{summaryStatus.error}</p>
                  <button 
                    onClick={() => generateSummary()}
                    className="mt-2 text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                    disabled={!transcript}
                  >
                    Retry Summary Generation
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Summary Output Section */}
      {summaryStatus.isComplete && summary && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-200">
          <h4 className="text-lg font-medium mb-2">AI-Generated Summary:</h4>
          <div className="text-gray-700 whitespace-pre-line">{summary}</div>
          <div className="mt-4 flex justify-end">
            <button 
              onClick={() => {
                const el = document.createElement('textarea');
                el.value = summary;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                alert('Summary copied to clipboard!');
              }}
              className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
            >
              Copy Summary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseTrailer;