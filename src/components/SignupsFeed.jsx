import React, { useEffect, useState } from "react";
import axios from "axios";

const SignupsFeed = () => {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        axios.get("/api/signups").then(res => setFeed(res.data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Live Signups</h1>
            <ul>
                {feed.map((user, idx) => (
                    <li key={idx}>{user.name} just joined!</li>
                ))}
            </ul>
        </div>
    );
};

export default SignupsFeed; 