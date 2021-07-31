import { useParams } from "react-router"
import { Link } from "react-router-dom"

export function Rules(){

    const {id} = useParams()
    return(
        <div className="rules-container">
            <div className="rules-div"></div>
            <div className="leaderboard-div"></div>
            <Link to={`/quiz/${id}`}>Start Quiz</Link>
        </div>
    )
}