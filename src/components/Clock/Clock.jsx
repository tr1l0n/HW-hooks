import { useEffect, useRef, useState } from "react"

export function Clock() {
    const [time, setTime] = useState(() => new Date().toLocaleTimeString());
    const intervalId = useRef(null);
    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        })
        return (() => {
            stop();
        })
    }, [intervalId]);
    const stop = () => {
        clearInterval(intervalId.current);
    }
    return (
        <section>
            <h1>{time}</h1>
            <button onClick={stop}>Stop timer</button>
        </section>
    )
}