import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0px;
  height: 60px;
  background-color: var(--gray-100);
  display: flex;
  justify-content: space-between;
  padding: 5px;
  z-index: 1;

  #logo {
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      font-size: 24px;
    }

    span {
      font-size: 16px;
      color: red;
    }
  }

  #endBox {
    display: flex;
    align-items: center;
  }
`;
