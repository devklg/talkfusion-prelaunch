import React from 'react';
import { HiCurrencyDollar, HiUserGroup, HiChartBar, HiSparkles, HiArrowTrendingUp, HiStar, HiTrophy } from 'react-icons/hi';
import { motion } from 'framer-motion';

const CompensationPlan = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <motion.div
                className="bg-gray-800 rounded-lg shadow-xl p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h2
                    className="text-4xl font-bold text-yellow-400 mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Compensation Plan
                </motion.h2>

                {/* Overview Section */}
                <motion.div
                    className="mb-12"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">Plan Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            className="bg-gray-700/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-4">
                                <HiCurrencyDollar className="text-yellow-400 text-3xl mr-3" />
                                <h4 className="text-xl font-medium text-white">Direct Sales</h4>
                            </div>
                            <p className="text-gray-300">Earn up to 50% commission on direct product sales</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-700/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-4">
                                <HiUserGroup className="text-yellow-400 text-3xl mr-3" />
                                <h4 className="text-xl font-medium text-white">Team Building</h4>
                            </div>
                            <p className="text-gray-300">Build and earn from your team's success</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-700/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-4">
                                <HiChartBar className="text-yellow-400 text-3xl mr-3" />
                                <h4 className="text-xl font-medium text-white">Performance Bonuses</h4>
                            </div>
                            <p className="text-gray-300">Achieve targets and earn additional bonuses</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-700/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-4">
                                <HiSparkles className="text-yellow-400 text-3xl mr-3" />
                                <h4 className="text-xl font-medium text-white">Leadership Rewards</h4>
                            </div>
                            <p className="text-gray-300">Advance and earn higher commission rates</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Commission Structure */}
                <motion.div
                    className="mb-12"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">Commission Structure</h3>
                    <div className="overflow-x-auto rounded-lg border border-gray-700">
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead className="bg-gray-700/50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Direct Sales</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Team Commission</th>
                                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">Requirements</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                <motion.tr
                                    className="hover:bg-gray-700/30 transition-colors duration-200"
                                    variants={fadeIn}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Associate</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">30%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">5%</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">Personal sales of $500</td>
                                </motion.tr>
                                <motion.tr
                                    className="hover:bg-gray-700/30 transition-colors duration-200"
                                    variants={fadeIn}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Team Leader</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">35%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">8%</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">Team sales of $2,500</td>
                                </motion.tr>
                                <motion.tr
                                    className="hover:bg-gray-700/30 transition-colors duration-200"
                                    variants={fadeIn}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Manager</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">40%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">12%</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">Team sales of $5,000</td>
                                </motion.tr>
                                <motion.tr
                                    className="hover:bg-gray-700/30 transition-colors duration-200"
                                    variants={fadeIn}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">Director</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">45%</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400">15%</td>
                                    <td className="px-6 py-4 text-sm text-gray-300">Team sales of $10,000</td>
                                </motion.tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Bonuses Section */}
                <motion.div
                    className="mb-12"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                >
                    <h3 className="text-2xl font-semibold text-white mb-6 text-center">Performance Bonuses</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="bg-gray-700/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-4">
                                <HiArrowTrendingUp className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-xl font-medium text-white">Fast Start Bonus</h4>
                            </div>
                            <p className="text-gray-300">Earn an additional 10% bonus on your first $1,000 in sales within your first 30 days.</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-700/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-4">
                                <HiStar className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-xl font-medium text-white">Team Growth Bonus</h4>
                            </div>
                            <p className="text-gray-300">Get a 5% bonus on new team member sales for their first 90 days.</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-700/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-4">
                                <HiTrophy className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-xl font-medium text-white">Leadership Bonus</h4>
                            </div>
                            <p className="text-gray-300">Earn 2% on total team volume when you reach Director rank.</p>
                        </motion.div>
                        <motion.div
                            className="bg-gray-700/50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                            variants={fadeIn}
                        >
                            <div className="flex items-center mb-4">
                                <HiCurrencyDollar className="text-yellow-400 text-2xl mr-3" />
                                <h4 className="text-xl font-medium text-white">Residual Income</h4>
                            </div>
                            <p className="text-gray-300">Build a sustainable income with ongoing commissions from your team's sales.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Disclaimer */}
                <motion.div
                    className="mt-8 p-6 bg-gray-700/30 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-sm text-gray-400 text-center">
                        * Earnings shown are examples and not guarantees. Actual earnings depend on individual effort, market conditions, and other factors.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CompensationPlan; 