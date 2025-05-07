import { Ban, HelpCircle } from "lucide-react";

export default function AccountDeactivated() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <Ban size={50} className="text-red-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Account is Deactivated</h1>
        <p className="text-gray-600 mb-4">
          Unfortunately, your instructor account has been deactivated by the admin.
        </p>
        <p className="text-gray-600 mb-4">
          If you believe this is a mistake or would like to request reactivation, please contact support.
        </p>
        <div className="flex items-center justify-center gap-2 text-primary mt-6">
          <HelpCircle size={20} />
          <span className="text-sm">Need help? Contact us at support@example.com</span>
        </div>
      </div>
    </div>
  );
}
