import {Question} from '../models/Question.js'
import {data} from '../data/data.js'

const newQuestions = data.map(question => new Question(question.question, questio))
