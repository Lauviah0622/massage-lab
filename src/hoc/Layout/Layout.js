import React, { Component, Fragment } from 'react';

import classes from './Layout.module.css';


// import Toolbar from '../../components/Toolbar/Toolbar';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

class Layout extends Component {

    render() {
        return (
            <Fragment>
                <div className={classes.Layout}>

                    <AppBar position="static" color="transparent">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={() => {this.props.history.goBack()}}>
                                <ArrowBack />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.Main}>
                        {this.props.children}

                    </div>
                </div>
            </Fragment>
        )

    }
}

export default Layout;