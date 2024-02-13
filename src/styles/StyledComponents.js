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
