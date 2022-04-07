import React, {useEffect, useState} from 'react';
import {fetchDailyData, fetchData} from "../../api";
import styles from './Chart.module.css'
import { Line, Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
} from 'chart.js'
import {Grid} from "@mui/material";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
)
const MyChart = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData,setDailyData]=useState([])
    useEffect(()=>{
        fetchDailyData((isOk,data)=>{
            if(isOk) setDailyData(data)
            else console.error(data)
        })
    },[])
    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}
            />
        ) : null
    );
    const lineChart = (
        dailyData[0] ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
                    datasets: [{
                        data: dailyData.map((data) => data.confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map((data) => data.deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true,
                    },  {
                        data: dailyData.map((data) => data.recovered),
                        label: 'Recovered',
                        borderColor: 'green',
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        fill: true,
                    },
                    ],
                }}
            />
        ) : null
    );



if (dailyData.length<0){
    return 'Loading...'
}
    return (
        <Grid container justifyContent={'center'}>
            {/*<Grid style={{borderBottom:'1px solid',marginBottom:'1rem'}} md={6} xs={12} item>*/}
            {/*    /!*{lineChart}*!/*/}
            {/*</Grid>*/}
            <Grid item xs={12}>
                {barChart}
            </Grid>
        </Grid>
    );
};

export default MyChart;