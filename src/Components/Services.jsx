import React from "react";

const Services = () => {
  return (
    <section className="py-20 px-6 bg-gray-50 text-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-14">
        Our Premium Financial Services
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* SERVICE 1 */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">💳 Smart Digital Wallet</h3>
          <p className="text-gray-600 leading-relaxed">
            Store and manage your funds securely in one place.  
            Enjoy instant top-ups, strong encryption, and real-time balance updates.
          </p>
        </div>

        {/* SERVICE 2 */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">🔐 Ultra-Secure Payments</h3>
          <p className="text-gray-600 leading-relaxed">
            All transactions are secured with multi-layer encryption ensuring  
            safe, fast, and reliable payments.
          </p>
        </div>

        {/* SERVICE 3 */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">📊 Financial Analytics</h3>
          <p className="text-gray-600 leading-relaxed">
            Access spending analytics, pattern tracking, and AI-powered  
            insights to improve your financial habits.
          </p>
        </div>

        {/* SERVICE 4 */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">⚡ Instant Peer Transfers</h3>
          <p className="text-gray-600 leading-relaxed">
            Send and receive money instantly with zero delays and  
            zero hidden charges — fully transparent.
          </p>
        </div>

        {/* SERVICE 5 */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">🛡 24/7 Fraud Protection</h3>
          <p className="text-gray-600 leading-relaxed">
            Our AI systems detect unusual activity instantly to keep  
            your account safe from unauthorized access.
          </p>
        </div>

        {/* SERVICE 6 */}
        <div className="bg-white p-7 rounded-2xl border border-gray-200 shadow hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">🌍 Global Payments</h3>
          <p className="text-gray-600 leading-relaxed">
            Transfer money internationally quickly and affordably with  
            complete transparency and real-time tracking.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
