import styled from "styled-components";

export const PlaylistItemContainer = styled.div`
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
  margin-bottom: 50px;

  .playlistItemContainer {
    width: 160px;
    height: 200px;
  }

  .playlistItemElements {
    width: 160px;
    height: 160px;
  }

  .playlistItemImg {
    width: 160px;
    height: 160px;
  }

  .playlistItemImg img {
    width: 160px;
  }

  .playlistItemName {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 160px;
    background-color: transparent;
    height: 40px;
    font-size: 1em;
  }

  .playlistItemPlay {
    padding-top: 0px;
    font-size: 1.5em;
    height: 40px;
    width: 36px;
    border-radius: 22.5px;
    padding-left: 4px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(57px, -103px);
  }

  .playlistItemPlay:hover {
    cursor: pointer;
  }

  .playlistItemDelete {
    padding-top: 0px;
    color: white;
    font-size: 1.2em;
    height: 20px;
    width: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform: translate(136px, -203px);
  }

  .playlistItemDelete:hover {
    cursor: pointer;
  }
`;
