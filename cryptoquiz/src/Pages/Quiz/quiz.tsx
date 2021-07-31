import { useState } from "react"
import { useParams } from "react-router"
import { useQuiz } from "../../Contexts/quizContext"
import { QuizType } from "../../Types/quizContext"
import { useNavigate } from "react-router-dom"
import { useScore } from "../../Contexts/scoreContext"

export function Quiz(){
    const {id} = useParams()
    const {quiz} = useQuiz()
    const navigate = useNavigate()
    const selectedQuiz:QuizType = quiz.quizData.find(item => item._id === id)
    const [questionNum,setQuestionNum] = useState<number>(0)
    
    const {score,setScore} = useScore()
    const totalQestions = selectedQuiz.questions.length

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
                <div>Question number:{questionNum + 1}</div>
                <div>Score: {score}</div>
                </div>
            <div className="quiz-card">
                <div className="question">{selectedQuiz.questions[questionNum].question}</div>
                <div>Options</div>
                {selectedQuiz.questions[questionNum].options.map(opt=>{
                    return <div key={opt.option} onClick={()=>answerHandler(opt.isRight)}>{opt.option}</div>
                })}
            </div>
        </div>
    )
}