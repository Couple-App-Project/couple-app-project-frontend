import router from "next/router";

export default function ScreenCalender() {
  return (
    <>
      <button onClick={() => router.push("/home")}>π </button>
      <h1>μΊλ¦°λνμ΄μ§</h1>
    </>
  );
}
