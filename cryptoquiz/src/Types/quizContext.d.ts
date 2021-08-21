export type ServerError = {
    errorMessage: string;
}

export type OptionsType = {
    option:string;
    isRight:boolean;
}

export type QuestionsType = {
    question:string;
    options: OptionsType[];
}

export type QuizType = {
    _id?:string;
    name:string;
    description:string;
    totalQuestions:number;
    questions:QuestionsType[];
}
export type QuizData = {
    success:boolean;
    quizData:QuizType[];
}