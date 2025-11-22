import React from "react";

const About = () => {
  const team = [
    {
      name: "Aarav Sharma",
      role: "CEO & Founder",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Neha Patel",
      role: "CTO - Technology Head",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Verma",
      role: "Lead UI/UX Designer",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="pt-24 pb-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          About Raynott Fintech
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Raynott Fintech is redefining modern finance with faster, safer, and
          smarter digital money solutions for everyone.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">🎯 Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide secure, fast, and accessible financial
              services that help individuals and businesses manage money with confidence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border border-gray-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">🚀 Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to become a global financial technology leader, creating a world
              where digital payments are seamless and borderless.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Why Choose Raynott?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">⚡ Instant Processing</h3>
            <p className="text-gray-600">
              Transfer funds instantly with no delays.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">🔐 Bank-Level Security</h3>
            <p className="text-gray-600">
              Your money is protected with multi-layer encryption.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">🌍 Global Reach</h3>
            <p className="text-gray-600">
              Experience fast cross-border transactions with transparent fees.
            </p>
          </div>

        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Our Journey
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">

          {[
            {
              year: "📅 2021 – The Beginning",
              text: "Raynott Fintech started with a mission to revolutionize digital payments.",
            },
            {
              year: "⚙️ 2022 – Wallet Launch",
              text: "Launched our Smart Wallet with instant transfer and advanced security.",
            },
            {
              year: "🌐 2023 – Global Expansion",
              text: "Expanded our services to support seamless international transfers.",
            },
            {
              year: "🤖 2024 – AI Insights",
              text: "Introduced AI tools for smarter spending and financial guidance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-800">{item.year}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white text-center p-6 rounded-2xl shadow border border-gray-200 hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-green-500 object-cover shadow"
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 mt-1">{member.role}</p>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default About;
