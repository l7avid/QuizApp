export class Question {

    /**
     * 
     * @param {string} text This is the question's text
     * @param {string[]} choices This are the possible choices to answer
     * @param {string} answer This is the chosen answer
     */

    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice This is the chosen answer
     * @returns {boolean} return true if chosen answer is the correct one
     */

    correctAnswer(choice){
        return choice === this.answer;
    }

}