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
      
      a {
        text-decoration: none;
      }
    }
  }
`;

export default MenuStyled;