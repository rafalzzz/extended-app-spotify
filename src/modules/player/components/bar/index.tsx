import React, { memo, useState, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { playedRX, durationRX } from "../../../../store/player/selectors";

import { seekTo } from "../../../../store/player/actions";

import { BarLayout } from "./layout";

export const Bar = memo(() => {
  const [showRemaining, setShowRemaining] = useState<boolean>(false);

  const played: number = useSelector(playedRX);
  const duration: number = useSelector(durationRX);

  const dispatch = useDispatch();

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let second: number = parseFloat(e.target.value);
    dispatch(seekTo(second));
  };

  const handleSetRemaining = useCallback(
    (event: React.MouseEvent) => {
      setShowRemaining(!showRemaining);
    },
    [showRemaining]
  );

  return (
    <BarLayout
      played={played}
      duration={duration}
      handleSeekChange={handleSeekChange}
      handleSetRemaining={handleSetRemaining}
      showRemaining={showRemaining}
    />
  );
});
