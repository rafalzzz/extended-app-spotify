import styled from "styled-components";

export const BarContainer = styled.div`
  display: flex;
  height: 20px;
  text-align: center;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -5px;

  .barElement {
    width: 100%;
  }

  .number {
    width: 30px;
    font-size: 0.6em;
    padding-top: 6px;
  }

  .left {
    margin-right: 5px;
  }

  .right {
    margin-right: 8px;
    margin-left: 6px;
  }

  .right:hover {
    cursor: pointer;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin: 3.8px 0;
    overflow: hidden;
    background-color: black;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100px;
    height: 4px;
    cursor: pointer;
    box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
    background: #868686;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 0px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid rgba(0, 0, 0, 0);
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -3.5px;
  }

  input[type="range"]::-moz-range-track {
    width: 100px;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }

  input[type="range"]::-moz-range-thumb {
    box-shadow: 1px 1px 0px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid rgba(0, 0, 0, 0);
    height: 10px;
    width: 10px;
    border-radius: 8px;
    background: #ffffff;
    cursor: pointer;
  }

  input[type="range"]::-ms-track {
    width: 100px;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type="range"]::-ms-fill-lower {
    background: #0d1f2e;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  }

  input[type="range"]::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 0.2px 0.2px 1px #000000, 0px 0px 0.2px #0d0d0d;
  }

  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 0px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid rgba(0, 0, 0, 0);
    height: 10px;
    width: 10px;
    border-radius: 8px;
    background: #ffffff;
    cursor: pointer;
    height: 8.4px;
  }

  input[type="range"]:focus::-ms-fill-lower {
    background: #3071a9;
  }

  input[type="range"]:focus::-ms-fill-upper {
    background: #96bee1;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 0px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid rgba(0, 0, 0, 0);
    height: 10px;
    width: 10px;
    border-radius: 8px;
    background: #ffffff;
    cursor: pointer;
    height: 8.4px;
  }

  input[type="range"]::-webkit-slider-thumb {
    box-shadow: -450px 0 0 450px #b3b3b3;
  }

  input[type="range"]:hover::-webkit-slider-thumb {
    box-shadow: -450px 0 0 450px #1ed760;
  }
`;
