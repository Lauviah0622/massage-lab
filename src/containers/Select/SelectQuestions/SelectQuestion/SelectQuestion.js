import React, { Fragment, useState } from 'react';
import {
    Typography,
    Button,
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel
} from '@material-ui/core'

import ReactHtmlParser from 'react-html-parser'

import webp from '../../../../asset/img/questionImg/1.webp';
import png from '../../../../asset/img/questionImg/1.png';
import Label from './Label/Label'

const SelectQuestion = (props) => {
    const answer = props.options.map((option, i) => {
        return (<Label
            value={`${i}`}
            key={props.id + `-` + i}
            control={<Radio />}
            label={
                ReactHtmlParser(option[0])
            }
        />)
    })

    console.log(props.value)

    const [state, setState] = useState({
        value: props.value
    })

    return (
        <div
            style={{
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                // justifyContent: "space-between",
                // alignItems: "center",
                padding: "1rem 1rem 0 1rem"

            }}>
            <Typography>
                <span>{props.id}.&nbsp;&nbsp;</span>
                <span>{props.children}</span>
            </Typography>
            <div style={{
                width: "100%"

            }}>
                <picture>
                    <img src={props.img} alt="" style={{
                        width: "100%",
                        height: "auto",
                        margin: "1rem 0"
                    }} />
                </picture>
            </div>
            <div>
                <FormControl component="fieldset">
                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                    {/* <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}> */}
                    <RadioGroup aria-label="gender"
                        name="gender1"
                        // onClick={
                        //     (event) => {
                        //         setState({
                        //             value: event.target.value
                        //         })
                        //         console.log(event.currentTarget)
                        //     }
                        // }
                        onChange={props.optionChange}
                        // defaultValue={"5"}
                        // value={state.value || "0"}
                        >
                        {answer}
                        {/* <FormControlLabel value="1" control={<Radio />} label={props.options[0]} />
                        <FormControlLabel value="2" control={<Radio />} label={props.options[1]} />
                        <FormControlLabel value="3" control={<Radio />} label={props.options[2]} />
                        <FormControlLabel value="4" control={<Radio />} label={props.options[3]} /> */}
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="buttons-container">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.buttonClick}
                    fullWidth
                >下一題啦，嫩！</Button>
            </div>
        </div>

    )
}

export default SelectQuestion;