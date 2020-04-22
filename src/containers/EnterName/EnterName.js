import React, { Component } from 'react';

import classes from './EnterName.module.css';
import '../../style/Buttons.css'

import { Button, Input } from '@material-ui/core';

import Title from '../../components/UI/Title/Title'

class intro extends Component {
    sendName = () => {
        
        this.props.history.push('/insruction')
    }

    render() {

        return (
            <div className={classes.Intro}>
                <Title>
                    輸入名稱
                </Title>
                <div className={classes.NameInput}>
                    <Input placeholder="輸入你的名子" onChange={
                        (event, value) => {
                            console.log("123")
                            this.props.click(event.target.value)
                        }
                    }/>
                </div>
                <div className='buttons-container'>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={this.sendName}
                        fullWidth>OK
                    </Button>
                </div>

            </div>
        )
    }
}

export default intro;