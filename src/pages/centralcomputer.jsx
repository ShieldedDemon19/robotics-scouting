import { makeStyles } from "@material-ui/core";
import { Button } from '@material-ui/core';
import HomeButton from "../components/homebutton";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main
    },

}))


const CentralComputer = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <HomeButton />
        </div>
    )
}

export default CentralComputer;