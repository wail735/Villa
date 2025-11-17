import PageHeader from "./PageHeader";
import { Typography } from "@mui/material";
import { useState } from "react";
import MapComponent from "./Contact/MapComponent";
export default function Contact() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <div className="bg-white">
      <PageHeader />

      <div className="p-6 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left side */}
        <div className="space-y-6">
          <Typography
            variant="h6"
            sx={{ color: "#ee626b", fontWeight: "bold" }}
          >
            | Contact Us
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Get In Touch <br /> With Our Agents
          </Typography>
          <Typography variant="body1" sx={{ color: "#6b7280" }}>
            When you really need to download free CSS templates, please remember
            our website TemplateMo. Also, tell your friends about our website.
            Thank you for visiting. There is a variety of Bootstrap HTML CSS
            templates on our website. If you need more information, please
            contact us.
          </Typography>

          {/* Contact cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md border w-full max-w-md lg:max-w-sm">
              <img
                src="./assets/images/phone-icon.png"
                alt="Phone"
                className="w-10"
              />
              <div>
                <p className="font-bold text-lg">010-020-0340</p>
                <p className="text-gray-400">Phone Number</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md border w-full max-w-md lg:max-w-sm">
              <img
                src="./assets/images/email-icon.png"
                alt="Email"
                className="w-10"
              />
              <div>
                <p className="font-bold text-lg">info@villa.co</p>
                <p className="text-gray-400">Business Email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <form className="space-y-5 bg-white p-8 rounded-xl shadow-lg border">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full bg-gray-100 p-3 rounded-full outline-none"
              value={info.name}
              onChange={(event) => {
                setInfo({ ...info, name: event.target.value });
              }}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Your E-mail..."
              className="w-full bg-gray-100 p-3 rounded-full outline-none"
              value={info.email}
              onChange={(event) => {
                setInfo({ ...info, email: event.target.value });
              }}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject..."
              className="w-full bg-gray-100 p-3 rounded-full outline-none"
              value={info.subject}
              onChange={(event) => {
                setInfo({ ...info, subject: event.target.value });
              }}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full bg-gray-100 p-3 rounded-xl outline-none min-h-[120px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:opacity-90"
            value={info.message}
            onChange={(event) => {
              setInfo({ ...info, message: event.target.value });
            }}
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-full lg:max-w-6xl mx-auto px-4 lg:px-0">
        <MapComponent />
      </div>
    </div>
  );
}
