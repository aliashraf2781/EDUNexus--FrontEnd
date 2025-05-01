import { CheckCircle, Mail } from "lucide-react";

export default function ApplicationReview() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <CheckCircle size={50} className="text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Application is Under Review</h1>
        <p className="text-gray-600 mb-4">
          Thank you for submitting your CV and introductory video.
        </p>
        <p className="text-gray-600 mb-4">
          Our team is currently reviewing your application. You will receive an email with the interview link.
        </p>
        <div className="flex items-center justify-center gap-2 text-primary mt-6">
          <Mail size={20} />
          <span className="text-sm">Keep an eye on your inbox!</span>
        </div>
      </div>
    </div>
  );
}
