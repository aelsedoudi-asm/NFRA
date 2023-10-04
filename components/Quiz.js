import React, { useEffect, useState, useRef } from "react";
import { quiz } from '../public/assets/quiz.js'
import styles from './Quiz.module.css';

export default function Quiz() {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })

    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
    
        if (!running) {
          return () => {};
        }
    
        console.log("Running!");
        interval = setInterval(() => {
          setCounter((counter) => counter + 1);
        }, 1000);
    
        return () => {
          console.log("Stopped!");
          clearInterval(interval);
        };
      }, [running]);
  
    const { questions } = quiz
    const { question, choices, correctAnswer } = questions[activeQuestion]  

    const onClickNext = () => {
        setRunning(true);
        setSelectedAnswerIndex(null)
        setResult((prev) =>
          selectedAnswer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
              }
            : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== questions.length - 1) {
          setActiveQuestion((prev) => prev + 1)
        } else {
          setRunning(false);
          setActiveQuestion(0)
          setShowResult(true)
        }
      }
    
      const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
          setSelectedAnswer(true)
        } else {
          setSelectedAnswer(false)
        }
      }

    return (
        <div className="quiz-container" >
            {!showResult ? (
            <div>
                <div className="question-count-container">
                    <div className="question-count-internal">
                        <div className="question-count-left">
                            <span className="active-question-no">{activeQuestion + 1}</span>
                            <span className="out-of"> out of </span>
                        </div>
                        <div className="question-count-right">
                            <span className="total-question">{questions.length}</span>
                        </div>
                    </div>
                </div>
                <h2>{question}</h2>
                <ul>
                {choices.map((answer, index) => (
                    <div className="answer-container">
                        <li
                            onClick={() => onAnswerSelected(answer, index)}
                            key={answer}
                            className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                            <p>{answer}</p>
                        </li>
                    </div>
                ))}
                </ul>
                <div className="flex-center">
                    <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                        {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
            ) : (
            <div className="result">
                <h3>Results</h3>
                <p>
                    Total Score:<span> {result.score}</span>
                </p>
                <p>
                    Correct Answers:<span> {result.correctAnswers}</span>
                </p>
                <p>
                    Wrong Answers:<span> {result.wrongAnswers}</span>
                </p>
                <p>
                    Total Time: <span>{counter}</span> Seconds
                </p>
            </div>
        )}
        </div>
    )
}

/*<p>
    Total Question: <p>{questions.length}</p>
</p>*/