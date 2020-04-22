import styled from "styled-components";

export const AlbumsContainer = styled.div`
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
