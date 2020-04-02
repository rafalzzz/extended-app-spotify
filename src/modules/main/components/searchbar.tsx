import React, { useCallback, useRef } from "react";

import { SearchBarContainer } from "./searchbar.styled";

type SearchBarProps = {
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type RefProps = {
  current: any;
};

export const SearchBar = ({
  handleOnChange,
  handleOnSubmit
}: SearchBarProps) => {
  const ref: RefProps = useRef(null);

  const handleFocus = useCallback(event => {
    ref.current.focus();
  }, []);

  return (
    <SearchBarContainer onClick={handleFocus}>
      <button className="btn btnL">
        <i className="icon-left-open" />
      </button>
      <button className="btn btnR">
        <i className="icon-right-open" />
      </button>
      <div className="search-container">
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
