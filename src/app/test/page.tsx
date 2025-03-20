"use client"
import { useGameContext } from "@/context/context";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

const questions = [
  {
    question: "پایتخت ایران کدام است؟",
    options: ["مشهد", "اصفهان", "تهران", "شیراز"],
    answer: "تهران",
  },
  {
    question: "کدام سیاره به خورشید نزدیک‌تر است؟",
    options: ["زمین", "مریخ", "عطارد", "زهره"],
    answer: "عطارد",
  },
  {
    question: "حاصل 5 + 3 چند است؟",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
];

type answersState = "correct"|"wrong"|"timeout"

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(answersState|null)[]>(Array(questions.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [theAnswer, setTheAnswer] = useState<string>();
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const {result, handleResult} = useGameContext()

  console.log(result);
  

  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      if (showAnswer || showResult) {
        setTimeLeft(1)
        clearTimeout(timer)
      }
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
        handleTimeout();
    }
  }, [timeLeft, gameStarted]);

  const handleAnswer = (selectedOption: string) => {
    setTheAnswer(selectedOption)
    if (!showAnswer) {
      const isCorrect = selectedOption === questions[currentQuestion].answer;
      if (isCorrect) {
        setScore(score + 1)
      } 
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = isCorrect ? "correct" : "wrong";
      setAnswers(newAnswers);
      setShowAnswer(true);
    }
  };

  const handleTimeout = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = "timeout";
    setAnswers(newAnswers);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setTimeLeft(10);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
      handleResult({result:answers,id:"2"})
    }
  };


  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-96">
        {!gameStarted ? (
          <button 
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={() => setGameStarted(true)}
          >شروع بازی</button>
        ) : showResult ? (
          <div>
            <h2 className="text-2xl font-bold">نتیجه بازی</h2>
            <p className="text-lg">امتیاز شما: {score}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => {
                redirect("/game-status")
                // setScore(0);
                // setAnswers(Array(questions.length).fill(null));
                // setCurrentQuestion(0);
                // setShowResult(false);
                // setGameStarted(false);
                // setTimeLeft(10);
              }}
            >برو به صفحه بازی ها</button>
          </div>
        ) : (
          <div>
            <div className="flex justify-center mb-4">
              {questions.map((_, index) => (
                <div 
                  key={index} 
                  className={`w-4 h-4 mx-1 rounded-full ${answers[index] === "correct" ? "bg-green-500" : answers[index] === "wrong" ? "bg-red-500" : answers[index] === "timeout" ? "bg-yellow-500" : "bg-gray-300"}`}
                ></div>
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
            {!showAnswer && <p className="text-red-500 font-bold">زمان باقی‌مانده: {timeLeft}</p>}
            <div className="grid grid-cols-2 gap-2 mt-2">
              {questions[currentQuestion].options.map((option) => (
                <button 
                  key={option} 
                  className={`px-4 py-4 rounded-lg ${showAnswer && option === questions[currentQuestion].answer ? 'bg-green-300' : showAnswer && option != questions[currentQuestion].answer && option == theAnswer ? "bg-red-700" : 'bg-gray-200 hover:bg-gray-300'}`}
                  onClick={() => handleAnswer(option)}
                  disabled={showAnswer}
                >{option}</button>
              ))}
            </div>
            {showAnswer && (
              <button 
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={handleNextQuestion}
              >سوال بعدی</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
