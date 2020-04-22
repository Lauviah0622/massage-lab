import React, { Fragment } from 'react';

import '../../../style/Buttons.css';

import Description from '../../../components/Pages/Template/Description'

function LevelDescription(props) {

    return (
        <Fragment>
            <Description
                title={
                    <Fragment>
                        接下來是...選擇題！
                    </Fragment>
                }
                content={
                    <Fragment>
                        選擇你覺得最正確的選項！
                    </Fragment>
                }
                buttonText={
                    <Fragment>
                        好啦！誰不會！
                    </Fragment>
                }
                buttonClick={
                    props.buttonClick
                }
            />
        </Fragment>

    )
}

export default LevelDescription
