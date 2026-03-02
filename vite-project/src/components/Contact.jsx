import React, { useRef, useState } from "react";
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
        (err) => {
          console.log(err);
          setStatus("Something went wrong ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-16 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Connect
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r 
                          from-purple-500 to-blue-500 
                          mx-auto mt-6 rounded-full">
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Let’s build something meaningful.
            </h3>

            <p className="text-gray-400 text-base leading-relaxed">
              Have an idea, opportunity, or just want to connect?
              I’m always open to conversations around development,
              collaboration, and growth.
            </p>
          </div>

          {/* RIGHT SIDE – MODERN FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-8"
          >

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-8">

              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="bg-transparent border-b border-white/20 
                             focus:border-purple-500 
                             outline-none py-2 text-white
                             transition duration-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="bg-transparent border-b border-white/20 
                             focus:border-purple-500 
                             outline-none py-2 text-white
                             transition duration-300"
                />
              </div>

            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="bg-transparent border-b border-white/20 
                           focus:border-purple-500 
                           outline-none py-2 text-white
                           resize-none transition duration-300"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-4 px-8 py-3 
                         border border-white/20
                         text-white font-medium 
                         hover:bg-white hover:text-black
                         transition duration-300"
            >
              Send Message →
            </button>

            {status && (
              <p className="text-sm text-gray-400 mt-4">
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