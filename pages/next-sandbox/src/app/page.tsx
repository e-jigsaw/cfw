import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[20000px] flex flex-col justify-center">
      <h1>Home</h1>
      <div>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
