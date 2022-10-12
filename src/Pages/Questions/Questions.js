import React from 'react';
import './Questions.scss';
import Direction from '../../components/Direction/Direction';
import Question from './Question/Question';

const Questions = () => {

    return (
        <div className='questions-section'>
            <div className="container">
                <Direction
                    categorie={{ name: 'Tez-tez verilən suallar', slug: '/questions' }}
                />
                <div className="title">
                    Tez-tez verilən suallar
                </div>
                <div className="questions">
                    <Question
                        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? "}
                        answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans'}
                    />
                    <Question
                        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?"}
                        answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans'}
                    />
                    <Question
                        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? "}
                        answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans'}
                    />
                    <Question
                        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?"}
                        answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans'}
                    />
                    <Question
                        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? "}
                        answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans'}
                    />
                    <Question
                        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?"}
                        answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans'}
                    />
                    <Question
                        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas interdum dui nibh ut fermentum posuere. Mi ultrices phasellus massa lectus tellus sem? "}
                        answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans'}
                    />
                    <Question
                        question={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque amet egestas ?"}
                        answer={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed at nunc viverra fermentum diam aliquam. Placerat urna, varius vestibulum nulla. Mauris ullamcorper tincidunt amet arcu rutrum amet, amet. Nisi, id magnis tellus ut. ANkaskakjsljasljalmxlssajojsqlmawkjdixuakxkans'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Questions