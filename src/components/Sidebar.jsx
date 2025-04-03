import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    HiHome,
    HiShoppingBag,
    HiUserGroup,
    HiChartBar,
    HiCurrencyDollar,
    HiUser,
    HiLogout,
    HiGlobe,
    HiShoppingCart,
    HiLightBulb,
    HiDocumentText
} from "react-icons/hi";

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: "/dashboard", icon: HiHome, label: "Dashboard" },
        { path: "/products", icon: HiShoppingBag, label: "Products" },
        { path: "/team", icon: HiUserGroup, label: "My Team" },
        { path: "/analytics", icon: HiChartBar, label: "Analytics" },
        { path: "/earnings", icon: HiCurrencyDollar, label: "Earnings" },
        { path: "/profile", icon: HiUser, label: "My Profile" },
        { path: "/opportunity", icon: HiLightBulb, label: "Opportunity" },
        { path: "/compensation-plan", icon: HiDocumentText, label: "Compensation Plan" }
    ];

    const socialLinks = [
        { icon: "facebook", href: "#" },
        { icon: "twitter", href: "#" },
        { icon: "instagram", href: "#" },
        { icon: "linkedin", href: "#" },
        { icon: "youtube", href: "#" }
    ];

    const policyLinks = [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" }
    ];

    return (
        <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-gray-700">
                <h1 className="text-2xl font-bold text-white">Talk Fusion</h1>
                <p className="text-sm text-gray-400">Your Gateway to Success</p>
            </div>

            {/* Main Menu */}
            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-400 hover:bg-gray-700 hover:text-white"
                                        }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Language Selector */}
            <div className="px-4 py-4 border-t border-gray-700">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-700 cursor-pointer hover:bg-gray-600">
                    <HiGlobe className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">English</span>
                </div>
            </div>

            {/* Social Links */}
            <div className="px-4 py-4 border-t border-gray-700">
                <div className="flex justify-center gap-4">
                    {socialLinks.map((social) => (
                        <a
                            key={social.icon}
                            href={social.href}
                            className="text-gray-500 hover:text-white transition-colors"
                        >
                            <span className="sr-only">{social.icon}</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                {/* Add social media icons here */}
                            </svg>
                        </a>
                    ))}
                </div>
            </div>

            {/* Policy Links */}
            <div className="px-4 py-4 border-t border-gray-700">
                <ul className="space-y-2">
                    {policyLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="block text-sm text-gray-500 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Logout Button */}
            <div className="p-4 border-t border-gray-700">
                <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
                    <HiLogout className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>

            {/* Copyright */}
            <div className="p-4 border-t border-gray-700 text-center">
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Kevin L. Gardner. All rights reserved.
                </p>
            </div>
        </aside>
    );
};

export default Sidebar; 