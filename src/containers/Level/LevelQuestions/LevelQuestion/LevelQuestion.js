import React from 'react';
import { Typography, Slider, withStyles } from '@material-ui/core';

import classes from './LevelQeustion.module.css';

const StyledSlider = withStyles({
    root: {
        width: "85%"
    },
    markLabel: {
        fontSize: ".7rem"
    }
})(Slider)



function LevelQuestion(props) {

    const marks = [
        {
            value: 0,
            label: "完全不符合"
        },
        {
            value: 1,
            label: '不符合',
        },
        {
            value: 2,
            label: '普通',
        },
        {
            value: 3,
            label: '符合',
        },
        {
            value: 4,
            label: '非常符合',
        },
    ]

    console.log(props.img)

    const img = props.img ?
        (<img src={props.img} alt="" style={{
            width: "100%",
            height: "auto",
            margin: "1rem 0"
        }}/>) :
        null
    return (
        <div style={{
            width: "80%",
            marginBottom: "1.5rem",
            textAlign: "center"
        }}>
            <Typography
                display="block"
                variant="body2"
                align="left"
                gutterBottom

            >
                <span
                    className={classes.questionOrder}>{props.id}
                </span>
                <span>{props.question}
                </span>
            </Typography>
            {img}
            <StyledSlider
                defaultValue={props.defaultvalue}
                step={1}
                min={0}
                max={4}
                marks={marks}
                fontSize="small"
                onChange={(event, value) => { props.sliderChange(props.id, value) }}
            />
            <hr style={{
                width: "100%",
                margin: "1.5rem auto 0 auto",
                border: "0.5px solid #cfcfcf",
            }} />
        </div>
    )
}

export default LevelQuestion
