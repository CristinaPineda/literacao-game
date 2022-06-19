import styled from 'styled-components';

const BotaoPlayStyled = styled.div`
  display: flex;
  justify-content: center;

  .play {
    width: 7.5rem;
    padding: .1rem;
    border: .1rem solid lightgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: darkgreen;
    font-weight: 600;
  }

  .play:hover {
    background-color: blue;
    border: .1rem solid darkgreen;
  }

  @media (max-width: 820px) {
    display: flex;
    margin-bottom: 3rem;
    justify-content: flex-start;

    .play {
      padding: .1rem;
      width: 7.5rem;
      border-radius: 0;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: none;
      font-weight: 600;
      margin: auto;
    }
  }
`;

export default BotaoPlayStyled;