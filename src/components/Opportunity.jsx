import React from 'react';
import { HiLightBulb, HiTrendingUp, HiGlobe, HiUserGroup, HiClock, HiShieldCheck } from 'react-icons/hi';

const Opportunity = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8">Business Opportunity</h2>

                {/* Hero Section */}
                <div className="mb-12 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">Join the Future of Digital Communication</h3>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Be part of a revolutionary platform that's transforming how people connect, communicate, and do business online.
                    </p>
                </div>

                {/* Key Benefits */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-white mb-6">Why Choose Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <HiLightBulb className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-lg font-medium text-white">Innovative Technology</h4>
                            </div>
                            <p className="text-gray-300">Access cutting-edge communication tools and platforms that set you apart from the competition.</p>
                        </div>
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <HiTrendingUp className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-lg font-medium text-white">Growing Market</h4>
                            </div>
                            <p className="text-gray-300">Tap into a rapidly expanding market with increasing demand for digital communication solutions.</p>
                        </div>
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <HiGlobe className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-lg font-medium text-white">Global Reach</h4>
                            </div>
                            <p className="text-gray-300">Build your business worldwide with our international platform and support system.</p>
                        </div>
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <HiUserGroup className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-lg font-medium text-white">Strong Community</h4>
                            </div>
                            <p className="text-gray-300">Join a supportive network of entrepreneurs and receive ongoing training and mentorship.</p>
                        </div>
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <HiClock className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-lg font-medium text-white">Flexible Schedule</h4>
                            </div>
                            <p className="text-gray-300">Work on your own terms with a business that fits your lifestyle and goals.</p>
                        </div>
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <HiShieldCheck className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-lg font-medium text-white">Proven System</h4>
                            </div>
                            <p className="text-gray-300">Follow a time-tested business model with proven success strategies and support.</p>
                        </div>
                    </div>
                </div>

                {/* Success Stories */}
                <div className="mb-12">
                    <h3 className="text-xl font-semibold text-white mb-6">Success Stories</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                                    JD
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">John Doe</h4>
                                    <p className="text-yellow-400">Director</p>
                                </div>
                            </div>
                            <p className="text-gray-300">
                                "I started as an Associate and within 18 months, I built a team of over 100 people. The training and support system is unmatched."
                            </p>
                        </div>
                        <div className="bg-gray-700/50 p-6 rounded-lg">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold mr-4">
                                    JS
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Jane Smith</h4>
                                    <p className="text-yellow-400">Manager</p>
                                </div>
                            </div>
                            <p className="text-gray-300">
                                "The flexibility to work from anywhere and the potential for unlimited income made this opportunity perfect for me."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">Ready to Start Your Journey?</h3>
                    <p className="text-gray-300 mb-6">Join thousands of successful entrepreneurs who have already discovered this opportunity.</p>
                    <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Opportunity; 