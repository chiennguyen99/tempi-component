import React from "react";
import styled from "@emotion/styled";
import {
  Alignment,
  calculateTimeDelta,
  getStyle,
  Style,
} from "@tempi/core-renderer";
import { useEffect, useState } from "react";
import { CountdownInterface } from "./types";

export const addPaddingNumber = (number) => {
  return isNaN(number) ? "" : number?.toString().padStart(2, "0");
};

const getISODateBackward = (dateString: string) => {
  if (/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/.test(dateString)) {
    const day = parseInt(dateString.substring(0, 2));
    const month = parseInt(dateString.substring(3, 5));
    const year = parseInt(dateString.substring(6, 10));
    const hour = parseInt(dateString.substring(11, 13));
    const minute = parseInt(dateString.substring(14, 16));
    return new Date(year, month - 1, day, hour, minute).toISOString();
  }
  return dateString;
};

const MAPPING_ALIGNMENT_FLEX = {
  [Alignment.center]: "center",
  [Alignment.left]: "flex-start",
  [Alignment.right]: "flex-end",
  [Alignment.justify]: "space-between",
};

export const Countdown: React.FC<CountdownInterface> = ({
  countdownType: _countdownType = "due",
  due,
  showDays = true,
  showHours = true,
  showMinutes = true,
  showSeconds = true,
  showLabel = false,
  labelDays,
  labelHours,
  labelMinutes,
  labelSeconds,
  countdownStyle,
  commonStyle,
  splitTimeUnit,
}) => {
  const {
    elementGap,
    labelGap,
    digitStyle,
    labelStyle,
    timeUnitStyle,
    layout,
    labelPosition,
    align,
  } = countdownStyle || {};
  const finalDue = getISODateBackward(due);
  const dueDate = new Date(finalDue);

  const [duration, setDuration] = useState(
    calculateTimeDelta(new Date(), dueDate)
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDuration(calculateTimeDelta(new Date(), dueDate));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [finalDue]);

  if (dueDate.toString() === "Invalid Date") return null;

  return (
    <Wrapper align={align}>
      <TimeWrapper commonStyle={{ ...commonStyle, gap: elementGap }}>
        {showDays && (
          <>
            <TimeUnit
              layout={layout}
              labelPosition={labelPosition}
              labelGap={labelGap}
              timeUnitStyle={timeUnitStyle}
            >
              <Digit digitStyle={digitStyle}>
                {addPaddingNumber(duration.days)}
              </Digit>
              {showLabel && <Label labelStyle={labelStyle}>{labelDays}</Label>}
            </TimeUnit>
            {!!splitTimeUnit && splitTimeUnit}
          </>
        )}
        {showHours && (
          <>
            <TimeUnit
              layout={layout}
              labelPosition={labelPosition}
              labelGap={labelGap}
              timeUnitStyle={timeUnitStyle}
            >
              <Digit digitStyle={digitStyle}>
                {addPaddingNumber(duration.hours)}
              </Digit>
              {showLabel && <Label labelStyle={labelStyle}>{labelHours}</Label>}
            </TimeUnit>
            {!!splitTimeUnit && splitTimeUnit}
          </>
        )}
        {showMinutes && (
          <>
            <TimeUnit
              layout={layout}
              labelPosition={labelPosition}
              labelGap={labelGap}
              timeUnitStyle={timeUnitStyle}
            >
              <Digit digitStyle={digitStyle}>
                {addPaddingNumber(duration.minutes)}
              </Digit>
              {showLabel && (
                <Label labelStyle={labelStyle}>{labelMinutes}</Label>
              )}
            </TimeUnit>
            {!!splitTimeUnit && splitTimeUnit}
          </>
        )}
        {showSeconds && (
          <TimeUnit
            layout={layout}
            labelPosition={labelPosition}
            labelGap={labelGap}
            timeUnitStyle={timeUnitStyle}
          >
            <Digit digitStyle={digitStyle}>
              {addPaddingNumber(duration.seconds)}
            </Digit>
            {showLabel && <Label labelStyle={labelStyle}>{labelSeconds}</Label>}
          </TimeUnit>
        )}
      </TimeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ align?: Alignment }>(
  ({ align }) => `
  display: flex;
  ${!!align && `${`justify-content: ${MAPPING_ALIGNMENT_FLEX[align]};`}`}
`
);

const TimeWrapper = styled.div<{ commonStyle?: Style }>(
  ({ commonStyle }) => `
  ${getStyle(commonStyle)};
  display: flex;
`
);

const Digit = styled.div<{ digitStyle?: Style }>(
  ({ digitStyle }) => `
  ${getStyle(digitStyle)}
  @media only screen and (max-width: 480px){
    font-size: min(${digitStyle?.fontSize}px, 30px);
  }
`
);

const Label = styled.div<{ labelStyle?: Style }>(
  ({ labelStyle }) => `
  ${getStyle(labelStyle)}
  @media only screen and (max-width: 480px){
    font-size: min(${labelStyle?.fontSize}px, 30px);
  }
`
);

const TimeUnit = styled.div<{
  layout?: "horizontal" | "vertical";
  labelPosition?: "baseline" | "center";
  labelGap?: number;
  timeUnitStyle?: Style;
}>(
  ({ layout, labelPosition, labelGap, timeUnitStyle }) => `
  ${getStyle(timeUnitStyle)}
  display: flex;
  ${labelGap ? `gap: ${labelGap}px;` : ""}
  ${
    layout === "horizontal"
      ? `align-items: ${labelPosition};`
      : `flex-direction: column;`
  };
`
);
