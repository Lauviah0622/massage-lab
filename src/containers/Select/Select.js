import React, { Fragment, Component } from 'react';
import Description from './SelectDescription/SelectDescription';
import Question from './SelectQuestions/SelectQuestion/SelectQuestion';

import axios from '../../axios-orders'

const DEFAULT_VALUE = "0";

export class Select extends Component {
    state = {
        current: 0,
        id: 0,
        content: null,
        questionsData: null,
        questionsTotal: null
    }

    description = (
        <Description buttonClick={
            () => {
                this.nextPage(+this.state.current + 1)
            }
        } />
    )

    nextPage = () => {
        // calculate score and changeRootScore
        // debugger
        const selectsScore = this.state.questionsData.reduce((acc, data) => {
            // debugger
            acc += (data.options[+data.req][1] === 'true' ? 5 : 0)
            return acc
        }, 0)
        console.log(selectsScore)

        this.props.updateScore(selectsScore, "select")

        // push to nextPage
        const current = this.state.current;
        if (current >= this.state.questionsData.length && current !== 0) {
            this.props.history.push({
                pathname: "/final",
                search: ''
            })
        } else {
            this.props.history.push({
                search: `?q=${current + 1}`
            })
        }

    }


    renderQuestion = (query) => {
        axios.get('/questions/selects.json')
            .then((res) => {
                console.log(res)
                // getCurrentQuetinoData
                const question = { ...res.data[query - 1] }

                // set Question component to content , current page number, current Questino data & id
                this.setState({
                    current: query,
                    content: <Question
                        id={query}
                        options={[...question.options]}
                        optionChange={this.answerChange}
                        buttonClick={this.nextPage}
                        // sync question answer
                        value={this.props.answers[question.id - 1]}
                        img={ question.imgs ? question.imgs[0] : "" }
                    >{question.ques}

                    </Question>,
                    id: question.id
                })
            })
            .catch((err) => {
                console.log(err)
                console.log(123123)
            })
    }

    renderSelectContentByQuery() {
        // console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        let qNumber = +query.get('q');
        if (!this.state.questionsData) {

            axios.get("/questions/selects.json")
                .then((res) => {
                    this.setState({
                        questionsData: [...res.data].map((questionData) => {
                            questionData.req = this.props.answers[questionData.id - 1] ?
                                this.props.answers[questionData.id - 1] :
                                DEFAULT_VALUE;
                            return questionData
                        })
                    })
                })
                .catch((err) => {
                    console.log(err)
                }
                )
        }

        // console.log(123)
        if (this.state.current !== qNumber || !this.state.content) {

            if (qNumber === 0) {
                console.log(0)
                this.setState({
                    content: this.description,
                    current: qNumber
                })
            } else {
                this.renderQuestion(qNumber)
            }
        }
    }

    answerChange = (event, value) => {

        console.log(event, value)
        // updateRootAnswer
        const prevRootAnswers = [...this.props.answers];
        prevRootAnswers[this.state.id - 1] = value;


        this.props.updateAns(prevRootAnswers)
        // update state: answer
        const prevQuestionsData = [...this.state.questionsData];
        prevQuestionsData[this.state.current - 1].req = value;

        this.setState({
            questionsData: prevQuestionsData,
        })

        // updateRootScore
    }

    componentDidMount() {
        this.renderSelectContentByQuery()
    }

    componentDidUpdate(prevProps, prevState) {
        this.renderSelectContentByQuery()

    }



    render() {
        return (
            <Fragment>
                {this.state.content}
            </Fragment>
        )
    }
}
export default Select


// function Level(props) {
//     let content = null;
//     const query = new URLSearchParams(props.location.search);
//     let qNumber = query.get('q');
//     if (qNumber === "0") {
//         content = <Description buttonClick={
//             () => props.history.push({
//                 search: "?q=1"
//             })
//         } />
//     } else {
//         content = (
//             <Question
//                 id={qNumber}
//                 question="你知道?" 
//                 buttonClick={() => {props.history.push('/final')}}
//                 />
//         )
//     }

//     return (

//     )
// }

// export default Level
