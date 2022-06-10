import styled from 'styled-components';

const StudentStyled = styled.div`
  background-color: rgba(220,220,220,.9);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 3.5rem;
  line-height: 1.5rem;

  h2 {
    color: darkcyan;
  }

  ul {
    width: 20%;
    margin: auto;
  }
  li {
    margin: .5rem;
    color: #2F4F4F;
    text-align: justify;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: .5rem 0;

    ul {
      width: 90%;
    }

    li {
    color: #2F4F4F;
    text-align: left;
    font-weight: 600;
  }
  }
`;

export default StudentStyled;