import React, { useState } from "react";
import { retriveApi } from "../Services/AllApi";
import { useNavigate } from "react-router-dom";

const RetrieveMoney = () => {

    const nav=useNavigate()
  const [amount, setAmount] = useState("");
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (msg) => {
    setToast({ show: true, message: msg });
    setTimeout(() => setToast({ show: false, message: "" }), 2500);
  };
const handleRetrieveMoney = async () => {
  if (!amount || amount <= 0) {
    showToast("Enter a valid amount");
    return;
  }

  const data = { amount: Number(amount) };

  try {
    const response = await retriveApi(data);

    if (response.status === 200) {
      showToast("Money withdrawn successfully!");
      setAmount(""); 
      nav("/")
    } else {
      showToast("Failed to retrieve money");
    }
  } catch (err) {
    console.log(err);
    showToast(err?.response?.data?.message || "Failed to retrieve money");
  }
};


  return (
    <>
      {/* ---------- TOAST ---------- */}
      <div
        className={`
          fixed bottom-6 left-1/2 transform -translate-x-1/2 
          px-6 py-3 rounded-lg shadow-lg text-white bg-black
          transition-all duration-500 text-sm font-semibold
          ${toast.show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {toast.message}
      </div>

      {/* ---------- MAIN UI ---------- */}
      <div className="min-h-screen bg-gray-50 flex justify-center items-start px-4 pt-24">
        <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Retrieve Money
          </h2>

          <p className="text-gray-600 text-center mb-8">
            Withdraw money securely from your Raynott Wallet.
          </p>

          {/* Amount Input */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block font-medium">
              Enter Amount (₹)
            </label>
            <input
              type="number"
              placeholder="enter amount"
              className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg outline-none focus:border-red-600"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* Dummy PIN Input (Just UI) */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block font-medium">
              Enter Your PIN 
            </label>
            <input
              type="password"
              placeholder="****"
              className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg outline-none focus:border-red-600"
            />
          </div>

          {/* Submit */}
          <button
            className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-red-700 transition"
            onClick={handleRetrieveMoney}
          >
            Withdraw Money
          </button>

        </div>
      </div>
    </>
  );
};

export default RetrieveMoney;
