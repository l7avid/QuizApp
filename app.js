//@ts-check
import {questions} from './data/questions.js'
import {Quiz} from './models/Quiz.js'
import {UserInterface} from './models/UserInterface.js'


function main(){
    
    const quiz = new Quiz(questions);
    const userInterface = new UserInterface()

    userInterface.showQuestion(quiz.getQuestionIndex().text)

    console.log(quiz.getQuestionIndex().answer)

    userInterface.showChoices(quiz.getQuestionIndex().choices, () => quiz.guess(quiz.getQuestionIndex().answer));
}

main();