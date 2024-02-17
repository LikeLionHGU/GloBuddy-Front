import styled from "styled-components";

export const FromButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: black;
  background: ${({ active }) => (active ? "pink" : "white")};
  margin-right: 10px;
`;

export const NextButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: black;
  background: ${({ disabled }) => (disabled ? "lightgray" : "lightgreen")};
  margin-left: auto;
  height: 50px;
  width: 100px;
`;

export const Horizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Vertical = styled.div`
  //세로 정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box20 = styled.div`
  //margin
  margin-top: 20px;
`;

export const TitleComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Right = styled.div``;
export const Earth = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const Candy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 300px;
`;
export const EN = styled.div``;
export const ET = styled.div``;
export const EC = styled.div``;
export const Circle = styled.div``;
export const MS = styled.div``;
export const CN = styled.div``;
export const CT = styled.div``;
export const CC = styled.div`
  //margin
`;
export const Banner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Scroll = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const All = styled.div`
  display: flex;
  width: 98vw;
  height: 98vh;
  flex-direction: column;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Green = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const SN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ST = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const SC = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const Grid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  width: 100%;
  display: flex;
  zindex: 2;
  align-content: space-around;
  flex-direction: row-reverse;
  justify-content: center;
`;
export const Three = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const Tree = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const To = styled.div`
  display: flex;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;
