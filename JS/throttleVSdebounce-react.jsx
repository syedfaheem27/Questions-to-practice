import { useEffect, useState } from "react";

//Debounce
function AppDebounce() {
    const [debounceTimer, setDebounceTimer] = useState(null);

    const handleChange = (e) => {
        const timerId = setTimeout(() => {
            console.log("hello");
            console.log(e.target.value);
        }, 1000);

        setDebounceTimer(timerId);
    };

    useEffect(() => {
        if (debounceTimer === null) return;

        return () => clearTimeout(debounceTimer);
    }, [debounceTimer]);

    return (
        <div >
            <h1>Debounce</h1>
            <input type="text" onChange={handleChange} />
        </div>
    );
}

//Throttle
function AppThrottle() {
    const [isRunning, setIsRunning] = useState(false);
    const [timerId, setTimerId] = useState(null);

    const handleChange = (e) => {
        if (isRunning) return;

        setIsRunning(true);
        console.log("throttle");

        const id = setTimeout(() => {
            setIsRunning(false);
        }, 3000);

        setTimerId(id);
    };
    useEffect(() => {
        if (!timerId) return;

        return () => clearTimeout(timerId);
    }, [timerId]);

    return (
        <div>
            <h1>Throttle</h1>
            <input type="text" onChange={handleChange} />
        </div>
    );
}

