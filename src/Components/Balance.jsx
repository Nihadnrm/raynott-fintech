import React, { useEffect, useState } from "react";
import { getmoneyApi } from "../Services/AllApi";
const Balance = () => {
  const [user, setUser] = useState("");
  const [balance, setBalance] = useState(0);

  // LOAD USER + BALANCE
  useEffect(() => {
    const userdata = JSON.parse(sessionStorage.getItem("userData"));
    setUser(userdata);

    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const result = await getmoneyApi();
      setBalance(result.data.amount);
    } catch (err) {
      console.log("Balance fetch error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-24 pb-12 flex justify-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Wallet Balance
        </h2>

        {/* USER INFO */}
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">User Info</h3>

          <p className="text-gray-700">
            <strong>Name:</strong> {user?.username}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {user?.email}
          </p>
          <p className="text-gray-700">
            <strong>User ID:</strong> {user?._id}
          </p>
        </div>

        {/* BALANCE CARD */}
        <div className="bg-white p-8 rounded-2xl shadow text-center border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Current Wallet Balance
          </h3>

          <p className="text-5xl font-extrabold text-green-600">
            ₹ {balance}
          </p>

          <p className="text-gray-500 mt-3">
            Last updated: right now
          </p>
        </div>

      </div>
    </div>
  );
};

export default Balance;
