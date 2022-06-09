import styled from 'styled-components';
import fundocolor from '../../images/fundocolor.png';

const DescriptionStyled = styled.div`
  background-image: url(${fundocolor});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: contain;
  width: 95%;
  margin: auto;

  .divDescription {
    background-color: rgba(220,220,220,.8);
    .descriptionGame {
      color: darkred;
      margin-top: 0.5rem;
      text-align: center;
      padding-top: 0.5rem; 
    }

    p {
      margin: .6rem 3rem;
      padding-bottom: .5rem;  
    }
  }

  .divRules {
    background-color: rgbA(220,220,220,.8);
    .gameRules {
      color: blue;
      margin-top: .5rem;
      text-align: center;
      padding-top: .5rem; 
    }

    p {
      margin: .6rem 3rem;
      padding-bottom: .5rem;  
    }

  }
  .jogar {
    text-align: center;
    font-size: 1.5rem;
    color: darkred;
    background-color: orange;

    h3 {
      margin-top: 0;
      padding: .5rem;
    }
  }

  @media (max-width: 768px) {
    background-repeat: repeat-y;
  }
`;

export default DescriptionStyled;