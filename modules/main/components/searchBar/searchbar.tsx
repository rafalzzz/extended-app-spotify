import React, { useCallback, useRef } from "react";

import { SearchBarContainer } from "./searchbar.styled";

type SearchBarProps = {
  handlePrevButton: (e: React.MouseEvent) => void;
  handleNextButton: (e: React.MouseEvent) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type RefProps = {
  current: any;
};

export const SearchBar = ({
  handlePrevButton,
  handleNextButton,
  handleOnChange,
  handleOnSubmit,
}: SearchBarProps) => {
  const ref: RefProps = useRef(null);

  const handleFocus = useCallback((event) => {
    ref.current.focus();
  }, []);

  return (
    <SearchBarContainer>
      <button className="btn btnL">
        <i className="icon-left-open" onClick={handlePrevButton} />
      </button>
      <button className="btn btnR" onClick={handleNextButton}>
        <i className="icon-right-open" />
      </button>
      <div className="search-container" onClick={handleFocus}>
        <form onSubmit={handleOnSubmit}>
          <button type="submit" className="search-btn">
            <i className="icon-search"></i>
          </button>
          <input
            ref={ref}
            type="text"
            placeholder="Search..."
            name="search"
            onChange={handleOnChange}
          />
        </form>
      </div>
    </SearchBarContainer>
  );
};
