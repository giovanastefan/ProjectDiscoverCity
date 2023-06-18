import styled from "styled-components";

export const Container = styled.div`
  .review {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 20px;
  }

  .review-name {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .review-rating {
    color: gold;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .star {
    display: inline-block;
  }

  .review-description {
    font-size: 14px;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-info-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .contact-info-icon {
    margin-right: 10px;
  }

  .contact-info span {
    font-size: 16px;
  }
`;

export const Coupon = styled.div``;