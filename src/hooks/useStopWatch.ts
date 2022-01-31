import { useState } from "react";

export function useStopWatch() {
    const [second, setSecond] = useState<string>("0");
    const [minute, setMinute] = useState<string>("0");
    const [isStopped, setIsStopped] = useState<boolean>(true);

    const start = () => {
        setInterval(() => {
            if (!isStopped) {
                let sec = parseInt(second),
                min = parseInt(minute);

                sec = sec + 1;

                if (sec === 60) {
                    setMinute((min + 1).toString());
                    setSecond("00");
                }

                if (sec < 10 || sec === 0) {
                    setSecond("0" + sec)
                }
                if (min < 10 || min === 0) {
                    setMinute("0" + min)
                }
            }
        }, 1000);
    };

    const getTime = () => {
        return minute + ":" + second
    }

    const stopWatch = () => {
        setIsStopped(true)
    }

    return {
        start,
        getTime,
        stopWatch
    };
}
