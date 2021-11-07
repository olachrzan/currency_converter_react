import { useEffect, useState } from "react";
import { StyledClock } from "./styled";

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
    <StyledClock>
      Dzisiaj jest {currentDate.toLocaleString(
        "pl-PL", { weekday: "long", day: "numeric", }
      )}
      &nbsp;
      {currentDate.toLocaleString("pl-PL", { month: "long", })}
      &nbsp;
      {currentDate.toLocaleString(
        "pl-PL", { hour: "numeric", minute: "numeric", second: "numeric" }
      )}
    </StyledClock>

  );
};

export default Clock;