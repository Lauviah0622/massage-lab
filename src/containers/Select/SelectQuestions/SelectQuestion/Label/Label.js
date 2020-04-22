import React from 'react'
import { FormControlLabel, makeStyles, Radio } from '@material-ui/core'

const useStyles = makeStyles({
    radio: {
        padding: "0px 9px"
        // backgroundColor: "#000"

    },
    label: {
        padding: "9px 0px"
    }
});

function Label(props) {
    const classes = useStyles();
    // console.log(props.label)
    return (
        <FormControlLabel className={classes.label}
            control={
                <Radio className={classes.radio}

                />}
            {...props}
        />
    )
}

export default Label
