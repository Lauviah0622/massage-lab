import React, { Component } from 'react';

import Title from '../../components/UI/Title/Title'
import { Button, Typography } from '@material-ui/core'

import classes from './Instruction.module.css';
import '../../style/Buttons.css';

class Instruction extends Component {
    render() {
        return (
            <div className={classes.Instruction}
                style={{
                    minHeight: "100 %",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>

                <div className={classes.Title}>
                    <Title >
                        測驗說明
                    </Title>
                </div>
                <div className={classes.Content}>
                    <Typography
                        align="center">
                        面對這真真假假，假假真真的世界<br />
                        <br />
                        勇者<br />
                        準備好接受考驗了嗎？
                    </Typography>
                </div>
                <div className="buttons-container">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => { this.props.history.push({
                            pathname: '/level',
                            search: '?q=0' 
                        }) }}
                        fullWidth

                    >我知道了！</Button>
                </div>
            </div>
        )
    }
}

export default Instruction;

