function HomeComponent({ userInfo }) {
  return (
    <>
      <h1>이건 로그인한 유저의 개인 정보</h1>
      <h3>{userInfo.name}</h3>
      <h3>{userInfo.type}</h3>
      <h3>{userInfo.gender}</h3>
      <h3>{userInfo.propensity}</h3>
      <h3>{userInfo.needs}</h3>
      <h3>{userInfo.picture}</h3>
    </>
  );
}

export default HomeComponent;
