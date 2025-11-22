import React, { useState } from "react";
import { addApi } from "../Services/AllApi";
import { useNavigate } from "react-router-dom";

const AddMoney = () => {
  const nav = useNavigate();

  const [amount, setAmount] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (msg) => {
    setToast({ show: true, message: msg });

    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 2500);
  };

  const handleAddMoney = async () => {
    if (!amount || amount <= 0) {
      showToast("Enter a valid amount");
      return;
    }

    const data = {
      amount: Number(amount),
      note: inputValue,
    };

    try {
      const response = await addApi(data);

      if (response.status === 200) {
        showToast("Money added successfully!");
        setAmount("");
        setInputValue("");
        setTimeout(() => nav("/"), 1500);
      }
    } catch (err) {
      console.log(err);
      showToast("Failed to add money");
    }
  };

  return (
    <>
      {/* ---------- TOAST (Bottom Popup FIXED) ---------- */}
      <div
        className={`
          fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[9999]
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
            Add Money
          </h2>

          <p className="text-gray-600 text-center mb-8">
            Load money into your Raynott Wallet instantly.
          </p>

          {/* Amount */}
          <div className="mb-6">
            <label className="text-gray-700 mb-2 block font-medium">
              Enter Amount (₹)
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg outline-none focus:border-green-600"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          {/* UPI / Card */}
          <div className="mb-6">
            <label className="text-gray-700 mb-1 block font-medium">
              Enter UPI ID / Card Number / Customer ID
            </label>
            <input
              type="password"
              placeholder="example@upi / 1234 5678 XXXX"
              className="w-full bg-gray-100 border border-gray-300 p-3 rounded-lg outline-none focus:border-green-600"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            className="w-full bg-green-600 text-white py-3 rounded-xl font-bold text-lg hover:bg-green-700 transition"
            onClick={handleAddMoney}
          >
            Add Money
          </button>

        </div>
      </div>
    </>
  );
};

export default AddMoney;
