import React, { Fragment, Component } from 'react';

import { Button } from '@material-ui/core';

// import {  } from 'react-router-dom';

import classes from './Intro.module.css';
import '../../style/Buttons.css'

// Component
import Title from '../../components/UI/Title/Title'


// **Picture
// import Picture from '../../components/UI/Picture/Picture';
import introWebp from '../../asset/img/intro.webp';
import introPng from '../../asset/img/intro.png';

class Intro extends Component {


    render() {
        return (
            <Fragment>
                <div className={classes.Content}>
                    <picture>
                        <source srcSet={introWebp}/>
                        <img src={introPng} alt="introImg" className={classes.IntroImg}/>
                    </picture>
                    {/* <Picture name="intro"/> */}
                    <Title>
                        訊息檢驗室
                    </Title>
                </div>
                <div className="buttons-container">

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {this.props.history.push('/entername')}}
                        fullWidth
                    >Start</Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                    >info</Button>
                </div>
            </Fragment>

        )
    }
}

export default Intro