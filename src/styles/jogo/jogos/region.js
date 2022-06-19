import styled from 'styled-components';

const DivRegionStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  margin: auto;

  p {
    color: darkgreen;
    font-weight: bold;
    font-style: italic;
  }

  img {
    width: 350px;
  }

  @media (max-width: 820px) {
    align-items: center;
    flex-direction: column;
    margin: auto;

    img {
      width: 150px;
    }
  }
`;

export default DivRegionStyled;