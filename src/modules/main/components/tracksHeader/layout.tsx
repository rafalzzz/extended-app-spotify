import React from "react";

import { TracksHeaderContainer } from "./layout.styled";

type TracksHeaderLayoutProps = {
  currentTerm: string;
};

export const TracksHeaderLayout = ({
  currentTerm,
}: TracksHeaderLayoutProps) => {
  return (
    <TracksHeaderContainer>
      <div>
        {currentTerm && (
          <div className="title">
            Tracks for <span>{currentTerm}</span>
          </div>
        )}
      </div>
    </TracksHeaderContainer>
  );
};
