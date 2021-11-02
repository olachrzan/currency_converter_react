import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">
      Dzisiaj jest {currentDate.toLocaleString(
        "pl-PL", { weekday: "long", day: "numeric", }
      )}
      &nbsp;
      {currentDate.toLocaleString("pl-PL", { month: "long", })}
      &nbsp;
      {currentDate.toLocaleString(
        "pl-PL", { hour: "numeric", minute: "numeric", second: "numeric" }
      )}
    </p>

  );
};

export default Clock;