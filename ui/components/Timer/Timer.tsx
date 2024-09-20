import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { BaseProps, Row } from "../ds";
import { PROP_KEY, usePropSeparateDevice } from "@tempi/core-editor";

interface Time {
  hours: string;
  minutes: string;
  seconds: string;
}

export const Timer: React.FC = () => {
  const [endTime] = usePropSeparateDevice(
    PROP_KEY.joinKey(PROP_KEY.TimeVisibility, PROP_KEY.EndTime)
  );

  const [time, setTime] = useState<Time>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime({ hours: "02", minutes: "30", seconds: "60" });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <Row style={{ color: "#fff", alignItems: "center" }}>
      <Counter value={time.hours} style={{ marginRight: 10 }} />
      <Colon>:</Colon>
      <Counter value={time.minutes} style={{ marginInline: 10 }} />
      <Colon>:</Colon>{" "}
      <Counter value={time.seconds} style={{ marginLeft: 10 }} />
    </Row>
  );
};

interface CounterProps extends Omit<BaseProps, "children"> {
  value: string;
}

const Colon = styled.p`
  font-size: 32px;
  font-weight: 400;
`;

// Styled component for the counter container
const CounterContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;
  // margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #000000;
`;

const Counter: React.FC<CounterProps> = ({ value, style }) => {
  return <CounterContainer style={style}>{value}</CounterContainer>;
};
