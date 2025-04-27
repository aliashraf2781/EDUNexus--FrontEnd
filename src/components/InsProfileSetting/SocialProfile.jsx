import React from "react";
import facebook from "../../assets/instructorIMG/Social.png";
import instagram from "../../assets/instructorIMG/Social (1).png";
import linkedin from "../../assets/instructorIMG/Social (2).png";
import twitter from "../../assets/instructorIMG/Twitter.png";
import whatsapp from "../../assets/instructorIMG/whatsapp 1.png";
import youtube from "../../assets/instructorIMG/Social (3).png";
import internet from "../../assets/instructorIMG/Globe.png";
const SocialProfile = () => {
  const socialFields = [
    { label: "Personal Website", icon: internet, placeholder: "Personal website or portfolio url..." },
    { label: "Facebook", icon:facebook , placeholder: "Username" },
    { label: "Instagram", icon:instagram, placeholder: "Username" },
    { label: "LinkedIn", icon:linkedin, placeholder: "Username" },
    { label: "Twitter", icon:twitter , placeholder: "Username" },
    { label: "Whatsapp", icon:whatsapp, placeholder: "Phone number" },
    { label: "Youtube", icon:youtube , placeholder: "Username" },
  ];

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Social Profile</h2>

      <div className="relative mb-6">
        <img
          src={socialFields[0].icon}
          alt="Website"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
        <input
          type="text"
          placeholder={socialFields[0].placeholder}
          className="w-full p-3 pl-10 border border-gray-300 outline-none rounded-xl"
        />
      </div>

    
      <div className="grid md:grid-cols-3 gap-6">
        {socialFields.slice(1).map((field, index) => (
          <div key={index} className="relative">
            <img
              src={field.icon}
              alt={field.label}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              placeholder={field.placeholder}
              className="w-full p-3 pl-10 border border-gray-300 outline-none rounded-xl "
            />
          </div>
        ))}
      </div>


      <div className="mt-8">
        <button className="bg-[#FF6636] text-white px-6 py-3 rounded-xl">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SocialProfile;
