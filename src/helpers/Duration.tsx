import React from "react";

export const Duration: React.FC<{ className?: string; seconds: number }> = ({
  className,
  seconds,
}) => {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      {format(seconds)}
    </time>
  );
};

function format(seconds: number): string {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
}

function pad(number: number): string {
  return ("0" + number).slice(-2);
}
