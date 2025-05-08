import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import thumbnailImg from "../../assets/instructorIMG/Icon.png";
import uploadIcon from "../../assets/instructorIMG/UploadSimple.png";

/**
 * CourseTrailer component uploads a video, fetches its transcript,
 * generates an AI summary, and reports videoPath & summary to parent via onData.
 */
const CourseTrailer = ({ onData }) => {
  // File state
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const fileInputRef = useRef(null);
  const cancelTokenRef = useRef(null);

  // Process state
  const [uploadProgress, setUploadProgress] = useState(0);
  const [publicId, setPublicId] = useState(null);
  const [videoPath, setVideoPath] = useState("");
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");

  // Status tracking
  const [uploadStatus, setUploadStatus] = useState({
    isLoading: false,
    isComplete: false,
    error: null,
  });
  const [transcriptStatus, setTranscriptStatus] = useState({
    isLoading: false,
    isComplete: false,
    error: null,
  });
  const [summaryStatus, setSummaryStatus] = useState({
    isLoading: false,
    isComplete: false,
    error: null,
  });

  const API_BASE_URL = "http://localhost:4000";

  // Notify parent whenever videoPath or summary changes
  useEffect(() => {
    onData?.({ videoPath, summary });
  }, [videoPath, summary, onData]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type & size
    if (!file.type.includes("video/")) {
      setUploadStatus({
        isLoading: false,
        isComplete: false,
        error: "Please select a valid video file.",
      });
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      setUploadStatus({
        isLoading: false,
        isComplete: false,
        error: "File size exceeds 100MB.",
      });
      return;
    }

    // Reset states
    setVideoFile(file);
    setPublicId(null);
    setTranscript("");
    setSummary("");
    setUploadProgress(0);
    setUploadStatus({ isLoading: false, isComplete: false, error: null });
    setTranscriptStatus({ isLoading: false, isComplete: false, error: null });
    setSummaryStatus({ isLoading: false, isComplete: false, error: null });

    // Preview
    setVideoPreview(URL.createObjectURL(file));
  };

  const handleUploadClick = () => fileInputRef.current?.click();

  const uploadVideo = async () => {
    if (!videoFile) return;
    setUploadStatus({ isLoading: true, isComplete: false, error: null });
    setUploadProgress(0);
    const formData = new FormData();
    formData.append("video", videoFile);
    const CancelToken = axios.CancelToken;
    cancelTokenRef.current = CancelToken.source();

    try {
      const res = await axios.post(`${API_BASE_URL}/upload-video`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) =>
          setUploadProgress(Math.round((e.loaded * 100) / e.total)),
        cancelToken: cancelTokenRef.current.token,
      });

      const { public_id, cloudinary_response } = res.data;
      setPublicId(public_id);
      const path = cloudinary_response.url;
      setVideoPath(path);
      setUploadStatus({ isLoading: false, isComplete: true, error: null });

      // start transcript
      fetchTranscript("gzalmanqcgb0v8sacjpz");
    } catch (err) {
      if (axios.isCancel(err)) {
        setUploadStatus({
          isLoading: false,
          isComplete: false,
          error: "Upload cancelled.",
        });
      } else {
        setUploadStatus({
          isLoading: false,
          isComplete: false,
          error: err.message || "Upload failed.",
        });
      }
    }
  };

  const cancelUpload = () => {
    cancelTokenRef.current?.cancel();
    setUploadProgress(0);
    setUploadStatus((prev) => ({ ...prev, isLoading: false }));
  };

  const fetchTranscript = async (id) => {
    setTranscriptStatus({ isLoading: true, isComplete: false, error: null });
    try {
      await new Promise((r) => setTimeout(r, 3000));
      const res = await axios.get(`${API_BASE_URL}/get-transcript/${id}`);
      const text = res.data.transcript;
      setTranscript(text);
      setTranscriptStatus({ isLoading: false, isComplete: true, error: null });
      generateSummary(text);
    } catch (err) {
      setTranscriptStatus({
        isLoading: false,
        isComplete: false,
        error: err.message || "Transcript failed.",
      });
    }
  };

  const generateSummary = async (text) => {
    setSummaryStatus({ isLoading: true, isComplete: false, error: null });
    try {
      const res = await axios.post(`${API_BASE_URL}/summarize`, {
        transcript: text,
      });
      setSummary(res.data.summary);
      setSummaryStatus({ isLoading: false, isComplete: true, error: null });
    } catch (err) {
      setSummaryStatus({
        isLoading: false,
        isComplete: false,
        error: err.message || "Summary failed.",
      });
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md mb-6">
      <h3 className="text-xl font-semibold mb-4">Course Trailer</h3>
      <div className="flex gap-6">
        <div className="w-1/3">
          {videoPreview ? (
            <video src={videoPreview} className="w-full" controls />
          ) : (
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <img
                src={thumbnailImg}
                alt="placeholder"
                className="w-24 opacity-60"
              />
            </div>
          )}
        </div>
        <div className="w-2/3">
          <input
            type="file"
            accept="video/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button onClick={handleUploadClick} className="btn">
            Select Video{" "}
            <img src={uploadIcon} alt="upload" className="inline w-5 ml-2" />
          </button>
          <button
            onClick={uploadVideo}
            disabled={!videoFile || uploadStatus.isLoading}
            className="btn-primary ml-2"
          >
            {uploadStatus.isLoading
              ? `Uploading ${uploadProgress}%`
              : "Upload & Process"}
          </button>
          {uploadStatus.error && (
            <p className="text-red-600">{uploadStatus.error}</p>
          )}
          <div className="mt-4 space-y-4">
            <StatusPanel
              step="Upload"
              status={uploadStatus}
              progress={uploadProgress}
              onCancel={cancelUpload}
            />
            <StatusPanel step="Transcript" status={transcriptStatus} />
            <StatusPanel step="Summary" status={summaryStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Optional helper for status display
const StatusPanel = ({ step, status, progress, onCancel }) => (
  <div className="p-3 border rounded-md">
    <div className="flex justify-between mb-2">
      <strong>{step}</strong>
      <span>
        {status.error
          ? "Failed"
          : status.isLoading
          ? "Processing"
          : status.isComplete
          ? "Complete"
          : "Pending"}
      </span>
    </div>
    {status.isLoading && (
      <div className="flex items-center">
        <progress value={progress} max={100} className="w-full" />
        {onCancel && (
          <button onClick={onCancel} className="ml-2">
            Cancel
          </button>
        )}
      </div>
    )}
    {status.error && <p className="text-red-600">{status.error}</p>}
  </div>
);

export default CourseTrailer;
