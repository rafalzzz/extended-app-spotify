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

  .info {
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 100px;
  font-size: 1.3em;
  }

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
text-align: center;
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

  .error {
  margin-left: 49.4%;
  transform: translate(-50%);
  text-align: center;
  }
`;
