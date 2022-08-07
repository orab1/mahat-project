import { makeStyles } from '@mui/styles'
import React from 'react'
import { Container } from '../Layout/Container'

export const App = () => {
    const classes = useStyles();

    return (
        <Container className={classes.backgroundContainer}>

        </Container>
    )
}

const useStyles = makeStyles({
    backgroundContainer: {
        background: 'linear-gradient(180deg, rgba(216,249,255,1) 0%, rgba(0,212,255,1) 60%, rgba(26,173,255,1) 100%)'
    }
})