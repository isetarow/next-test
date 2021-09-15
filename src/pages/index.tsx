import {Theme} from "@material-ui/core";
import React from "react";
import {createStyles, makeStyles} from "@material-ui/styles";
import Layout from "../components/Layout";
import LinkList from "../components/LinkList";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({}),
);

const Home = () => {
    const classes = useStyles()

    return (
        <Layout>
            <div>
                <LinkList/>
            </div>

        </Layout>
    );
};

export default Home;