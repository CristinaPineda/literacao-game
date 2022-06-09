import styled from 'styled-components';

const BotaoPlayStyled = styled.div`
  display: flex;
  justify-content: center;

  .play {
    width: 120px;
    padding: 5px;
    border-radius: 10000px;
    border: 2px solid lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: darkgreen;
    font-weight: 600;
  }

  .play:hover {
    background-color: blue;
    border: 2px solid darkgreen;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-start;
    .play {
      padding: 0;
      width: 120px;
      height: 20px;
      border-radius: 0;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: none;
      font-weight: 600;
    }
  }
`;

export default BotaoPlayStyled;