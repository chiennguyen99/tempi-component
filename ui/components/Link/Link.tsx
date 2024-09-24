import React from "react";
import { LinkInterfaceV2 } from "@tempi/core-renderer";

export interface LinkProps {
  className?: string;
  children?: React.ReactElement;
  link?: LinkInterfaceV2;
  trackingEventName?: string;
}

export const Link = ({
  children,
  className,
  trackingEventName,
  ...rest
}: LinkProps) => {
  const trackEventClick = () => {
    if (trackingEventName) {
      (window as any)?.track?.("customEvent", trackingEventName);
    }
  };

  if (!rest?.link) return null;

  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      style={{ textDecoration: "none", color: "unset", cursor: "pointer" }}
      href={rest["link"].href as string}
      onClick={trackEventClick}
      target={rest.link.openNewTab ? "_blank" : "_top"}
      className={className}
      rel={rest.link.nofollow ? "nofollow" : "noopener noreferrer"}
    >
      {children}
    </a>
  );
};
