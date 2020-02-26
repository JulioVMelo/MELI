import styled from 'styled-components';

export const Product = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 16px 0;

  .image {
    display: flex;
    width: 180px;
    height: 180px;
    border-radius: 4px;
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    margin-right: 16px;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 100%;

    .price {
      display: flex;
      align-items: center;

      h2 {
        font-size: 2rem;
        font-weight: 300;
        color: #333;
      }

      img {
        margin-left: 10px;
        width: 20px;
      }
    }

    p {
      font-size: 1.8rem;
      color: #666;
    }

    span {
      font-size: 1.2rem;
      align-self: flex-end;
      color: #999;
      margin-bottom: 32px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;

    .info {
      .price {
        justify-content: center;
      }

      span {
        align-self: center;
      }

      p {
        text-align: justify;
      }
    }
  }
`;
