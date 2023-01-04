import styled from "styled-components";


export const Container = styled.div`
`;

export const TimerBox = styled.div`
  background-color: #fff;
  margin: 35px 24px;
  display: inline-block;
  padding: 20px 12px 0px 12px;
  text-align: center;
  width: 130px;
  border-radius: 20px;
  border: 4px solid rgba(255, 255, 255, .6);

  h1 {
    font-size: 48px;
    margin-top: 5px;
    margin-bottom: 0px;
    font-family: "Roboto",sans-serif;
    color: #ff0054;

    @media(max-width: 740px) {
      font-size: 36px;
    }
  }

  p {
    margin-top: 0px;
    font-weight: 500;
    color: #ff0054;
  }

  @media(max-width: 520px) {
    margin: 0 12px 12px 0;
  }

  @media(max-width: 740px) {
    width: 100px;
    padding: 16px 0 0 0;
    margin: 35px 12px;
  }
`;

export const Message = styled.p``;