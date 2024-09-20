import {
  Alignment,
  CommonAttributesInterface,
  Style,
} from "@tempi/core-renderer";
import { ReactElement } from "react";

export interface CountdownInterface extends CommonAttributesInterface {
  countdownType: "due";
  due: string;
  showDays: boolean;
  showHours: boolean;
  showMinutes: boolean;
  showSeconds: boolean;
  showLabel: boolean;
  labelDays?: string;
  labelHours?: string;
  labelMinutes?: string;
  labelSeconds?: string;
  countdownStyle?: {
    elementGap?: number; // gap between time element
    labelGap?: number; // gap between digit number and label
    align?: Alignment;
    layout?: "horizontal" | "vertical";
    labelPosition?: "baseline" | "center";
    digitStyle?: Style;
    labelStyle?: Style;
    timeUnitStyle?: Style;
  };
  splitTimeUnit?: ReactElement;
}
