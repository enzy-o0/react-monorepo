import DateAndTime from "date-and-time";
import React from "react";

enum TimeFormatEnum {
  HHmmss = "HH:mm:ss",
  HHmm = "HH:mm",
  HHmmKOR = "HH시 mm분",
  HHmmssKOR = "HH시 mm분 ss초",
}

const useClockTime = (interval: number, timeFormat: TimeFormatEnum) => {
  const [currentTime, setCurrentTime] = React.useState(
    DateAndTime.format(new Date(), timeFormat)
  );

  React.useEffect(() => {
    const handle = window.setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), timeFormat));
    }, 1000);

    return () => {
      window.clearInterval(handle);
    };
  }, []);

  return currentTime;
};

export { useClockTime, TimeFormatEnum };
