import styled from 'styled-components';

const DivNextGameStyled = styled.div`
  margin: auto;
  width: 80%;
  text-align: center;

  .btnNextGame {
    width: 50%;
    background-color: rgb(173,255,47);
    color: darkgreen;
    height: 2rem;
    border: 3px solid green;
    border-radius: 5px;
    font-weight: bold;
    margin: auto;
  }

  .btnNextGame:hover {
    background-color: orange;
    border: 3px solid lime;
    color: darkred;
  }

  @media (max-width: 820px) {
    .btnNextGame {
      width: 90%;
    }
  }
`;

export default DivNextGameStyled;