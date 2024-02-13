import styled from "styled-components";

const DetailButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  color: black;
  background: white;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center; /* 수직 가운데 정렬 */
  align-items: center; /* 수평 가운데 정렬 */
  width: 400px;
  height: 300px;
  border: 1px solid lightgray;
  margin: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 가로 정렬되며, 넘칠 경우 자동으로 아래로 내려감 */
  justify-content: center; /* 수평 가운데 정렬 */
`;

function PostCardComponent({ postData }) {
  //ToDo: 자세히 보기 버튼 클릭 시 데이터와 같이 이동
  return (
    <CardContainer>
      {postData.map((data, index) => (
        <Card key={index}>
          <h1>{data.title}</h1>
          <h3>
            이름 {data.name} / 국내|국제 {data.type}
          </h3>
          <h3>{data.gender}</h3>
          <h3>{data.needs}</h3>
          <DetailButton>자세히보기</DetailButton>
        </Card>
      ))}
    </CardContainer>
  );
}

export default PostCardComponent;
