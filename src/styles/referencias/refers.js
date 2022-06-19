
import styled from 'styled-components';
import cartas from '../../images/cartas.png';

const RefersStyled = styled.div`
  background-image: url(${cartas});
  background-repeat: repeat-x;
  background-position: center top;
  background-size: contain;
  width: 99%;
  margin: auto;
  color: 	#1C1C1C;
  text-align: center;
  
  .container {
    margin: 0.5rem 0;
    padding: 0.5rem 3.5rem;
    line-height: 2rem;
    background-color: rgba(220,220,220,.8);
    color: 	#1C1C1C;
    text-align: left;

    ul {
      list-style-type: square;
    }
    h2 {
      text-align: center;
      color: darkred;
    }
  }


  @media (max-width: 820px) {
    background-repeat: repeat-y;

    .container {
    padding: 0.5rem 1.5rem;
    }
  }

  `;

export default RefersStyled;