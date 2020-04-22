import React, { Fragment, Component } from 'react';
import Description from './LevelDescription/LevelDescription';
import Questions from './LevelQuestions/LevelQuestions'
import Question from './LevelQuestions/LevelQuestion/LevelQuestion'

import axios from '../../axios-orders'
import { red } from '@material-ui/core/colors';

const DEFAULT_VALUE = 2;

export default class Level extends Component {


    state = {
        current: 0,
        questionsData: [],
        content: null,
        score: 0
    }

    nextTest = () => {
        this.props.updateScore(this.state.score, "level")
        this.props.history.push({
            pathname: "/select",
            search: "?q=0"
        })

        
    }

    description = (
        <Description
            buttonClick={
                () => this.props.history.push({
                    pathname: "/level",
                    search: `?q=1`
                })
            } />
    )



    addQuestions = (qNumber) => {
        console.log("add")
        axios.get('/questions/levels.json')
            .then((res) => {
                console.log(res, this.props.answers)
                const questionsData = [...res.data].map((questionData) => {
                    questionData.req = this.props.answers[questionData.id - 1] ?
                        this.props.answers[questionData.id - 1] :
                        DEFAULT_VALUE
                    return questionData
                });
                console.log(questionsData)
                const questions = questionsData.map((data, id) => {
                    return <Question
                        key={id}
                        id={data.id}
                        question={data.ques}
                        ans={data.ans}
                        img={data.imgs}
                        defaultvalue={data.req}
                        sliderChange={this.answerChange} />
                })

                this.setState({
                    current: qNumber,
                    questionsData: questionsData,
                    score: DEFAULT_VALUE * res.data.length,
                    content: (
                        <Questions
                            buttonClick={this.nextTest}>
                            {questions}
                        </Questions>
                    )
                })


            })
            // prevState.content = (
            //     <Questions buttonClick={nextTest}>
            //         {content}
            //     </Questions>
            // )
            // prevState.current = 1;
            .catch((err) => {
                console.log(err)
            })


    }

    renderLevelConentByQuery() {
        console.log(this.props.location)
        const query = new URLSearchParams(this.props.location.search);
        let qNumber = query.get('q');

        if (this.state.current !== qNumber || !this.state.content) {

            if (qNumber === "0") {
                console.log(0)
                this.setState({
                    content: this.description,
                    current: qNumber
                })
            }
            if (qNumber === "1") {
                this.addQuestions(qNumber)
            }
        }
    }

    answerChange = (id, value) => {

        // updateLevels answers
        const prevQuesData = [...this.state.questionsData];
        prevQuesData[id - 1].req = value;

        // 
        const score = this.countScore(prevQuesData.map(queData => queData.req))
        this.setState({
            questionsData: prevQuesData,
            score: score
        })


        // updataRoot answers
        const prevRootAnswers = [...this.props.answers]
        this.state.questionsData.forEach((data) => {
            prevRootAnswers[data.id - 1] = data.req
        })
        this.props.updateAns(prevRootAnswers)
        console.log(id, value, score)
    }

    countScore = (answers) => {
        return answers.reduce((acc, val, i) => {
            return acc + (this.state.questionsData[i].ans === "true" ? val : 4 - val)
        }
        )
    }

    componentDidMount() {
        console.log("mount")
        this.renderLevelConentByQuery()
    }

    componentDidUpdate() {
        console.log("update")

        this.renderLevelConentByQuery()

    }



    render() {
        return (
            <Fragment>
                {this.state.content}
            </Fragment>
        )
    }
}

/*
function Level(props) {
    const [state, setState] = useState({
        current: 0,
        answer: [],
        questionsData: [],
        content: null
    })


    const nextTest = () => {
        props.history.push({
            pathname: "/select",
            search: "?q=0"
        })
    }

    const des = (<Description
        buttonClick={
            () => props.history.push({
                pathname: "/level",
                search: `?q=${+state.current + 1}`
            })
        } />)



    useEffect(() => {
        function addQuestions() {
            // 1. 拿題目的資料
            axios.get('/questions/levels.json')
                .then((res) => {
                    console.log(res)
                    const prevState = { ...state };
                    console.log(prevState)
                    prevState.questionsData = [...res.data];
                    let content = res.data.map((data, id) => {
                        return <Question key={id} id={data.id} question={data.ques} ans={data.ans} />
                    })
                    prevState.content = (
                        <Questions buttonClick={nextTest}>
                            {content}
                        </Questions>
                    )
                    prevState.current = 1;

                    setState(prevState)
                }
                )
                .catch((err) => {
                    console.log(err)
                })


            // 2. Set Default ans
            // setState({
            //     ans: []
            // })

            // 3. 呈現題目的資料

            // content = (
            //     <Questions buttonClick={nextTest}>
            //         <Question id="1" question="你知道?" />
            //     </Questions>
            // )
        }
        console.log(props.location)
        const query = new URLSearchParams(props.location.search);
        let qNumber = query.get('q');

        if (qNumber === "0") {
            console.log(123123)
            setState({
                content: des,
                current: qNumber
            })
        } else {
            addQuestions()
        }
    }, [props.location, des])




    return (
        <Fragment>
            {state.content}
        </Fragment>
    )
}

*/
