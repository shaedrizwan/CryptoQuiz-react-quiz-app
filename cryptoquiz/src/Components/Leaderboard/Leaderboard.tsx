import { useEffect, useState } from "react"
import "./Leaderboard.css"
import axios, { AxiosError } from "axios"
import { Id } from "../../Types/quiz"
import { LeaderBoardResponseType, LeaderboardType } from "../../Types/leaderboard"
import { ServerError } from "../../Types/quizContext"

export async function GetLeaderboard(id){
    try{
        const response = await axios.post<LeaderBoardResponseType>('https://cryptoquiz-backend.herokuapp.com/quiz/leaderboard',{
            id:id
        })
        return response.data.leaderboard
    }catch(error){
        if(axios.isAxiosError(error)){
            const serverError = (error as AxiosError<ServerError>)
            if(serverError && serverError.response){
                return serverError.response.data
            }
        }else{
            return {errorMessage:"Something went wrong"}
        }
    }
}

export function Leaderboard({id}:Id){
    const [leaderboard,setLeaderboard] = useState<LeaderboardType[]>()
    const [error,setError] = useState<ServerError>()
    console.log(leaderboard)

    useEffect(()=>{
        (async function(){
            const leaderboard = await GetLeaderboard(id)
            if("errorMessage" in leaderboard){
                setError(leaderboard)
            }else{
                setLeaderboard(leaderboard)
            }
        })()
    },[])

    return(
        <div className="leaderboard-container">
            {!leaderboard && <div>Leaderboard loading...!!</div>}
            {leaderboard &&
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.filter((user,idx)=>idx < 5).map(({_id,user,score},idx)=>{
                        return(
                            <tr key={_id}>
                                <td>{idx+1}</td>
                                <td>{user.firstname}</td>
                                <td>{score}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>}
        </div>
    )
}