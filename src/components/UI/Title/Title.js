import React from 'react'
import { Typography } from '@material-ui/core'

export default function Title(props) {
    return (
        <Typography
            color="textPrimary"
            align="center"
            display="block"
            variant={props.level ? props.level : "h5"}
            gutterBottom
            style={{
                margin: "2rem"
            }}
        >
            {props.children}
        </Typography>
    )
}
