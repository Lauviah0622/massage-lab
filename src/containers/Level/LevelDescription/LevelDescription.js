import React, { Fragment } from 'react';

// import classes from './LevelDescription.module.css';
import '../../../style/Buttons.css';

import Description from '../../../components/Pages/Template/Description'

function LevelDescription(props) {

    return (
        <Fragment>
            <Description
                content={
                    <Fragment>
                        依照符合程度選擇<br />
                    1. 最不符合 - 5. 最符合
                    {/* <img src="https://i.imgur.com/uo4m2Xm.jpg" alt=""/> */}
                    </Fragment>
                }
                title={
                    <Fragment>
                        來做個程度調查吧！
                    </Fragment>
                }
                buttonText={
                    <Fragment>
                        來吧！
                    </Fragment>
                    
                }
                buttonClick={
                    props.buttonClick
                }
            />
        </Fragment>
        // <div
        //     style={{
        //         minHeight: "100%",
        //         display: "flex",
        //         flexDirection: "column",
        //         justifyContent: "space-between",
        //         alignItems: "center"
        //     }}>
        //     <div >
        //         <Title >
        //             來做個程度調查吧！</Title>
        //     </div>
        //     <div >
        //         <Typography
        //             align="center">
        //             依照符合程度選擇：<br />
        //         1. 最不符合 - 5. 最符合</Typography>
        //     </div>
        //     <div className="buttons-container">
        //         <Button
        //             variant="contained"
        //             color="primary"
        //             onClick={props.buttonClick}
        //             fullWidth

        //         >來吧！</Button>
        //     </div>
        // </div>

    )
}

export default LevelDescription
