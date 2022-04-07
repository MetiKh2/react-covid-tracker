import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import cx from 'classnames'
import styles from './Cards.module.css'
import CountUp from "react-countup";
const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
    if (!confirmed) return 'Loading ...'
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent={'center'}>
                <Grid style={{marginLeft:'10px !important'}} item component={Card} xs={11} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color={'gray'} gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant={"h5"}>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                             duration={2.5}
                            separator={','}/>
                        </Typography>
                        <Typography color={'gray'}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant={'body2'}>
                            Number of active cases of COVID_19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color={'gray'} gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant={"h5"}>
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator={','}/>
                        </Typography>
                        <Typography color={'gray'}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant={'body2'}>
                            Number of recoveries from COVID_19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={11} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color={'gray'} gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant={"h5"}>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator={','}/>
                        </Typography>
                        <Typography color={'gray'}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant={'body2'}>
                            Number of deaths caused of COVID_19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;