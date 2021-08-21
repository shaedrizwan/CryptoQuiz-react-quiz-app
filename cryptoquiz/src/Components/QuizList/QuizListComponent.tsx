import { useQuiz } from "../../Contexts/quizContext"
import { Link } from "react-router-dom"
import "./QuizListComponent.css"
import { QuizType } from "../../Types/quizContext"


export function QuizListComponent(){

    const {quiz}:{quiz:QuizType[]} = useQuiz()

    return(
        <div className="quizlist-container">
            <div className="quizlist-title">Select the Quiz</div>
            {!quiz && <div>Loading quiz data</div>}
            <div className="quizlist-grid">
                {quiz && quiz.map(({_id,name,description}) => {
                    return (
                    <Link className="quizlist-items" to={`/rules/${_id}`} key={_id}>
                        <div className="quizlist-name">{name}</div>
                        <div className="quizlist-description">{description}</div>
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}