import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-96 flex justify-center items-center">
        <Link href={"/test"} className="block bg-emerald-500 px-10 py-2 rounded-3xl">بازی جدید</Link>
      </div>
    </div>
  );
}
