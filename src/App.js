import React, { Component } from 'react';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import {Button, ButtonGroup} from '@material-ui/core';

import classes from './App.module.css';

import Theme from './theme';

import EnterName from './containers/EnterName/EnterName';
import Intro from './containers/Intro/Intro';
import Instruction from './containers/Instruction/Instruction'
import Level from './containers/Level/Level';
import Select from './containers/Select/Select';
import Final from './components/Pages/Final/Final';
import Leaderboard from './containers/Leaderboard/Leaderboard';

import Layout from './hoc/Layout/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';

import { Switch, Route, Redirect } from 'react-router-dom';
import axios from './axios-orders';
// testValue all 2
const TEST = [
  2, 2, 2, 2, 2,
  2, 2, 2, 2, 2,
  2, 2, 2, 2, 2,
  "2", "2", "2", "2", "2",
  "1", "1", "1"
]

export default class App extends Component {

  state = {
    answer: TEST,
    score: [0, 0],
    showBackbtn: true
  }

  updateAns = (ansArray) => {
    this.setState({
      answer: ansArray
    })
  }

  updateScore = (score, type) => {

    const prevScore = this.state.score;
    if (type === "level") {
      prevScore[0] = score
    }

    if (type === "select") {
      prevScore[1] = score
    }

    this.setState({
      score: prevScore
    })
  }


  resetAnswers = () => {
    axios.get("/questions.json")
      .then((res) => {
        console.log(res)
        this.setState({
          // answer: [...new Array(res.data.levels.length + res.data.selects.length)].map(ele => NaN)
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  setName = (name) => {
    console.log(name)
    this.setState({
      name: name
    })
  }

  componentDidMount = () => {
    this.resetAnswers()
  }

  render() {
    return (
      <div className={classes.App}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Route path="/"
            render={
              routeProps => (
                <Layout {...routeProps}>
                  <Switch>
                    <Route path="/entername" render={(routeProps) => <EnterName
                      click={this.setName}
                      {...routeProps}
                    />} />
                    <Route path="/intro" component={Intro} />
                    <Route path="/insruction" component={Instruction} />
                    <Route path="/level"
                      render={routeProps => (
                        <Level
                          updateAns={this.updateAns}
                          updateScore={this.updateScore}
                          answers={this.state.answer}
                          {...routeProps} />
                      )}
                    />
                    <Route path="/select" render={routeProps => (
                      <Select
                        updateAns={this.updateAns}
                        updateScore={this.updateScore}
                        answers={this.state.answer}
                        {...routeProps} />
                    )}
                    />
                    <Route path="/final"
                      render={(routeProps) => (
                        <Final 
                        {...routeProps}
                        name={this.state.name}
                        score={this.state.score[0] + this.state.score[1]}
                        />
                      )} />
                    <Route path="/leaderboard"
                      render={(routeProps) => (
                        <Leaderboard
                          score={this.state.score[0] + this.state.score[1]}
                          name={this.state.name}
                          {...routeProps} />
                      )}
                    />


                    <Redirect from="/" to="/intro" />

                  </Switch>
                </Layout>

              )
            }>

          </Route>

        </ThemeProvider>
      </div>
    )
  }
}
/*
function App() {
  return (
    <div className={classes.App}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Route path="/"
          render={
            routeProps => (
              <Layout {...routeProps}>
                <Switch>
                  <Route path="/entername" component={EnterName} />
                  <Route path="/intro" component={Intro} />
                  <Route path="/insruction"  component={Instruction}/>
                  <Route path="/level" component={Level}/>
                  <Route path="/select" component={Select}/>
                  <Route path="/final" component={Final}/>
                  <Route path="/leaderboard" component={Leaderboard}/>


                  <Redirect from="/" to="/intro" />

                </Switch>
              </Layout>

            )
          }>

        </Route>

      </ThemeProvider>
    </div>
  );
}

*/

// export default App;
