import React, { useEffect, useState } from "react";
import { gettransactionApi } from "../Services/AllApi";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  // Load transactions on page load
  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const response = await gettransactionApi();
      setTransactions(response.data || []);  // response is an array of {type, amount, date}
    } catch (err) {
      console.log("Error loading transactions:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 pt-24 pb-12 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg border border-gray-200 p-8">

        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Transaction History
        </h2>

        {/* If no transactions */}
        {transactions.length === 0 ? (
          <p className="text-center text-gray-600 py-10">
            No transactions found.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-4 text-left font-semibold border-b">Type</th>
                  <th className="p-4 text-left font-semibold border-b">Amount</th>
                  <th className="p-4 text-left font-semibold border-b">Date</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((t, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    {/* Type */}
                    <td className="p-4 font-semibold">
                      {t.type === "credit" ? (
                        <span className="text-green-600">Credit</span>
                      ) : (
                        <span className="text-red-500">Debit</span>
                      )}
                    </td>

                    {/* Amount */}
                    <td className="p-4 text-gray-800 font-bold">
                      ₹{t.amount}
                    </td>

                    {/* Date */}
                    <td className="p-4 text-gray-600">
                      {new Date(t.date).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default TransactionHistory;
