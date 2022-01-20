import styled from 'styled-components';

const ProductStyle = styled.main`
  * {
    background-color: #fff;
  }
  .product {
    border-radius: 1rem;
    padding: 2rem 2rem;
    margin-bottom: 1rem;
  }

  figure {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  figure img {
    height: 5rem;
  }
  .counter {
    display: flex;
    height: 1.2rem;
    align-items : center;
    border: 1px solid #d4d4d4;
  }
  .counter button {
    height 1rem;
    border: none;
    padding: 0rem 0.5rem;
  }
  .priceProduct{
    display: flex;
    justify-content: space-around;
    font-size: 1.2rem;
  }
  .priceProduct button{
    border: none;
    color: grey;
  }
`;

export default ProductStyle;
