import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdArrowBack } from "react-icons/md";

export const InfoContainer = styled.div`
  /* min-height: 692px; */
  height: auto;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  /* background: #000; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
`;

export const InfoH1 = styled.h1`
  /* color: #fff; */
  font-size: 32px;
  font-weight: 700;
  /* margin-top: 50px; */
  margin-bottom: 20px;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
`;

export const InfoButtonWrapper = styled.div`
  margin: 20px 20px;
`;

export const InfoButton = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#010606" : "#40E0D0")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px " : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#010606 ")};
  font-size: ${({ fontBig }) => (fontBig ? "20px " : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#40E0D0" : "#fff ")};
  }
`;

export const ArrowForward = styled(MdArrowBack)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowLeft)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  margin-bottom: 40px;
  /* color: #fff; */
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`)};
  }
`;

export const ImgWrapper = styled.div`
  max-width: 550px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  animation: fly-in 2s ease-in-out;

  @keyframes fly-in {
    0% {
      transform: translateX(200%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
