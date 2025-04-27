import React from "react";
import InsHeader from "../../components/InsProfileSetting/InsHeader";
import AccountSettings from "../../components/InsProfileSetting/AccountSettings";
import SocialProfile from "../../components/InsProfileSetting/SocialProfile";
import Notifications from "../../components/InsProfileSetting/Notifications";
import ChangePassword from "../../components/InsProfileSetting/ChangePassword";

const SettingsPage = () => {
  return (
    <div>
      <InsHeader />
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <AccountSettings />
          <SocialProfile />
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="w-full">
              <Notifications />
            </div>
            <div className="w-full">
              <ChangePassword />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
