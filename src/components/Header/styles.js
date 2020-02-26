import styled from 'styled-components';

export const Container = styled.header`
  background-color: #ffe600;
  padding: 0 10px;
  margin-bottom: 16px;

  .content {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    .logo {
      width: 60px;
      margin-right: 50px;
    }

    @media (max-width: 450px) {
      flex-direction: column;
      padding: 20px 0;

      .logo {
        margin-right: 0;
      }
    }
  }
`;

export const Search = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;

  > input {
    flex-grow: 1;
    height: 39px;
    border: 0;
    border-radius: 3px 0 0 3px;
    padding: 0 20px;
    font-size: 1.8rem;
    color: rgb(51, 51, 51);

    &::placeholder {
      color: rgb(153, 153, 153);
      font-weight: 200;
    }
  }

  button {
    background-color: rgb(238, 238, 238);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 39px;
    border-radius: 0 3px 3px 0;
    cursor: pointer;
    border: 0;

    img {
      width: 20px;
    }
  }
`;
