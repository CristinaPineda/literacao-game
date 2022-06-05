import styled from 'styled-components';

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  .image_literacao {
    margin: auto;

    img {
      width: 40rem;
    }
  }

  .menu {
    .nav_menu {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      border-top: 1px double darkblue;
      border-bottom: 1px double darkblue;
      height: 2.5rem;
      
      a {
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    .image_literacao {
      text-align: center;
      img {
        width: 80%;
      }
    }
  }
`;

export default MenuStyled;