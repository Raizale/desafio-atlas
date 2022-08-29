import styled from "styled-components";

export const UserContainer = styled.aside`
  width: 300px;
  margin-top: 50px;
  margin-left: 75px;
  height: 100vh;
  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;
    color: #24292e;
  }

  img {
    border-radius: 50%;
    width: 300px;
    margin-bottom: 15px;
  }
  article {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 300px;
    height: 35px;
    border: 1px solid gray;
    background-color: #fafbfc;
    border-radius: 8px;
    margin-bottom: 12px;
  }

  h2{
    font-size: 24px;
    color: #24292e;
  }

  h4 {
    margin-bottom: 12px;
    font-weight: bold;
    color: #57606a;
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
  }

  div{
    display: flex;
    align-items: center;
    gap: 8px;

    p{
      display: flex;
      gap: 4px;
    }
  }

  @media (max-width: 576px) {
    .profileImg {
      max-width: 70%;
    }
  }
  @media (max-width: 768px) {
    .profileImg {
      max-width: 60%;
    }
  }
  @media (max-width: 992px) {
    .profileImg {
      width: 60%;
    }
  }

  @media (max-width: 1200px) {
    .profileImg {
      width: 80%;
    }
  }
`;
