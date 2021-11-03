import styled from "styled-components";

export const DashboardContainer = styled.div`
  min-height: 100vh;
  padding: 30px 115px 0 115px;

  #productListContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 70px;

    li {
      width: 300px;
      height: 346px;
      border: 2px solid var(--gray-100);
      border-radius: 5px;

      #imgDiv {
        height: 150px;
        background-color: var(--gray-0);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      #ProductDescriptionDiv {
        height: calc(100% - 150px);
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h1 {
          font-size: 18px;
          color: var(--gray-600);
        }

        h2 {
          font-size: 12px;
          color: var(--gray-300);
        }

        h3 {
          font-size: 14px;
          color: var(--color-primary);
        }

        button {
          width: 106px;
          height: 40px;
          border: none;
          border-radius: 8px;
          background-color: #bdbdbd;
          color: #ffffff;

          :hover {
            background-color: var(--gray-300);
          }
        }
      }
    }
  }
`;
