import router from "next/router";

export default function ScreenCalender() {
  return (
    <>
      <button onClick={() => router.push("/home")}>🏠</button>
      <h1>캘린더페이지</h1>
    </>
  );
}
