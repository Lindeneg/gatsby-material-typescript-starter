import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Container, Theme } from '@material-ui/core';

import SEO from '../components/seo';
import { FC } from '../util';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2)
    },
    link: {
        color: theme.palette.text.secondary,
        textDecoration: 'underline'
    }
}));

const PageTwo: FC = () => {
    const styles = useStyles();
    return (
        <Container maxWidth="md" className={styles.root}>
            <SEO title="page-two" />
            <Typography variant="h2" gutterBottom component="h1">
                Hi from the second page
            </Typography>

            <Typography variant="body1">Welcome to page 2.</Typography>

            <Typography variant="body1">
                <Link component={GatsbyLink} to="/" className={styles.link}>
                    Go back to the homepage
                </Link>
            </Typography>
        </Container>
    );
};

export default PageTwo;
