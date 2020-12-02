import React,{useState} from 'react'
import items from "./items"
import Question from "./Question"
import './Accordion.css';

export default function Accordion() {
    const [questions, setQuestions] = useState(items);
    return (
        <div className="app">
            <h1>Your Questions</h1>
            {questions.map(question => {
            return <Question key={question.id} question={question} />
            })}
        </div>
    );
}
