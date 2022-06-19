import styled from 'styled-components';

const DivCorrectStyled = styled.div`
  display: flex;
  color: black;
  font-weight: bold;
  align-items: center;
  letter-spacing: 2px;

  .spamResp {
    margin-left: 40px;
  }

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;

    .spamResp {
      margin-left: 0;
    }
  }
`;

export default DivCorrectStyled;