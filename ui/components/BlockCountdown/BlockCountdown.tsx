import styled from "@emotion/styled";
import { Alignment, Style, useTimer } from "@tempi/core-renderer";
import React, { CSSProperties } from "react";
import { addPaddingNumber, Countdown } from "./Countdown";
// import { Countdown, Row } from "../../../../core";
// import { addPaddingNumber } from "../../../../utils";

export const BlockCountdown: React.FC<{
  endTime?: string;
  isMobile?: boolean;
}> = ({ endTime, isMobile }) => {
  const timer = useTimer(new Date(endTime || ""));
  if (!endTime) {
    return null;
  }

  const digitStyle = {
    width: isMobile ? "1.5rem" : "2.2rem",
    height: isMobile ? "1.5rem" : "2.2rem",
    fontSize: isMobile ? "12px" : "1rem",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    lineHeight: isMobile ? "1.5rem" : "2.2rem",
    color: "white",
    background: "linear-gradient(rgb(74, 74, 74),rgb(35, 34, 34))",
    borderRadius: 5,
  };
  return (
    <CountdownWrapper isMobile={isMobile}>
      {!!timer?.days ? (
        <>
          {isMobile ? "Còn" : "Kết thúc sau"}
          <RemainingDay style={digitStyle as CSSProperties}>
            {addPaddingNumber(timer.days)}
          </RemainingDay>{" "}
          Ngày
        </>
      ) : (
        <Countdown
          due={endTime}
          showDays={false}
          showLabel={false}
          showHours
          showMinutes
          showSeconds
          countdownType="due"
          splitTimeUnit={<>:</>}
          countdownStyle={{
            elementGap: 4,
            align: Alignment.center,
            digitStyle: digitStyle as Style,
          }}
        />
      )}
    </CountdownWrapper>
  );
};

const CountdownWrapper = styled.div<{ isMobile?: boolean }>`
  display: flex;
  align-items: center;
  color: white;
  column-gap: 0.5rem;
  font-size: ${({ isMobile }) => (isMobile ? "13px" : "18px")};
  font-weight: 500;
`;

const RemainingDay = styled.div`
  font-size: 1rem;
  color: white;
  text-align: center;
`;
