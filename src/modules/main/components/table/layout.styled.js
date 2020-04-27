import styled from "styled-components";

export const TableElementContainer = styled.div`
  height: 35px;
  width: 100%;
  background-color: transparent;
  margin-left: 15px;
  display: flex;
  flex-direction: row;

  .row {
    text-align: left;
    margin-left: 5px;
    margin-right: 0px;
    padding-left: 0px;
    width: 1125px;
    height: 35px;
    margin-left: 15px;
    margin-right: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .row:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }

  .playStopIconBorder {
    border-bottom: solid 1px #252525;
    height: 35px;
    width: 30px;
    padding-left: 2px;
    display: flex;
    align-items: center;
    visibility: visible;
  }

  .playStopIcon {
    font-size: 0.6em;
    height: 20px;
    width: 20px;
    font-weight: 700;
    text-align: right;
    margin-left: 3px;
    text-align: center;
    border: 1px solid white;
    border-radius: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .playstopiconborder: hover {
    cursor: pointer;
  }

  .favo {
    font-size: 0.8em;
    height: 35px;
    width: 28px;
    font-weight: 700;
    text-align: right;
    padding-left: 5px;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
  }

  .titl {
    font-size: 0.75em;
    height: 35px;
    padding-left: 9px;
    width: 361px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
  }

  .auth {
    font-size: 0.75em;
    height: 35px;
    width: 243px;
    padding-left: 4px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
  }

  .auth:hover {
    cursor: pointer;
  }

  .album {
    font-size: 0.75em;
    height: 35px;
    margin-left: 0px;
    width: 251px;
    padding-left: 1px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
  }

  .date {
    font-size: 0.75em;
    height: 35px;
    padding-left: 7px;
    width: 91px;
    font-weight: 400;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
  }

  .more {
    width: 30px;
    height: 35px;
    font-size: 0.75em;
    border-bottom: solid 1px #252525;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
  }

  .more: hover {
    cursor: pointer;
  }

  .moreOpt {
    width: 200px;
    position: absolute;
    transform: translate(-115px, 35px);
    background-color: #2d2d2d;
    z-index: 110;
    -webkit-box-shadow: -3px 13px 54px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -3px 13px 54px -6px rgba(0, 0, 0, 0.75);
    box-shadow: -3px 13px 54px -6px rgba(0, 0, 0, 0.75);
  }

  .moreOptModal {
    height: 100%;
    width: 100%;
    position: fixed;
    left: 240;
    top: 0;
    background-color: transparent;
    z-index: 100;
  }

  .moreOptModal:hover {
    cursor: default;
  }

  .moreOptItem {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 30px;
    margin: 0px;
    background-color: #2d2d2d;
    border-bottom: 1px solid #2d2d2d;
    z-index: 150;
  }

  .moreOptItem:hover {
    background-color: #393939;
    cursor: pointer;
  }

  .playlistListItemsConstainer {
    background-color: #2d2d2d;
    cursor: pointer;
    position: absolute;
    transform: translate(-160px, -21px);
    width: 100px;
    z-index: 110;
    -webkit-box-shadow: -22px 13px 54px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -22px 13px 54px -9px rgba(0, 0, 0, 0.75);
    box-shadow: -22px 13px 54px -9px rgba(0, 0, 0, 0.75);
    display: none;
  }

  .playlistListItem {
    padding-left: 30px;
    padding-top: 5px;
    width: 100px;
    padding-bottom: 5px;
    background-color: #2d2d2d;
    border-bottom: 1px solid #2d2d2d;
  }

  .playlistListItem:hover {
    background-color: #393939;
    cursor: pointer;
  }

  .moreOptItem:hover .playlistListItemsContainer {
    display: block;
  }

  .time {
    font-size: 0.75em;
    height: 35px;
    margin-left: 0px;
    padding-left: 26px;
    width: 58px;
    font-weight: 400;
    align-items: center;
    display: flex;
    border-bottom: solid 1px #252525;
  }
`;
