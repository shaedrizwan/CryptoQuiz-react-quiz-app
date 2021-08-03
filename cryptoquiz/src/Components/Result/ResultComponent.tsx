
import { useScore } from "../../Contexts/scoreContext"
import "./ResultComponent.css"

export function ResultComponent(){
    const {score} = useScore()
    return(
        <div className="result-container">
            {score > 30 && <h2>Congratulations!🎉 Your score is: <span className="score">{score}</span></h2>}
            {score <= 30 && <h2> Your score is <span className="score">{score}</span>.Play again to improve your score</h2>}
        </div>
    )
}