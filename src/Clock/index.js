import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const currentDate = useCurrentDate();

  return (
    <StyledClock>
      Dzisiaj jest
      {" "}
      {currentDate.toLocaleString(
        "pl-PL", { weekday: "long", day: "numeric", }
      )}
      &nbsp;
      {currentDate.toLocaleString(
        "pl-PL", { month: "long", }
      )}
      &nbsp;
      {currentDate.toLocaleString(
        "pl-PL", { hour: "numeric", minute: "numeric", second: "numeric" }
      )}
    </StyledClock>
  );
};

export default Clock;