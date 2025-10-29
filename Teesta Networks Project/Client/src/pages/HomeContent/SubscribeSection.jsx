import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return alert("Please enter a valid email address");
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-200 py-6 px-6 md:px-20 bg-white">
      {/* Left - Subscribe form */}
      <div className="w-full md:w-1/2">
        <h3 className="font-semibold mb-3 text-gray-900">
          Subscribe to our news alerts
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex items-center border border-gray-300 rounded overflow-hidden max-w-md"
        >
          <input
            type="email"
            placeholder="Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 outline-none text-gray-800"
          />
          <button
            type="submit"
            className="bg-[#b8860b] text-white font-semibold px-5 py-2 hover:bg-[#a67c05] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Right - Social icons */}
      <div className="flex items-center gap-4">
        {[
          { icon: <FaFacebookF />, link: "#" },
          { icon: <FaInstagram />, link: "#" },
          { icon: <FaXTwitter />, link: "#" },
          { icon: <FaLinkedinIn />, link: "#" },
          { icon: <FaYoutube />, link: "#" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            className="bg-[#b8860b] text-white p-2.5 rounded-full hover:bg-[#a67c05] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
}