import { useState } from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>사용자정보얻기</button>
      {/* 에러 플래그 켜지면 에러 출럭 */}
      {isError && <p style={{ color: "red" }}>에러발생</p>}
      {/* 로딩중 표시 */}
      {isLoading ? (
        <p>데이터 가져오는 중</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>{`${user.id}:${user.name}(age:${user.age})`}</p>
        ))
      )}
    </div>
  );
};
