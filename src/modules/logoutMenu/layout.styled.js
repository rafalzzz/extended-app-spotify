import styled from "styled-components";

export const LogoutContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 150px;
  height: 40px;
  color: white;
  letter-spacing: 2px;
  padding-left: 19px;
  text-align: left;
  z-index: 3;

  .dots {
    width: 40px;
    height: 40px;
    color: #868686;
    margin-top: 0px;
    border: none;
    margin-left: 0px;
    font-size: 1.4em;
  }

  .dots:hover {
    color: white;
    outline: none;
  }

  .dots:active {
    border: none;
    outline: none;
  }

  .dots:focus {
    border: none;
    outline: none;
  }

  .logoutMenu {
    position: absolute;
    top: 50px;
    left: 0px;
    width: 158px;
    font-size: 0.5em;
    border: solid 1px #868686;
    background-color: #121212;
    text-align: center;
    color: white;
    padding-top: 30px;
  }

  button {
    width: 140px;
    height: 50px;
    margin-bottom: 30px;
    background-color: transparent;
    border: solid 1px white;
    border-radius: 5px;
    color: white;
    font-size: 0.8em;
    margin-top: 30px;
  }
`;
