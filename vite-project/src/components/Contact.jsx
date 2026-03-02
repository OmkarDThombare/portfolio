import React, { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  import.meta.env.VITE_EMAIL_SERVICE_ID,
  import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAIL_PUBLIC_KEY
)
      .then(
        () => {
          setStatus("Message sent successfully ✅");
          form.current.reset();
        },
        () => {
          setStatus("Something went wrong ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Connect
          </h2>

          <div className="w-24 h-[2px] bg-gradient-to-r 
                          from-purple-500 to-blue-500 
                          mx-auto mt-6 rounded-full">
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <h3 className="text-3xl md:text-4xl font-semibold leading-snug">
              Open to building impactful digital products.
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed">
              Whether you have a project idea, a role opportunity,
              or just want to connect — feel free to reach out.
              I’m always open to meaningful collaborations.
            </p>

            <a
              href="/Omkar_Thombare.pdf"
              download
              className="inline-flex items-center gap-3 
                         px-7 py-3 rounded-lg 
                         bg-gradient-to-r from-emerald-600 to-teal-500
                         text-white font-medium
                         hover:scale-105 transition duration-300"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          {/* RIGHT SIDE – FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       rounded-2xl p-10 space-y-6"
          >

            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full p-4 rounded-lg bg-white/10 
                           text-white placeholder-gray-400 
                           outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="w-full p-4 rounded-lg bg-white/10 
                           text-white placeholder-gray-400 
                           outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full p-4 rounded-lg bg-white/10 
                         text-white placeholder-gray-400 
                         outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg 
                         bg-gradient-to-r from-purple-500 
                         via-indigo-500 to-blue-500
                         text-white font-semibold
                         hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-gray-300 mt-2">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;