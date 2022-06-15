import styled from 'styled-components';
import fundoregion from '../../images/fundoregion.png';


const RankStyled = styled.div`
  background-image: url(${fundoregion});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top;
  width: 90%;
  margin: auto;
  
  .top {
    margin: 1rem auto;
    display: flex;
    height: 80vh;
    width: 50vw;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2.5rem 0;
    
    img {
      width: min-content;
    }
    
    .divListRank {
      height: 50vh;
      
      .h1Ranking {
        color: darkslateblue;
        text-align: center;
      }
      
      ol {
        color: darkred;
        font-weight: bold;
        font-size: 1.3rem;
        line-height: 2.5rem;
      }
    }
  }
`;

export default RankStyled;