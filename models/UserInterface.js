export class UserInterface{
    constructor(){}

    /**
     * 
     * @param {string} text question to render
     */

    showQuestion(text){
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text
    }
    /**
     * 
     * @param {string[]} choices choices of the question
     */
    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = "";    
        
        for (let i=0; i< choices.length;i++){
           const button = document.createElement('button');
           button.addEventListener('mouseover', () => callback(choices[i]));
           button.innerText = choices[i];
           button.className = 'button'


           choicesContainer.append(button)
        }
    }
}
