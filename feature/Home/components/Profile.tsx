import Image from "next/image";
import cat from "../../../public/cat.jpeg";

export default function Profile() {
  return (
    <>
      <article>
        <Image
          src={cat}
          alt="Profile Image"
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
        />
        <p>소윤</p>
        <p>22.11.13</p>
      </article>
    </>
  );
}
