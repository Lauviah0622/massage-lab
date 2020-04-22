import React from 'react';

import Title from '../../UI/Title/Title'
import { Button, Typography } from '@material-ui/core';

import '../../../style/Buttons.css';

function Description(props) {

    return (
        <div
            style={{
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <div >
                <Title >
                    {props.title}
                </Title>
            </div>
            <div >
                <Typography
                    align="center">
                    {props.content}
                </Typography>
            </div>
            <div className="buttons-container">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.buttonClick}
                    fullWidth

                >
                    {props.buttonText}
                </Button>
            </div>
        </div>

    )
}

export default Description
