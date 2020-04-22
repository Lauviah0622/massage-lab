import React from 'react';
import '../../../style/Buttons.css';

import { Button } from '@material-ui/core';


function LevelQuestions(props) {
    return (
        <div
            style={{
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "2rem"
            }}>
            {props.children}
            <div className="buttons-container">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.buttonClick}
                    fullWidth

                >我知道了！</Button>
            </div>
        </div>
    )
}

export default LevelQuestions
