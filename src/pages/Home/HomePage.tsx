import React from "react";
import styled from "styled-components";

const BgContainer = styled.div`
  position: relative;
  background-color: #fff;
  overflow: hidden;
  padding: 80px 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f5fbfc;
    clip-path: polygon(0 7.5%, 100% 0, 100% 100%, 0 100%);
    z-index: 0;
  }
`;

const ContentWrapper = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  font-family: "Inter";
  flex-wrap: wrap;
`;

const TextBlock = styled.div`
  max-width: 600px;
`;

const Headline = styled.h1`
  font-weight: 400;
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 24px;
  letter-spacing: 1.8px;

  span {
    color: #35b8be;
  }
`;

const Subtext = styled.p`
  font-size: 18px;
  color: #546285;
  margin-bottom: 32px;
  max-width: 540px;
  letter-spacing: 0.36px;
`;

const DisabledButton = styled.button`
  background-color: #35b8be;
  max-width: 195px;
  width: 100%;
  height: 60px;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: not-allowed;
  opacity: 0.5;
`;

const ReviewSection = styled.div`
  margin-top: 32px;
  font-size: 17px;

  strong {
    color: #2a2a2a;
  }

  span {
    color: #35b8be;
  }
`;

const ImageBlock = styled.div`
  flex-shrink: 0;
  margin-top: 32px;

  img {
    max-width: 600px;
  }
`;

const HomePage: React.FC = () => {
  return (
    <BgContainer>
      <ContentWrapper>
        <TextBlock>
          <Headline>
            Beautiful food & takeaway, <span>delivered</span> to your door.
          </Headline>
          <Subtext>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </Subtext>
          <DisabledButton disabled>Place an Order</DisabledButton>
          <ReviewSection>
            <strong>
              <span style={{ color: "#00B67A" }}>★</span> Trustpilot
            </strong>
            <br />
            <span>4.8 out of 5</span> based on 2000+ reviews
          </ReviewSection>
        </TextBlock>

        <ImageBlock>
          <img src="src/public/imageHomePage.svg" alt="Delicious food" />
        </ImageBlock>
      </ContentWrapper>
    </BgContainer>
  );
};

export default HomePage;
