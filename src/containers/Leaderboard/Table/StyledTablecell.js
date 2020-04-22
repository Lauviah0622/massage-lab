import React, {Fragment} from 'react'
import { TableCell } from '@material-ui/core'

function StyledTablecell(props) {
    return (
        <Fragment>
            <TableCell {...props} style={{
                padding: "12px"
            }}>
                {props.children}
            </TableCell>
        </Fragment>
    )
}

export default StyledTablecell
