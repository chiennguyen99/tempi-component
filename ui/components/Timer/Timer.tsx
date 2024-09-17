import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { BaseProps, Row } from "../ds";

interface Time {
  hours: number;
  minutes: number;
  seconds: number;
}

export const Timer: React.FC = () => {
  const [time, setTime] = useState<Time>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime({ hours: 2, minutes: 30, seconds: 60 });
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
  value: number;
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
