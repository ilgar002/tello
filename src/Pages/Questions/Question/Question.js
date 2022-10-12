import React, { useState } from 'react';
import './Question.scss';
import PlusIcon from '../../../images/plus-icon.svg';
const Question = ({ question, answer }) => {
    const [answerVisibility, setAnswerVisibility] = useState(false)
    return (
        <div className='question-item'>
            <div className="question">
                {question}
                <img style={answerVisibility ? { transform: "rotate(45deg)" } : null} onClick={() => setAnswerVisibility(prev => !prev)} src={PlusIcon} alt="plus-icon" />
            </div>
            {answerVisibility && <div className="answer">
                {answer}
            </div>}
        </div>
    )
}

export default Question
// transform: "rotate(45deg)"