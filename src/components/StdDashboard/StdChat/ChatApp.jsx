import React, { useState } from "react";
import writeicon from "../../../assets/StdDashboardIcons/PencilLine (1).png";
import sendicon from "../../../assets/StdDashboardIcons/PaperPlaneRight.png";

const contacts = [
  {
    name: "Jane Cooper",
    message: "Yeah sure, tell me zafor",
    time: "just now",
    img: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Jenny Wilson",
    message: "Thank you so much, sir",
    time: "2 d",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Marvin McKinney",
    message: "You're Welcome",
    time: "1 m",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jenny Wilson",
    message: "Thank you so much, sir",
    time: "2 d",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Marvin McKinney",
    message: "You're Welcome",
    time: "1 m",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jenny Wilson",
    message: "Thank you so much, sir",
    time: "2 d",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Marvin McKinney",
    message: "You're Welcome",
    time: "1 m",
    img: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jenny Wilson",
    message: "Thank you so much, sir",
    time: "2 d",
    img: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Marvin McKinney",
    message: "You're Welcome",
    time: "1 m",
    img: "https://i.pravatar.cc/150?img=3",
  },
];

export default function ChatApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello and thanks for signing up...", from: "other" },
    { text: "Hello, Good Evening.", from: "me" },
    { text: "I'm Zafor", from: "me" },
    { text: "I only have a small doubt about your lecture...", from: "me" },
    { text: "Yeah sure, tell me zafor", from: "other" },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, from: "me" }]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:block w-1/3 xl:w-1/4 border border-[#E9EAF0] bg-white overflow-y-auto">
        <div className="p-4 border-b border-[#E9EAF0] flex justify-between items-center">
          <h2 className="text-lg font-semibold">Message</h2>
          <button className="flex items-center gap-1 bg-[#EBEBFF] hover:bg-violet-200 text-[#564FFD] text-sm font-medium px-3 py-1 rounded">
            + Compose
          </button>
        </div>

        <div className="px-4 py-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-violet-400"
            />
            <svg
              className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-2">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                idx === 0 ? "bg-[#FFDDD1]" : "hover:bg-gray-100"
              }`}
            >
              <div className="relative">
                <img
                  src={contact.img}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {idx === 0 && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border border-white rounded-full" />
                )}
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-semibold truncate">
                    {contact.name}
                  </h4>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {contact.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 truncate w-[180px]">
                    {contact.message}
                  </p>
                  {idx % 3 === 0 && (
                    <span className="ml-2 w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ml-3 flex flex-col border border-[#E9EAF0] rounded-lg w-full mx-auto shadow-sm bg-white">
        <div className="flex items-center justify-between p-4 border-b border-[#E9EAF0]">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=1"
              alt="Jane"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-sm">Jane Cooper</div>
              <div className="text-xs text-green-500">Active Now</div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12h.01M12 12h.01M18 12h.01"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-6 bg-gray-50">
          <div className="text-center text-xs text-gray-400">Today</div>

          {messages.map((msg, idx) => {
            const isFirstOtherMsg =
              msg.from !== "me" &&
              (idx === 0 || messages[idx - 1]?.from === "me");
            const isLastOtherMsg =
              msg.from !== "me" &&
              (idx === messages.length - 1 || messages[idx + 1]?.from === "me");

            const showAvatarAbove = isFirstOtherMsg || isLastOtherMsg;

            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.from === "me" ? "items-end" : "items-start"
                }`}
              >
                {showAvatarAbove && (
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="User"
                    className="h-4 w-4 rounded-full mb-1"
                  />
                )}

                <div className="max-w-[75%]">
                  <div
                    className={`rounded-xl px-4 py-2 text-sm whitespace-pre-wrap ${
                      msg.from === "me"
                        ? "bg-[#FF6636] text-white rounded-tr-none"
                        : "bg-[#FFEEE8] text-gray-800 rounded-tl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div
                    className={`text-xs mt-1 text-gray-400 ${
                      msg.from === "me" ? "text-right pr-1" : "text-left pl-1"
                    }`}
                  >
                    Time
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 border-t border-[#E9EAF0] bg-white">
          <div className="flex items-center gap-2">
            <div className="flex items-center flex-1 border border-[#E9EAF0] rounded-md px-3 py-2 text-sm text-gray-700">
              <img
                src={writeicon}
                alt="Message Icon"
                className="h-4 w-4 mr-2"
              />
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message"
                className="w-full focus:outline-none"
              />
            </div>

            <button
              onClick={sendMessage}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1"
            >
              Send
              <img src={sendicon} alt="Send Icon" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
