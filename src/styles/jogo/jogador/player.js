import styled from 'styled-components';

export const DivStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  margin: 1.25rem auto;
  background-color: purple;
  color: white;
  padding: 0.8rem;
  
  .container {
    display: flex;
    flex-direction: column;

    .pNome {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 85%;

    .pNome {
      font-size: 1rem;
    }
  }
`;

export const InputStyled = styled.div`
  display: flex;
  
  input {
    width: 60%;
    height: 1.5rem;
    background-color: lightgreen;
    border: 3px solid orange;
    border-radius: 5px;
    margin-right: 0.315rem;
  }

  button {
    background-color: green;
    border: 3px solid lightgreen;
    border-radius: 5px;
    width: 3.5rem;
    color: white;
  }

  button:hover {
    background-color: lightgreen;
    border: 3px solid green;
    width: 3.5rem;
    color: purple;
  }

  @media (max-width: 768px) {
    input {
      width: 75%;
    }
  }
`;
