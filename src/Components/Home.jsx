import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getmoneyApi } from "../Services/AllApi";
const Home = () => {
    const [user, setUser] = useState("");
    const [balance, setBalance] = useState(0);

    // LOAD USER INFO + BALANCE
    useEffect(() => {
        const userdata = JSON.parse(sessionStorage.getItem("userData"));
        setUser(userdata);
        fetchBalance();
    }, []);

    // Fetch wallet money from backend
    const fetchBalance = async () => {
        try {
            const result = await getmoneyApi();
            setBalance(result.data.amount);
        } catch (error) {
            console.log("Error loading balance:", error);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-50 text-gray-900">

            {/* HERO SECTION */}
            <section className="pt-24 pb-16 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* TEXT */}
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-gray-900">
                            Raynott Fintech
                        </h1>

                        <p className="text-lg text-gray-600 mb-6">
                            A smart, secure and modern way to manage your money.
                            Add funds, transfer instantly, and track transactions — all in one place.
                        </p>

                        {!user ? (
                            <Link
                                to="/auth"
                                className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl shadow hover:bg-green-700 transition"
                            >
                                Get Started
                            </Link>
                        ) : (
                            <Link
                                to="/about"
                                className="bg-green-600 text-white font-bold px-8 py-3 rounded-xl shadow hover:bg-green-700 transition"
                            >
                                Who We
                            </Link>
                        )}
                    </div>

                    {/* IMAGE */}
                    <div className="flex-1">
                        <img
                            src="https://img.freepik.com/premium-vector/home-loan-icon-logo_586739-6079.jpg"
                            alt="Finance Illustration"
                            className="w-full sm:h-[120px] md:h-[400px] rounded-3xl"
                        />
                    </div>

                </div>
            </section>

            {/* USER DASHBOARD QUICK ACCESS */}
            <section className="py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    User Dashboard Quick Access
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* USER DETAILS */}
                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">User Details</h3>
                        <div className="space-y-2 text-gray-600">
                            <p>
                                <strong className="text-gray-800">Name:</strong> {user?.username || "Guest"}
                            </p>
                            <p>
                                <strong className="text-gray-800">Email:</strong> {user?.email || "Not logged in"}
                            </p>
                            <p>
                                <strong className="text-gray-800">User ID:</strong> {user?._id || "N/A"}
                            </p>
                        </div>
                    </div>

                    {/* BALANCE CARD (DYNAMIC) */}
                    <Link to={'/balance'}>
                        <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Current Balance</h3>
                            <p className="text-5xl font-extrabold text-green-600">₹ {balance}</p>
                            <p className="text-gray-500 mt-2">Updated just now</p>
                        </div>
                    </Link>

                </div>

                {/* ROW 2 */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

                    {/* ADD MONEY */}
                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Add Money</h3>
                        <p className="text-gray-500 mb-6">Load funds into your wallet quickly.</p>

                        <Link
                            to="/addmoney"
                            className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition inline-block"
                        >
                            Go to Add Money →
                        </Link>
                    </div>

                    {/* TRANSACTION HISTORY */}
                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Transaction History</h3>
                        <p className="text-gray-500 mb-6">View your credits & debits.</p>

                        <Link
                            to="/th"
                            className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition inline-block"
                        >
                            View History →
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
                        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Retrieve Money</h3>
                        <p className="text-gray-500 mb-6">retrieve Money</p>

                        <Link
                            to="/retrieve"
                            className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition inline-block"
                        >
                            Retrieve money →
                        </Link>
                    </div>

                    
                        <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Request Loan</h3>
                            <p className="text-gray-500 mb-6 ">request Loan</p>
                            <Link
                                to="/loan"
                                className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition inline-block"
                            >
                                Request Loan →
                            </Link>

                        </div>
                    

                </div>

            </section>

            {/* FEATURES */}
            <section className="py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    Why Choose Raynott?
                </h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Instant Add Money</h3>
                        <p className="text-gray-600">
                            Add funds instantly with secure payment options.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Transfers</h3>
                        <p className="text-gray-600">
                            Send money to anyone within seconds.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Track Transactions</h3>
                        <p className="text-gray-600">
                            Always stay on top of your financial activity.
                        </p>
                    </div>

                </div>
            </section>

            {/* STATS */}
            <section className="py-16 bg-white shadow-inner border-t border-gray-200 text-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    <div><h2 className="text-4xl font-extrabold">1M+</h2><p>Transactions</p></div>
                    <div><h2 className="text-4xl font-extrabold">500K+</h2><p>Users</p></div>
                    <div><h2 className="text-4xl font-extrabold">99.9%</h2><p>Security</p></div>
                    <div><h2 className="text-4xl font-extrabold">24/7</h2><p>Support</p></div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-16 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Wallet</h3>
                        <p className="text-gray-600">Manage your money digitally with ease.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Secure Payments</h3>
                        <p className="text-gray-600">Your transactions are fully encrypted.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Financial Analysis</h3>
                        <p className="text-gray-600">Understand and optimize your spending.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 text-center bg-green-600 text-white">
                <h2 className="text-3xl font-extrabold mb-4">Start Your Financial Journey</h2>
                <p className="mb-6">Create your secure Raynott Fintech account today.</p>

                <Link
                    to={"/auth"}
                    className="bg-white text-green-700 px-8 py-3 text-lg rounded-xl font-bold hover:bg-gray-100 transition"
                >
                    Create Account
                </Link>
            </section>

        </div>
    );
};

export default Home;
