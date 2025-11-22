import React, { useState } from "react";
import { addLoanApi } from "../Services/AllApi";
import { useNavigate } from "react-router-dom";

const LoanPages = () => {
  const nav = useNavigate();

  const [data, setData] = useState({
    Loantype: "",
    amount: "",
    duration: "",
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

  const handleApplyLoan = async () => {
    if (!data.Loantype) {
      showToast("Please select a loan type", "error");
      return;
    }

    if (!data.amount || data.amount <= 0) {
      showToast("Enter a valid amount", "error");
      return;
    }

    if (!data.duration || data.duration <= 0) {
      showToast("Enter loan duration", "error");
      return;
    }

    const response = await addLoanApi(data);

    if (response.status === 200) {
      showToast("Loan requested successfully!", "success");

      // Clear inputs
      setData({ Loantype: "", amount: "", duration: "" });

      // Redirect home after toast
      setTimeout(() => {
        nav("/");
      }, 1500);
    } else {
      showToast("Loan application failed", "error");
    }
  };

  return (
    <>
      {/* ---------- BEAUTIFUL BOTTOM TOAST ---------- */}
      <div
        className={`
          fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999]
          px-6 py-3 rounded-xl shadow-xl text-white text-sm font-semibold
          transition-all duration-500
          ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}
        `}
      >
        {toast.message}
      </div>

      {/* ---------- MAIN UI ---------- */}
      <div className="min-h-screen bg-gray-50 flex justify-center items-start px-4 py-24">
        <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Apply for Loan
          </h2>

          <p className="text-gray-600 text-center mb-8">
            Choose loan type, enter amount and duration.
          </p>

          {/* Loan Type */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block font-medium">
              Select Loan Type
            </label>
            <select
              value={data.Loantype}
              className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-600"
              onChange={(e) => setData({ ...data, Loantype: e.target.value })}
            >
              <option value="">-- Select Loan Type --</option>
              <option value="Personal Loan">Personal Loan</option>
              <option value="Home Loan">Home Loan</option>
              <option value="Education Loan">Education Loan</option>
              <option value="Business Loan">Business Loan</option>
            </select>
          </div>

          {/* Loan Amount */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block font-medium">
              Loan Amount (₹)
            </label>
            <input
              type="number"
              placeholder="50000"
              value={data.amount}
              className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-600"
              onChange={(e) => setData({ ...data, amount: e.target.value })}
            />
          </div>

          {/* Duration */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block font-medium">
              Duration (Months)
            </label>
            <input
              type="number"
              placeholder="12"
              value={data.duration}
              className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-600"
              onChange={(e) => setData({ ...data, duration: e.target.value })}
            />
          </div>

          {/* Interest Rate */}
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-center mb-6">
            <h3 className="text-lg font-semibold text-blue-700">Interest Rate</h3>
            <p className="text-3xl font-extrabold text-blue-600">12%</p>
          </div>

          {/* EMI (Dummy) */}
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-center mb-8">
            <h3 className="text-lg font-semibold text-green-700">Monthly EMI</h3>
            <p className="text-3xl font-extrabold text-green-600">₹ 0</p>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-blue-700 transition"
            onClick={handleApplyLoan}
          >
            Apply Loan
          </button>

        </div>
      </div>
    </>
  );
};

export default LoanPages;
