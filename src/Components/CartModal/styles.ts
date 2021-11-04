import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  #emptyModalDiv {
    max-width: 500px;
    width: 100%;
    height: 212px;
    background-color: #ffffff;

    #cartHeader {
      height: 54px;
      padding: 0 15px;
      background-color: var(--color-primary);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
      }

      svg {
        color: #ffffff;
        font-size: 18px;

        :hover {
          cursor: pointer;
          filter: brightness(0.9);
        }
      }
    }

    #emptyCartBody {
      height: 158px;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;

      h2 {
        font-size: 18px;
        font-weight: 700;
        color: var(--gray-600);
      }

      span {
        font-size: 14px;
        color: var(--gray-300);
      }
    }
  }

  #modalDiv {
    max-width: 500px;
    width: 100%;
    min-height: 313px;
    background-color: #ffffff;

    #cartHeader {
      height: 54px;
      padding: 0 15px;
      background-color: var(--color-primary);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
      }

      svg {
        color: #ffffff;
        font-size: 18px;

        :hover {
          cursor: pointer;
          filter: brightness(0.9);
        }
      }
    }

    #cartList {
      max-height: 350px;
      margin: 15px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      overflow-y: auto;

      li {
        display: flex;
        gap: 10px;

        #cartImgDiv {
          width: 80px;
          height: 80px;
          background-color: var(--gray-0);
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 75%;
          }
        }

        #productstatus {
          width: 75%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          h1 {
            font-size: 18px;
            font-weight: bold;
          }

          #productCounter {
            width: 106.5px;
            height: 34px;
            display: flex;

            h2 {
              width: calc(100% - 60px);
              height: 100%;
              border: 1px solid #f2f2f2;
              text-align: center;
              line-height: 33px;
            }

            button {
              width: 30px;
              height: 100%;
              background-color: #f2f2f2;
              color: var(--color-secondary);
              border: none;
              font-size: 18px;

              :hover {
                background-color: var(--gray-300);
                color: var(--gray-0);
              }
            }
          }
        }

        svg {
          color: #bdbdbd;

          :hover {
            cursor: pointer;
            filter: brightness(0.7);
          }
        }
      }
    }

    #cartSummary {
      margin: 15px;
      padding-top: 15px;
      border-top: 2px solid var(--gray-100);
      display: flex;
      flex-direction: column;
      gap: 15px;

      #cartTotal {
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 14px;
          font-weight: 600;
          color: var(--gray-600);
        }

        span {
          font-size: 14px;
          font-weight: 600;
          color: var(--gray-300);
        }
      }

      button {
        width: 100%;
        height: 60px;
        background-color: var(--gray-100);
        color: var(--gray-300);
        border: none;
        border-radius: 8px;

        :hover {
          background-color: var(--gray-300);
          color: var(--gray-0);
        }
      }
    }
  }
`;
