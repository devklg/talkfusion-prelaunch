import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("/api/user/dashboard").then(res => setUser(res.data));
    }, []);

    return user ? (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Total Earnings: ${user.earnings}</p>
        </div>
    ) : <p>Loading...</p>;
};

export default Dashboard; 