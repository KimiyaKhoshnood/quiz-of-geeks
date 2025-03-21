import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-96 flex flex-col gap-5 justify-center items-center">
        <Link href={"/quiz"} className="block bg-gradient-to-b from-emerald-600 to-emerald-700 !text-white px-10 py-2 rounded-3xl">بازی جدید</Link>
        
        <Link href={"/game-status"} className="flex justify-between items-center border border-gray-200 rounded-md w-full px-5 py-2">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 bg-neutral-100 border border-neutral-200 rounded-full"></div>
            <div className="flex flex-col text-left">
              <span className="font-bold">Guest 2</span>
              <span className="text-sm font-thin text-slate-700">نوبت شما</span>
            </div>
          </div>
          <div className="flex justify-center items-center bg-yellow-500 w-8 h-6 rounded-md">{">"}</div>
        </Link>
      </div>
    </div>
  );
}
