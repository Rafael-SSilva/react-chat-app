import styled from "styled-components";

const Container = styled.div`
  background-color: inherit;
  height: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .chat {
    width: 100%;
    max-width: 60%;
    height: 80vh;

    &__header {
      background-color: var(--background);
      height: 80px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #ffffff;
      font-weight: 400;

      & .avatar {
        margin: 0 1rem;
        font-size: 20px;
        display: flex;
        align-items: center;

        & div {
          cursor: pointer;
        }

        & span {
          margin-left: 10px;
          font-size: 22px;
        }
      }

      & button {
        font-size: 20px;
        border: none;
        background-color: transparent;
        color: white;
        margin: 0 1.2rem;

        &:hover {
          cursor: pointer;
        }
      }
    }

    & .divider {
      width: 100%;
      min-height: 500px;
      height: 100%;
      display: flex;

      & .chat__sidebar {
        border-radius: 8px;
        width: calc(100% - 70%);
        margin: 14px 0;
        height: calc(98% - 14px);
        background-color: var(--background);

        & .chat__sidebar--header {
          position: sticky;
          z-index: 2;
          top: 0;
          height: 48px;
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
          background-color: var(--background-shadow);

          & .chat__sidebar--header-tabs {
            display: flex;
            height: 100%;
            justify-content: space-between;
            align-items: center;

            & div {
              color: var(--primary);
              font-weight: 400;
              width: calc(50% - 0.8rem);
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;

              & span {
                font-size: 0.8rem;
              }

              &:hover {
                cursor: pointer;
              }
            }

            & div.active {
              border-bottom: 3px solid var(--primary);
            }
          }
        }

        & .chat__sidebar--body {
          height: calc(100% - 50px);
          overflow-y: auto;
        }
      }
    }

    &__body {
      border-radius: 8px;
      margin: 14px 0 0 14px;
      width: calc(100% - 30%);
      height: calc(98% - 14px);
      background-color: var(--background);

      &--header {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        height: 64px;
        width: 100%;
        background-color: var(--background-shadow);
        display: flex;
        align-items: center;
        color: #ffffff;

        & .avatar {
          margin: 0 1rem;
          font-size: 20px;
          display: flex;
          align-items: center;

          & span {
            margin-left: 10px;
            font-size: 20px;
          }
        }
      }

      &--content {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 100%;
        height: inherit;
        max-height: calc(100% - 146px);
        max-width: 98%;
        overflow-y: auto;
        margin: 0 auto;
        padding: 10px 0 10px 10px;
      }

      &--textbox {
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: center;
        margin-top: 12px;

        & textarea {
          background-color: rgba(62, 78, 90, 0.8);
          border: 1px solid #ffffff;
          border-radius: 8px;
          color: #ffffff;
          font-weight: 300;
          font-size: 16px;
          height: 100%;
          line-height: 24px;
          outline: none;
          padding: 10px 0 10px 10px;
          width: 95%;
        }
      }
    }
  }
`;

export default Container;
