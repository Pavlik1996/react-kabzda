import React, { useEffect, useState } from "react";
import { AnalogClockViev } from "./AnalogClockViev";
import { DigitClockViev } from "./DigitClockViev";

type PropsType = {
  mode: "digital" | "analog";
};

export const Clock: React.FC<PropsType> = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // перед смертью вызывает эту функцию, когда выходим с компоненты!
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  let viev;

  switch (props.mode) {
    case "analog":
      viev = <AnalogClockViev date={date} />;
      break;
    case "digital":
    default:
      viev = <DigitClockViev date={date} />;
  }

  return <div>{viev}</div>;
};

export type ClocklVievPropsType = {
  date: Date;
};
