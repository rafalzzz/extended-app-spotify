import styled from "styled-components";

export const ArtistsSectionItemContainer = styled.div`
  background-color: transparent;
  width: 150px;
  font-size: 1.7em;

  .artistsSectionItemImgContainer {
    background-color: transparent;
    border-radius: 73px;
    border: 2px solid #252525;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .artistsSectionItemImgContainer:hover {
    cursor: pointer;
    background-color: #86868610;
  }

  .artistsSectionItemTitle {
    margin-top: 5px;
    white-space: nowrap;
  }

  .artistsSectionItemTitle:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
