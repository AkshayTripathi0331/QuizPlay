import { useState, useEffect, useReducer } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainningTime, setRemainningTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);

    //clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainningTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    //clean up function
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className={mode}
      id="question-time"
      max={timeout}
      value={remainningTime}
    />
  );
}
