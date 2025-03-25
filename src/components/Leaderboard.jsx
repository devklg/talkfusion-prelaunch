import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/api/leaderboard").then(res => setUsers(res.data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-2">Leaderboard</h1>
            <ul>
                {users.map((user, idx) => (
                    <li key={idx}>{user.name} - {user.referrals}</li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard; 