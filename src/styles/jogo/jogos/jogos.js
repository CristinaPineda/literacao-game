import styled from 'styled-components';

const DivJogosStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .divPontos {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row-reverse;
    width: 80%;
    margin: auto;
    background-color: rgb(220,220,220);
    border: 5px double rgb(30,144,255);
    border-radius: 5px;

    p {
      color: darkred;
      font-weight: bold;
      font-size: 1rem;
    }

    .btns {
      display: flex;
      width: 30%;
      justify-content: space-between;
      align-items: center;

      .btn1 {
        width: 30%;
        background-color: green;
        color: white;
        height: 2rem;
        border: 3px solid rgb(0,255,0);
        border-radius: 5px;
        font-weight: bold;
      }

      .btn1:hover {
        background-color: rgb(0,255,0);
        border: 3px solid green;
        color: darkred;
      }

      .btn1:disabled {
        width: 30%;
        background-color: gray;
        color: white;
        height: 2rem;
        border: 3px solid darkgray;
        border-radius: 5px;
        font-weight: normal;
      }

      .dcs {
        width: 30%;
        
        label {
          margin-right: 8px;
          color: darkred;
        }

        .maisDicas {
          width: 30%;
          background-color: darkred;
          color: white;
          height: 2rem;
          border: 2px solid red;
          border-radius: 5px;
          font-weight: bold;
          font-size: 1.4rem;
        }

        .maisDicas:hover {
        background-color: red;
        border: 2px solid darkred;
        color: yellow;
        }

        .maisDicas:disabled {
        width: 30%;
        background-color: gray;
        color: white;
        height: 2rem;
        border: 2px solid darkgray;
        border-radius: 5px;
        font-weight: normal;
      }
      }
    }
  }

  .region {
    display: flex;
    margin: 10px auto;
    background-color: rgb(220,220,220);
    width: 80%;
    border: 5px double orange;
    border-radius: 5px;
    justify-content: space-between;
    align-items: flex-start;

    ol {
      width: 50%;
    }

    li {
      color: rgb(25,25,112);
      line-height: 2rem;
    }
  }

  @media (max-width: 768px) {
    .divPontos {
      flex-direction: column-reverse;
      width: 90%;

      .btns {
        width: 90%;
        margin: 10px auto;
        justify-content: space-around;

        .dcs {
          .maisDicas {
            width: 40%;
          }

          .maisDicas:disabled {
            width: 40%;
          }
        }
      }
    }

    .region {
      flex-direction: column-reverse;
      width: 90%;

      ol {
        width: 90%;
        padding: 0 30px;
      }
    }
  }
`;

export default DivJogosStyled;