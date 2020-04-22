import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #181818;
  color: white;
  width: calc(100% - 200px);
  height: calc(100vh - 110px);
  overflow-y: auto;

  .sectionTitle {
    width: calc(100% - 25px);
    display: flex;
    flex-direction: row;
    /* align-items: space-around;
    align-items: center; */
  }

  h5 {
    margin-left: 20px;
    width: calc(100% - 45px);
    text-align: right;
    padding-bottom: 5px;
    border-bottom: 1px solid #252525;
    float: left;
    text-align: left;
  }

  h6 {
    center
    padding-right: 5px;
    height: 20px;
    border-bottom: 1px solid #252525;
    width: 100px;
    background-color: transparent;
    padding-bottom: 0px;
    margin-bottom: -3px;
    font-weight: 400;
  }

  h6: hover {
    text-decoration: underline;
cursor: pointer;
  }

  .artistsSection {
    background-color: transparent;
    width: calc(100% - 45px);
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-around;
  }

  .artistsSectionItem {
    background-color: transparent;
    width: 150px;
    height: 150px;
  }

  .artistsSectionItemImgContainer {
    background-color: transparent;
    width: 146px;
    height: 146px;
    border-radius: 73px;
    border: 2px solid #252525;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .artistsSectionItemImgContainer: hover {
    cursor: pointer;
    background-color: #86868610;
  }

  .artistsSectionItemButton {
    padding-top: 0px;
    font-size: 1.5em;
    height: 40px;
    width: 36px;
    border-radius: 22.5px;
    padding-left: 4px;
    border: solid 1px white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .artistsSectionItemTitle {
    margin-top: 5px;
    font-size: 0.75em;
  }

  // Albums section

  .albumsSection {
    background-color: transparent;
    width: calc(100% - 31px);
    height: auto;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .albumsItem {
    background-color: transparent;
    width: 25%;
  }

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
    background-color: black;
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

  .albumsSectionItemButton: hover {
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
  }

  .albumTitle {
    font-weight: 600;
  }

  .albumArtist {
    font-weight: 300;
    color: #868686;
  }

  // Tracks section

  .tracksSection {
    background-color: transparent;
    width: calc(100% - 31px);
    height: auto;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .tracksItem {
    background-color: transparent;
    width: 25%;
  }

  .tracksSectionItem {
    background-color: transparent;
    width: 95%;
    height: 60px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }

  .tracksSectionItem:hover {
    background-color: #86868610;
    cursor: pointer;
  }

  .tracksSectionItemImgContainer {
    background-color: black;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tracksSectionItemButton {
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

  .tracksSectionItemButton: hover {
    padding-top: 0px;
    font-size: 0.9em;
    height: 30px;
    width: 30px;
    border-radius: 15px;
    border: solid 1px white;
  }

  .tracksSectionItemTitle {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 0.7em;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
  }

  .trackTitle {
    font-weight: 600;
  }

  .trackArtist {
    font-weight: 300;
    color: #868686;
  }

  // Scroll bar

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    width: 20px;
    background-color: #535353;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track-piece {
    width: 8px;
    background-color: #transparent;
  }

  ::-webkit-scrollbar-button {
    background-color: transparent;
  }

  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;
