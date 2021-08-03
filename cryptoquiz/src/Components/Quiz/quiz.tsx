import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../../Contexts/quizContext"
import { useScore } from "../../Contexts/scoreContext"
import { QuizType } from "../../Types/quizContext"
import "./quiz.css"


export function QuizComponent({id}){
    const {quiz} = useQuiz()
    const navigate = useNavigate()
    const {score,setScore} = useScore()
    const [questionNum,setQuestionNum] = useState<number>(0)
    const selectedQuiz:QuizType = quiz.quizData.find(item => item._id === id)
    const totalQestions = selectedQuiz.questions.length

    useEffect(()=>{
        setScore(0)
    },[])

    function answerHandler(option:Boolean){
        if(option){
            setScore((score:number)=> score + 5)
        }
        if(questionNum < totalQestions-1){
            setQuestionNum((questionNum:number)=>questionNum+1)
        }else{
            navigate(`/result/${id}`)
        }
    }

    return(
        <div className="quiz-container">
            <div className="score-card">
                <div className="quiz-data">Question number:{questionNum + 1}</div>
                <div className="quiz-data">Timer</div>
                <div className="quiz-data">Score: {score}</div>
            </div>
            <div className="quiz-card">
                <div className="quiz-question">Question:</div>
                <div className="question">{selectedQuiz.questions[questionNum].question}</div>
                <div className="quiz-option-text">Options:</div>
                {selectedQuiz.questions[questionNum].options.map(opt=>{
                    return <div className="option" key={opt.option} onClick={()=>answerHandler(opt.isRight)}>{opt.option}</div>
                })}
            </div>
        </div>
    )
}