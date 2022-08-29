import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  text-align: right;
  justify-content: center;

  p {
    display: flex;
    width: 305px;
    text-align: right;
  }
  input {
    width: 250px;
    padding: 0 8px;
    height: 35px;
    border: 1px solid;
    border-radius: 4px;
  }
  form {
    display: flex;
  }

  button {
    display: flex;
    gap: 2px;
    border: none;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    padding: 0 4px;
    height: 35px;
    background-color: #46535d;
    color: #fff;
    border-radius: 4px;
    font-style: italic;
    font-size: 14px;
  }

  input::placeholder {
    font-size: 12px;
    opacity: 0.5;
    font-style: italic;
    padding-left: 10px;
  }

  h4 {
    margin-top: 20px;
  }
`;
