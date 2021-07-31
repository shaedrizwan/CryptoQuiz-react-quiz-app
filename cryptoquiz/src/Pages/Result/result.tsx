import { useScore } from "../../Contexts/scoreContext"
import { useState,useEffect } from "react"

export function Result(){
    const {score,setScore} = useScore()
    const [finalScore,setFinalScore] = useState<number>(0)

    useEffect(()=>{
        setFinalScore(score)
        setScore(0)
    },[])
    return(
        <>
        <div>This is Result page</div>
        <h2>Your score is: {finalScore}</h2>
        </>
    )
}