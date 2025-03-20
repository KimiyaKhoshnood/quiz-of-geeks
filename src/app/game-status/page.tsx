"use client";
import { useGameContext } from "@/context/context";
import Link from "next/link";
import React from "react";

// id : "2"
// result : ['correct', 'correct', 'correct']

const status = () => {
  const { result } = useGameContext();
console.log(result);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-96">
        <div className="text-left pb-3">
            <Link className="bg-pink-200 px-3 rounded-md" href={"/"}>
                {"<"}
            </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="bg-pink-100 rounded-b-full rounded-l-full"><div className="w-10 h-10 bg-pink-400 rounded-full"></div></div>
            <span className="bg-pink-100 h-fit px-5 rounded-r-xl">Guest 1</span>
          </div>
          <div className="flex flex-row-reverse">
            <div className="bg-pink-100 rounded-b-full rounded-r-full"><div className="w-10 h-10 bg-pink-400 rounded-full"></div></div>
            <span className="bg-pink-100 h-fit px-5 rounded-l-xl">Guest 2</span>
          </div>
        </div>
        <div className="flex justify-center gap-5 pb-1">
            <div className="w-12 py-1 rounded-md bg-pink-200">1</div>
            <div className="w-12 py-1 rounded-md bg-pink-200">0</div>
        </div>
      <div className="bg-violet-50 p-5">
        <div className="grid grid-cols-2">
            <div className="border-b border-gray-700">Game</div>
            <div className="border-b border-gray-300">Chat</div>
        </div>
        <div>
            <div className="grid grid-cols-1 gap-5 justify-center mb-4">
                {result.map((elem) => (
                <div className="bg-green-50 flex justify-center">{
                    elem.result.map((elem, i)=>{
                    return <div 
                    key={i} 
                    className={`w-4 h-4 mx-1 rounded-full ${elem == "correct"?"bg-green-600": elem=="wrong"?"bg-red-600":"bg-gray-200"}`}
                  ></div>
                })}
                </div>
              ))}
              {Array(5-result.length).fill(null).map(() => (
                <div className="bg-red-50 flex justify-center">{
                    Array(3).fill(null).map((elem, i)=>{
                    return <div 
                    key={i} 
                    className={`w-4 h-4 mx-1 rounded-full bg-gray-200`}
                  ></div>
                })}
                </div>
              ))}
            </div>
        </div>
        <div className="flex justify-center"><Link href={"/test"} className="bg-green-500 py-1 px-5 w-fit rounded-2xl block">برو به بازی</Link></div>
      </div>
      </div>
    </div>
  );
};

export default status;
