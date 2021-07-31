import { createContext, useContext, useEffect,useState } from 'react';
import axios, { AxiosError } from 'axios';
import {ServerError,QuizData} from '../Types/quizContext';

export const QuizContext = createContext(undefined);

export function useQuiz(){
    return useContext(QuizContext)
}

export function QuizProvider({children}){

    const [quiz,setQuiz] = useState<QuizData | undefined>()
    const [error,setError] = useState<ServerError>()

    const getQuiz = async() =>{
        try{
            const response = await axios.get<QuizData>('https://cryptoquiz-backend.herokuapp.com/quiz')
            return response.data
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

    useEffect(()=>{
        (
            async function(){
                const quizData = await getQuiz()
                if("errorMessage" in quizData)
                    setError(error) 
                else{
                    setQuiz(quizData)
                }
            }
        )()
    },[error])

    return(
    <QuizContext.Provider value={{quiz}}>
        {children}
    </QuizContext.Provider>
    )
}
