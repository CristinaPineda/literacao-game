import styled from 'styled-components';

const RankStyledOff = styled.div`
  background-color: rgba(253,158,39, 0.9);
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;

  h2 {
    color: darkgreen;
    text-align: center;
  }

  p {
    color: darkred;
    font-weight: bold;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }
  }
  
`;

export default RankStyledOff;