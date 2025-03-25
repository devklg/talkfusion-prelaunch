import React, { useState } from "react";
import axios from "axios";

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        enroller: "",
        package: ""
    });
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
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
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            await axios.post("/api/auth/signup", formData);
            setShowModal(true);
        } catch (err) {
            alert("Something went wrong. Try again later.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-12 flex flex-col items-center">
            <div className="max-w-3xl w-full text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-300">Magnificent Worldwide</h1>
                <p className="text-md text-orange-400 font-semibold">Marketing & Sales Group -- Team 25,000</p>
                <h2 className="text-3xl font-bold mt-6">Pre-Enrollment Form</h2>
            </div>

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

                <div className="mb-6">
                    <input
                        type="text"
                        name="enroller"
                        placeholder="Enroller Name *"
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
                        { label: "Entry Pack", value: "entry", price: "$175", perks: ["Basic tools", "100 PV", "$50 Bonus", "Training"] },
                        { label: "Elite Pack", value: "elite", price: "$350", perks: ["Advanced tools", "200 PV", "$100 Bonus", "Priority"] },
                        { label: "Pro Pack", value: "pro", price: "$700", perks: ["Full tools", "400 PV", "$200 Bonus", "24/7 Support"] }
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
                        <p className="mb-6">Thanks for enrolling. A confirmation email will be sent shortly.</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplicationForm; 