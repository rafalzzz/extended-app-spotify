import styled from "styled-components";

export const AlbumsSectionItemContainer = styled.div`
  background-color: transparent;
  width: 25%;

  .albumsSectionItem {
    background-color: transparent;
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  .albumsSectionItem:hover {
    background-color: #86868610;
    cursor: pointer;
  }

  .albumsSectionItemImgContainer {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .albumsSectionItemButton {
    padding-top: 0px;
    font-size: 0.8em;
    height: 26px;
    width: 26px;
    border-radius: 13px;
    border: solid 1px white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .albumsSectionItemButton:hover {
    padding-top: 0px;
    font-size: 0.9em;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    border: solid 1px white;
  }

  .albumsSectionItemTitle {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 0.7em;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
    overflow: hidden;
    width: 75%;
  }

  .albumTitle {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
  }

  .albumArtist {
    font-weight: 300;
    color: #868686;
    white-space: nowrap;
    overflow: hidden;
  }
`;
