import React, { useState, useEffect } from 'react';
import { HiSparkles, HiCurrencyDollar, HiUserGroup, HiStar, HiChartBar } from 'react-icons/hi';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Set launch date to April 10, 2025
        const launchDate = new Date('2025-04-10T00:00:00');

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = launchDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        // Initial calculation
        calculateTimeLeft();

        // Update every second
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center">
            {/* Main Heading */}
            <div className="flex items-center gap-2 mb-2">
                <HiSparkles className="text-blue-500 text-2xl" />
                <h2 className="text-2xl font-bold text-white">Be a Founder!</h2>
            </div>

            {/* Subheading */}
            <p className="text-gray-300 text-lg mb-2">Get Paid in 1 Minute with Talk Fusion</p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-blue-400">
                    <HiCurrencyDollar className="text-xl" />
                    <span className="text-sm">Instant Pay</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                    <HiUserGroup className="text-xl" />
                    <span className="text-sm">5 Income Streams</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                    <HiStar className="text-xl" />
                    <span className="text-sm">Founder Benefits</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                    <HiChartBar className="text-xl" />
                    <span className="text-sm">Explosive Growth</span>
                </div>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center space-x-4 text-white mb-4">
                <div className="text-center bg-gray-700/50 px-4 py-2 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400">{timeLeft.days}</div>
                    <div className="text-xs text-gray-400">Days</div>
                </div>
                <div className="text-center bg-gray-700/50 px-4 py-2 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400">{timeLeft.hours}</div>
                    <div className="text-xs text-gray-400">Hours</div>
                </div>
                <div className="text-center bg-gray-700/50 px-4 py-2 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400">{timeLeft.minutes}</div>
                    <div className="text-xs text-gray-400">Minutes</div>
                </div>
                <div className="text-center bg-gray-700/50 px-4 py-2 rounded-lg">
                    <div className="text-3xl font-bold text-blue-400">{timeLeft.seconds}</div>
                    <div className="text-xs text-gray-400">Seconds</div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
                <p className="text-gray-300 text-sm mb-2">Limited Founder Positions Available</p>
                <p className="text-blue-400 text-sm font-semibold">Lock In Your Spot Before April 10, 2025</p>
            </div>

            {/* Income Disclaimer */}
            <p className="text-gray-500 text-xs mt-4 italic">
                * Income Disclaimer: Earnings are not guaranteed and depend on individual effort.
            </p>
        </div>
    );
};

export default Countdown; 