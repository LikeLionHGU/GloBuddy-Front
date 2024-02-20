import styled from "styled-components";

export const FromButton = styled.button`
  width: 242px;
  height: 64px;
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
`;
export const Title = styled.div`
  width: 100%;
  display: flex;
  zindex: 2;
  align-content: space-around;
  flex-direction: row-reverse;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 60px;
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
export const Text = styled.div`
  display: flex;
  width: 100%;
  zindex: 3;
  margin-top: 50px;
`;
export const First = styled.div`
  display: flex;
  width: 100%;
  zindex: 3;
  textalign: "left";
  justify-content: space-around;
`;
export const Second = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  zindex: 3;
  margin-bottom: 300px;
`;
export const Fall = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Person = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const PC = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const PW = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const PWF = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const PWS = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Note = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const NC = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const NW = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const NWF = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const NWS = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Out = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const OC = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export const OW = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const OCF = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const OCS = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
