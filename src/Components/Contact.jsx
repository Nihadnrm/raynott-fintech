import React, { useState } from "react";
import { addContactApi } from "../Services/AllApi";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (msg, type = "success") => {
    setToast({ show: true, message: msg, type });

    setTimeout(() => {
      setToast({ show: false, message: "", type });
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showToast("All fields are required", "error");
      return;
    }

    try {
      const res = await addContactApi(form);

      if (res.status === 200) {
        showToast("Message sent successfully!", "success");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => nav("/"), 800); // <-- FIXED
      }
    } catch (err) {
      showToast("Failed to send message", "error");
    }
  };

  return (
    <div className="w-full bg-gray-50 text-gray-900">

      {/* ---------- FIXED TOAST ---------- */}
      <div
        className={`
          fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50
          px-6 py-3 rounded-xl shadow-xl text-white text-sm font-semibold
          transition-all duration-500
          ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
        `}
      >
        {toast.message}
      </div>

      {/* HEADER */}
      <section className="pt-24 pb-10 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Have questions? Our support team is available 24/7 to assist you.
        </p>
      </section>

      {/* CONTACT FORM + DETAILS */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="text-gray-700 mb-1 block">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-gray-800 focus:border-green-500 outline-none"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-700 mb-1 block">Email</label>
                <input
                  type="email"
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-gray-800 focus:border-green-500 outline-none"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-700 mb-1 block">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-300 p-3 rounded-lg text-gray-800 focus:border-green-500 outline-none"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT DETAILS + MAP */}
          <div className="space-y-10">

            {/* CONTACT INFORMATION */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>

              <p className="text-gray-600 mb-4">
                Reach out to us for support or business inquiries.
              </p>

              <div className="space-y-3 text-gray-700">
                <p>
                  📍 <strong className="text-gray-900">Address:</strong>  
                  Raynott Fintech HQ, Bengaluru, India
                </p>

                <p>
                  📞 <strong className="text-gray-900">Phone:</strong>  
                  +91 98765 43210
                </p>

                <p>
                  📧 <strong className="text-gray-900">Email:</strong>  
                  support@raynottfintech.com
                </p>

                <p>
                  🕒 <strong className="text-gray-900">Working Hours:</strong>  
                  24/7 Customer Support
                </p>
              </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow overflow-hidden">
              <iframe
                title="Raynott Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.996791648943!2d77.59456231430495!3d12.97159899085708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f725f7c1%3A0xe3d3e15e6bdb9e0d!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1687087456789!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="border-0"
                loading="lazy"
                allowFullScreen=""
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
