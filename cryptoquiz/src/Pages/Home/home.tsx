import { useQuiz } from "../../Contexts/quizContext"
import { Link } from "react-router-dom"
import "./home.css"

export function Home(){

    const {quiz} = useQuiz()
    return(
        <div className="home-container">
            <div className="hero-container">
                <div className="hero-items">Text here</div>
                <div className="hero-items">Logo here</div>
            </div>
            <div className="quiz-list-container">
                {!quiz && <div>Loading quiz data</div>}
                {quiz && quiz.quizData.map(({_id,name}) => {
                    return (
                    <Link to={`/rules/${_id}`} key={_id}>
                        <div>{name}</div>
                    </Link>
                    )
                })}
            </div>
        </div>
    )
}