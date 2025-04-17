import React from "react";
import { Search, Bell, Mail, SendHorizontal } from "lucide-react";

export default function ContactUs() {
  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-b border-light gap-4">
        {/* Logo + Search */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:max-w-md">
          <h1 className="text-2xl font-bold text-dark">
            Edu<span className="text-primary">NEXUS</span>
          </h1>
          <div className="flex items-center border border-light rounded-md px-3 py-1 bg-white w-full sm:w-auto flex-1">
            <Search size={18} className="text-light mr-2" />
            <input
              type="text"
              placeholder="What do you want learn..."
              className="w-full outline-none bg-transparent text-dark placeholder-light"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Bell className="text-dark" />
          <button className="bg-primary text-white px-4 py-2 rounded font-medium">
            Create Account
          </button>
          <button className="text-primary border border-primary px-4 py-2 rounded font-medium">
            Sign In
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-around px-8 py-16 bg-white gap-12">
        {/* Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl font-bold text-dark mb-4">Connect with us</h1>
          <p className="text-light mb-6">
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded flex items-center gap-2 mx-auto lg:mx-0">
            <Mail size={18} /> Copy Email
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="./Fit.png"
            alt="Support agent"
            className="w-[450px] md:w-[500px] h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-light px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">
          Contact Us
        </h2>

        <div className="flex flex-col-reverse lg:flex-row justify-center gap-16 max-w-6xl mx-auto">
          {/* Left Side - Info */}
          <div className="flex-1 text-dark space-y-6">
            <p className="text-lg">
              Will you be in Los Angeles or any other branches any time soon?
              Stop by the office! We'd love to meet.
            </p>

            <div className="flex gap-6 items-start">
              <h4 className="font-semibold text-primary w-40">ADDRESS</h4>
              <p className="text-sm text-dark">
                1702 Olympic Boulevard<br />
                Santa Monica, CA 90404
              </p>
            </div>

            <div className="flex gap-6 items-start">
              <h4 className="font-semibold text-primary w-40">PHONE NUMBER</h4>
              <p className="text-sm text-dark">
                (480) 555-0103<br />
                (219) 555-0114
              </p>
            </div>

            <div className="flex gap-6 items-start">
              <h4 className="font-semibold text-primary w-40">EMAIL ADDRESS</h4>
              <p className="text-sm text-dark">
                help.eduguard@gmail.com<br />
                career.eduguard@gmail.com
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-dark mb-2">Get In touch</h3>
            <p className="text-light text-sm mb-6">
              Feel free to contact us, we love to make new partners & friends
            </p>

            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6 justify-around">
                <input
                  type="text"
                  placeholder="First name..."
                  className="border border-light px-4 py-2 rounded w-full"
                />
                <input
                  type="text"
                  placeholder="Last name..."
                  className="border border-light px-4 py-2 rounded w-full"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="border border-light px-4 py-2 rounded w-full"
              />

              <input
                type="text"
                placeholder="Message Subject"
                className="border border-light px-4 py-2 rounded w-full"
              />

              <textarea
                placeholder="Message Subject"
                className="border border-light px-4 py-2 rounded w-full h-32 resize-none"
              />

              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded font-semibold flex items-center gap-2"
              >
                Send Message
                <SendHorizontal />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
