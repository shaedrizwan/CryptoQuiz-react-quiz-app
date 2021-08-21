
import { useScore } from "../../Contexts/scoreContext"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import "./ResultComponent.css"

export function ResultComponent(){
    const {score}:{score:number} = useScore()
    const { width, height } = useWindowSize()
    return(
        <div className="result-container">
            {score > 30 && 
                <div>
                    <h2>Congratulations!🎉 Your score is: <span className="score">{score}</span></h2>
                    <Confetti
                    width={width}
                    height={height}
                    />
                </div>}
            {score <= 30 && <h2> Your score is <span className="score">{score}</span>.Play again to improve your score</h2>}
        </div>
    )
}