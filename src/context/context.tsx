"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { resultContext, TContextProvider } from "./contextType";

const ContextProvider = createContext({} as TContextProvider);
// {result: ["correct", "wrong", "correct"], id: "2"}
export const useGameContext = () => useContext(ContextProvider)

export default function ContextProviderLayout({
  children,
}: {
  children: React.ReactNode;
}) {  

  const [result, setResult] = useState<resultContext[]>([]);

  const handleResult = (sentRes:resultContext) => {
    let tempResult = [...result,sentRes]
    setResult(tempResult)
  }

  useEffect(()=>{
    const storedQuizResult = localStorage.getItem("quizResult")
    if (storedQuizResult) {
      setResult(JSON.parse(storedQuizResult))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("quizResult", JSON.stringify(result))
  },[result])

  return (
    <ContextProvider.Provider value={{ result, handleResult }}>
      {children}
    </ContextProvider.Provider>
  );
}
