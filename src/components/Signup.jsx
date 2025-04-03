import React, { useState, useEffect } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { HiClipboardCopy } from "react-icons/hi";

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        enroller: "",
        package: ""
    });
    const [errors, setErrors] = useState({});
    const [apiError, setApiError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [tempPassword, setTempPassword] = useState('');
    const [countdown, setCountdown] = useState(60);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (showPasswordModal && countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        } else if (countdown === 0) {
            setShowPasswordModal(false);
            navigate('/login');
        }
        return () => clearInterval(timer);
    }, [showPasswordModal, countdown, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
        setApiError("");
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.lastName) newErrors.lastName = "Last name is required.";
        if (!formData.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Valid email is required.";
        if (!formData.enroller) newErrors.enroller = "Enroller name is required.";
        if (!formData.package) newErrors.package = "You must select a package.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError("");
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const response = await api.post("/api/auth/signup", formData);
            if (response.data.message === "Signup successful") {
                localStorage.setItem('token', response.data.user.token);
                localStorage.setItem('tempPassword', response.data.user.tempPassword);
                localStorage.setItem('tempEmail', formData.email);
                setTempPassword(response.data.user.tempPassword);
                setShowPasswordModal(true);
                setCountdown(60);
            }
        } catch (err) {
            console.error("Signup error:", err);
            setApiError(err.response?.data?.message || "Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-12 flex flex-col items-center">
            <div className="max-w-3xl w-full text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-300">Magnificent Worldwide</h1>
                <p className="text-md text-orange-400 font-semibold">Marketing & Sales Group -- Team 25,000</p>
                <h2 className="text-3xl font-bold mt-6">Pre-Enrollment Form</h2>
            </div>

            {apiError && (
                <div className="w-full max-w-2xl mb-4 p-4 bg-red-900/50 border border-red-500 rounded-lg">
                    <p className="text-red-300">{apiError}</p>
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="bg-gray-900 shadow-xl rounded-lg p-8 w-full max-w-2xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="p-3 rounded bg-gray-800 text-white border border-gray-700 w-full"
                        />
                        {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="p-3 rounded bg-gray-800 text-white border border-gray-700 w-full"
                        />
                        {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 w-full rounded bg-gray-800 text-white border border-gray-700"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="enroller"
                        placeholder="Who told you about Talk Fusion?"
                        value={formData.enroller}
                        onChange={handleChange}
                        className="p-3 w-full rounded bg-gray-800 text-white border border-gray-700"
                    />
                    {errors.enroller && <p className="text-red-400 text-sm mt-1">{errors.enroller}</p>}
                </div>

                <h3 className="text-xl font-semibold mb-3">Select Your Package</h3>
                {errors.package && <p className="text-red-400 text-sm mb-2">{errors.package}</p>}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {[
                        { label: "Entry Pack", value: "Entry Pack", price: "$175", perks: ["Basic tools", "100 PV", "$50 Bonus", "Training"] },
                        { label: "Elite Pack", value: "Elite Pack", price: "$350", perks: ["Advanced tools", "200 PV", "$100 Bonus", "Priority"] },
                        { label: "Pro Pack", value: "Pro Pack", price: "$700", perks: ["Full tools", "400 PV", "$200 Bonus", "24/7 Support"] }
                    ].map((pkg) => (
                        <label
                            key={pkg.value}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition hover:border-yellow-400 ${formData.package === pkg.value ? "border-yellow-400 bg-gray-800" : "border-gray-700"}`}
                        >
                            <input
                                type="radio"
                                name="package"
                                value={pkg.value}
                                onChange={handleChange}
                                checked={formData.package === pkg.value}
                                className="hidden"
                            />
                            <div className="text-xl font-bold text-yellow-400">{pkg.label}</div>
                            <div className="text-lg font-semibold">{pkg.price}</div>
                            <ul className="text-sm list-disc list-inside text-gray-400 mt-2">
                                {pkg.perks.map((perk, i) => <li key={i}>{perk}</li>)}
                            </ul>
                        </label>
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded text-lg"
                >
                    Submit Pre-Enrollment
                </button>
            </form>

            {/* Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-8 rounded-xl shadow-xl text-center max-w-md">
                        <h2 className="text-2xl font-bold mb-4">✅ You're In!</h2>
                        <p className="mb-6">Thanks for enrolling. You'll be redirected to your dashboard shortly.</p>
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    </div>
                </div>
            )}

            {/* Password Modal */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 rounded-lg shadow-xl p-6 max-w-md w-full">
                        <h3 className="text-xl font-bold text-yellow-400 mb-4">Your Temporary Password</h3>
                        <div className="bg-gray-700 p-4 rounded-lg mb-4">
                            <p className="text-sm text-gray-400 mb-2">Please write down this password. You'll need it to log in:</p>
                            <div className="flex items-center justify-between">
                                <code className="text-lg font-mono bg-gray-900 px-3 py-2 rounded text-yellow-400">{tempPassword}</code>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(tempPassword);
                                        setSuccess('Password copied to clipboard!');
                                        setTimeout(() => setSuccess(''), 2000);
                                    }}
                                    className="ml-2 text-blue-400 hover:text-blue-300"
                                >
                                    <HiClipboardCopy className="text-xl" />
                                </button>
                            </div>
                            {success && <p className="text-green-400 text-sm mt-2">{success}</p>}
                        </div>
                        <div className="text-sm text-gray-400">
                            <p>Time remaining to write down your password: {countdown} seconds</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplicationForm; 