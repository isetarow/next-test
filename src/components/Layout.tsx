import {AppBar, Button, IconButton, SwipeableDrawer, Theme, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {createStyles, makeStyles} from "@material-ui/styles";
import LinkList from "./LinkList";

type Props = {
    title?: String;
    children?: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            fontSize: '1rem'
        },
        container: {
            padding: '1em'
        }
    }),
);

const Layout = ({title, children}: Props) => {
    const classes = useStyles()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

    const [state, setState] = React.useState({
        isOpen: false
    });

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({...state, isOpen: open});
    };


    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
                                    onClick={toggleDrawer(true)}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {title || 'Cremo'}
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <SwipeableDrawer onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)} open={state.isOpen}
                             disableBackdropTransition={!iOS} disableDiscovery={iOS}>
                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <LinkList/>
                </div>
            </SwipeableDrawer>
            <div className={classes.container}>
                {children}
            </div>
        </>
    )
}

export default Layout