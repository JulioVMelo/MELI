import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto 50px auto;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 16px;
  border-radius: 3px;

  .info {
    display: flex;
    align-items: flex-start;

    .image {
      flex-grow: 1;
    }

    .detail {
      max-width: 333px;
      min-width: 333px;
      span {
        font-size: 1.4rem;
        color: #999;
        margin-bottom: 16px;
      }

      h2 {
        font-size: 2.4rem;
        color: #333;
        margin-bottom: 32px;
      }

      h1 {
        font-size: 3.6rem;
        color: #333;
        font-weight: 300;
        margin-bottom: 32px;
      }

      button {
        background-color: #3483fa;
        border-radius: 4px;
        width: 100%;
        color: #fff;
        font-size: 1.8rem;
        height: 48px;
        cursor: pointer;
      }
    }
  }

  .description {
    margin-left: 32px;

    h1 {
      font-size: 2.8rem;
      font-weight: 300;
      margin-bottom: 32px;
    }

    p {
      font-size: 1.6rem;
      color: #999;
    }
  }
`;