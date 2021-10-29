import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 500px;
    height: 527px;
    border: 2px solid var(--grey-0);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
