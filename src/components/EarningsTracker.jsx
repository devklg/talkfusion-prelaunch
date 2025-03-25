import React, { useEffect, useState } from "react";
import axios from "axios";

const EarningsTracker = () => {
    const [earnings, setEarnings] = useState(0);

    useEffect(() => {
        axios.get("/api/earnings/1").then(res => setEarnings(res.data.earnings));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Earnings Tracker</h1>
            <p>Total: ${earnings}</p>
        </div>
    );
};

export default EarningsTracker; 