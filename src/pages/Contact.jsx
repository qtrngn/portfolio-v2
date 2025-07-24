import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xnnverne", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset(); // clear form
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="w-full px-6 py-40 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Left: title + contact icons */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-extrabold leading-snug text-gray-700 mb-6">
            CONTACT
          </h2>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <MdEmail className="text-black text-[18px]" />
              </div>
              <a href="mailto:nquynh1110@gmail.com" className="hover:underline">
                nquynh1110@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <FaLinkedinIn className="text-black text-[16px]" />
              </div>
              <a
                href="https://www.linkedin.com/in/truc-quynh-nguyen-642a2633a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-2/3 grid grid-cols-1 gap-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                name="message"
                required
                className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md text-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="nline-block mt-2 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Send Message
            </button>

            {/* ✅ Notification */}
            {status === "success" && (
              <p className="text-green-600 text-sm">Thanks! Your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">Oops! Something went wrong. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
