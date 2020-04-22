import React from 'react';

import Button from '@material-ui/core';

const Btn = (props) => {
    let btnProps = {}

    switch (props.type) {
        case "outlined":
            break;

        case "primary":
            
            break;
    
        default:
            break;
    }

    return (
        <Button
            onClick={props.click}

        >{props.children}</Button>
    )
}

export default Btn;