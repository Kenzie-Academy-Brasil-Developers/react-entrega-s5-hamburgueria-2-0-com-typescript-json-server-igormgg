import styled from "styled-components";

export const RegisterContainer = styled.div`
  min-height: 100vh;
  padding: 0 10px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  gap: 80px;

  form {
    max-width: 500px;
    width: 100%;
    height: 527px;
    border: 2px solid var(--gray-0);
    border-radius: 5px;
    box-shadow: 0px 0px 30px -20px #00000040;
    padding: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    #registerHeader {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h1 {
        font-size: 18px;
        font-weight: bold;
        color: var(--gray-600);
      }

      button {
        font-size: 14px;
        border: none;
        text-decoration-line: underline;
        background-color: transparent;
        color: var(--gray-300);

        :hover {
          filter: brightness(0.7);
        }
      }
    }

    .commonInputDiv {
      width: 100%;
      height: 77px;
      display: flex;
      flex-direction: column;

      input {
        height: 60px;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        padding: 0 15px 0 15px;
        color: var(--gray-600);
        background-color: var(--gray-0);
        outline: none;

        :focus {
          border: 2px solid var(--fb-success);
          background-color: white;
        }

        :required {
          border: 2px solid var(--fb-negative);
          background-color: white;
        }
      }

      label {
        font-size: 12px;
        color: var(--fb-negative);
        margin-top: 5px;
      }
    }

    #registerButton {
      width: 100%;
      height: 60px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      background-color: var(--gray-0);
      color: var(--gray-300);

      :hover {
        background-color: var(--gray-300);
        color: var(--gray-0);
      }
    }
  }

  #logoContainer {
    max-width: 377px;
    width: 100%;

    img {
      margin-bottom: 25px;
    }

    #logoDescriptionDiv {
      width: 100%;
      height: 95px;
      padding: 15px 10px;
      border: 2px solid var(--gray-0);
      border-radius: 5px;
      box-shadow: 0px 4px 40px -20px #00000040;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      #iconDiv {
        width: 60px;
        height: 60px;
        border-radius: 5px;
        background: rgba(39, 174, 96, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          color: var(--color-primary);
          font-size: 24px;
        }
      }

      span {
        width: 261px;
        color: var(--gray-300);
        font-size: 14px;
        line-height: 22px;

        b {
          color: var(--gray-600);
        }
      }
    }

    #logoDots {
      width: 180px;
      height: 100px;
      margin-top: 25px;
      display: flex;
      flex-wrap: wrap;
      gap: 21px;

      div {
        width: 11px;
        height: 11px;
        border-radius: 100%;
        background-color: var(--gray-100);
      }
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 50px 10px 0 10px;
    gap: 20px;

    #logoContainer {
      #logoDots {
        display: none;
      }
    }
  }
`;
