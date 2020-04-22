import React, { Component } from 'react'
import {
    Typography,
    Button,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@material-ui/core'
import '../../style/Buttons.css'
import TableCell from './Table/StyledTablecell'
import axiosOrders from '../../axios-orders';


function createData(order, name, score) {
    return { order, name, score };
}

const rows = [
    createData('1', 'Oo撕裂愛情海oO', 12),
    createData('2', '唸著倒才癡白', 12),
    createData('3', '過期的鮮蝦堡', 12),
    createData('4', '寂寞大甲鎮瀾宮', 12),
    createData('5', '我國中有同學', 12),
    createData('', '...', ''),
    createData('12', '李源榮', 12)
];

export default class Leaderboard extends Component {
    componentDidMount() {
        axiosOrders.get('/users.json')
            .then((res) => {
                console.log(Object.values(res.data))
                const data = Object.values(res.data);
                if (!this.state) {

                    const orderedData = data.sort((a, b) => {
                        return b.score - a.score
                    })

                    const leaderBoard = [];
                    for (let i in orderedData) {
                        if (i > 4) break
                        leaderBoard[i] = createData(`${+i + 1}`, orderedData[i].name, orderedData[i].score)
                    }
                    console.log(leaderBoard)
                    leaderBoard.push(createData("", "...", ""))

                    
                    const num = orderedData.findIndex((ele) => ele.name === this.props.name)
                    leaderBoard.push(createData(num, this.props.name || "無名氏", this.props.score))
                    this.setState({
                        leaderBoard: leaderBoard
                    })
                }

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const tabelBody = (
            this.state ?
                <TableBody>
                    {this.state.leaderBoard.map((row, i) => (
                        <TableRow key={row.name + i}>
                            <TableCell component="th"
                                scope="row">
                                {row.order}
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody> :
                null
        )
        return (
            <div
                style={{
                    marginTop: "1rem",
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <div style={{
                    marginBottom: "1rem"
                }}>
                    <div style={{
                        textAlign: "center"
                    }}>
                        <Typography
                            variant="h5"
                            display="inline"
                        >
                            {this.props.name}</Typography>
                        <Typography
                            variant="body1"
                            display="inline">
                            ，你的分數是</Typography>
                    </div>
                    <div style={{
                        textAlign: "center"
                    }}>
                        <Typography
                            variant="h3"
                            display="inline">
                            {this.props.score}</Typography>
                        <Typography
                            variant="h6"
                            display="inline">
                            /100</Typography>
                    </div>
                </div>
                <TableContainer component={Paper}>
                    <Table
                        aria-label="simple table"
                        style={{
                            width: "100%"
                        }}>
                        <TableHead>
                            <TableRow>
                                <TableCell >排名</TableCell>
                                <TableCell align="center">ID</TableCell>
                                <TableCell align="center">分數</TableCell>
                            </TableRow>
                        </TableHead>
                        {tabelBody}
                    </Table>
                </TableContainer>
                <div className="buttons-container">
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={() => { this.props.history.push('/intro') }}
                    >再測一次</Button>
                </div>
            </div>

        )
    }
}
