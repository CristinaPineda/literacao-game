import styled from 'styled-components';

const MenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: white;

  .image_literacao {
    margin: auto;

    img {
      width: 40rem;
    }
  }

  .menu {
    .nav_menu {
      margin: auto;
      border-top: 1px double lightgreen;
      border-bottom: 1px double lightgreen;
      color: white;
      background-color: #27635e;

      .btn_mobile {
        display: none;
      }
      
      .nav_ul {
        margin: auto;
        display: flex;
        color: white;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
        cursor: pointer;
      }

      li {
        list-style-type: none;
      }

      a{
        display: flex;
        padding: .3rem;
        color: white;
        align-items: center;
        text-decoration: none;
      }

      a:hover {
        color: lightgreen;
      }
    }
  }

  @media (max-width: 820px) {
    .menu {
      .nav_menu {
        .btn_mobile {
        display: block;
        padding: .8rem 0;
        margin: 0 .8rem;
        border-bottom: 1px double rgba(48,99,94);
        }
        .nav_ul {
        display: block;
        position: absolute;
        width: 100%;
        background-color: rgba(48,99,94,.9);
        font-size: 1rem;
        height: 0px;
        transition: .6s;
        z-index: 1000;
        visibility: hidden;
        overflow-y: hidden;
        }
      }

      .nav_menu.nav_mobile .nav_ul {
          height: 100vh;
          visibility: visible;
          overflow-y: auto;
      }
      
      .nav_ul a{
        padding: .8rem 0;
        margin: 0 .8rem;
        border-bottom: 1px double rgba(48,99,94);
      }
    }

    .image_literacao {
      text-align: center;
      img {
        width: 80%;
      }
    }
  }
`;

export default MenuStyled;