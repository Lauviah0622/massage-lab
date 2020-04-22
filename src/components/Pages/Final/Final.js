import React, { Fragment } from 'react';

import Description from '../Template/Description';
import axios from '../../../axios-orders'

function Final(props) {
    axios.post('/users.json', { 
        name: props.name || "無名氏",
        score: props.score
    })
    .then(res => {
        console.log(res);
        // this.props.push('')
    })
    .catch(err => {
        console.log(err);
        // throw new Error(err)
    })



    return (
        <Fragment>
            <Description
                content={
                    <Fragment>
                        題目做完拉！
                    </Fragment>
                }
                title={
                    <Fragment>
                        恭喜！
                    </Fragment>
                }
                buttonText={
                    <Fragment>
                        看看我的分數
                    </Fragment>
                    
                }
                buttonClick={
                    () => {props.history.push("/leaderboard")}
                }
            />
        </Fragment>

    )
}

export default Final
