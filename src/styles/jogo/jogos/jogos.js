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
          margin-right: .5rem;
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
    margin: .625rem auto;
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

  .divResposta {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: flex-start;
    align-items: center;

    .resp {
      display: flex;
      width: 60%;
      
      .inputResposta {
        width: 60%;
        height: 1.5rem;
        background-color: lightblue;
        border: 3px solid purple;
        border-radius: 5px;
        margin-right: 0.315rem;
      }

      .inputResposta:disabled {
        background-color: gray;
        color: white;
        border: 3px solid darkgray;
        border-radius: 5px;
        font-weight: normal;
      }
      
      button {
        background-color: blue;
        border: 3px solid purple; 
        border-radius: 5px;
        color: white;
        font-weight: bold;
      }
      
      button:hover {
        background-color: lightblue;
        border: 3px solid darkpurple;
        color: purple;
      }

      button:disabled {
        background-color: gray;
        color: white;
        border: 3px solid darkgray;
        border-radius: 5px;
        font-weight: normal;
      }
    }
  }

  .divNextQuestion {
    width: 80%;
    margin: .938rem auto;

    .btnNext {
      background-color: green;
      border: 3px solid lime; 
      border-radius: 5px;
      color: white;
      font-weight: bold;
      height: 2rem;
      width: 20rem;
      }
      
      .btnNext:hover {
        background-color: lime;
        border: 3px solid green;
        color: black;
      }

      .btnNext:disabled {
        background-color: gray;
        color: white;
        border: 3px solid darkgray;
        border-radius: 5px;
        font-weight: normal;
      }
    }
  

  @media (max-width: 820px) {
    .divPontos {
      flex-direction: column-reverse;
      width: 90%;

      .btns {
        width: 90%;
        margin: .625rem auto;
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
        padding: 0 1.875rem;
      }
    }

    .divResposta {
      flex-direction: column;
      width: 90%;

      .resp {
        width: 100%;

        .inputResposta {
          width: 100%;
        }
      }
    }

    .divNextQuestion {
      margin: 0 auto 1.25rem;

      .btnNext {
        width: 100%;
        margin: auto;
      }

      .btnNext:disabled {
        margin: 1.25rem auto;
      }
    }
  }
`;

export default DivJogosStyled;