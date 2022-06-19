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

  @media (max-width: 820px) {
  background-repeat: repeat-y;

  .top {
    margin: 1rem auto;
    display: flex;
    height: 100vh;
    width: 80vw;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem 0;
    
    img {
      width: 8rem;
    }
    
    .divListRank {
      height: 90vh;
      
      .h1Ranking {
        color: darkslateblue;
        text-align: center;
      }
      
      ol {
        margin-left: 1rem;
        color: darkred;
        font-weight: bold;
        font-size: 1.3rem;
        line-height: 2.5rem;
      }
    }
  }
}
`;

export default RankStyled;