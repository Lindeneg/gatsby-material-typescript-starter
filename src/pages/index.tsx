import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Grid, Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import SEO from '../components/seo';
import Hero from '../components/hero';
import { FC } from '../util';

const useStyles = makeStyles((theme: Theme) => ({
    heroButtons: {
        marginTop: theme.spacing(4)
    }
}));

const IndexPage: FC = () => {
    const styles = useStyles();
    return (
        <>
            <SEO title="Home" />
            <Hero
                title="Hi people"
                description="Welcome to your new Gatsby site. Now go build something great with
          Typescript and Material-ui."
            >
                <div className={styles.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button
                                component={GatsbyLink}
                                to="/page-two/"
                                variant="contained"
                                color="primary"
                            >
                                Go to page 2
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Hero>
        </>
    );
};

export default IndexPage;
