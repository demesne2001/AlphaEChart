import * as echarts from 'echarts';
import { transform } from 'echarts-stat'
import ecStat from 'echarts-stat';
import React, { useEffect } from 'react'

function Statistic() {
    let lst = [
        {
            Team: '1',    //automatic descending order
            TargetParty: 40,
            VistedParty: 50,
            Prc: 10
        },
        {
            Team: '2',    //automatic descending order
            TargetParty: 40,
            VistedParty: 30,
            Prc: 87
        },
        {
            Team: '3',    //automatic descending order
            TargetParty: 70,
            VistedParty: 50,
            Prc: 57
        },
    ]

    let lls = Object.keys(lst[0])

    let color = {
        [lls[1]]: ['#0dcccc', '#FFe0b0', '#bfeec8'],
        [lls[2]]: ['#5B8FF9', '#61DDAA'],
        [lls[3]]: ['#efa18d']
    }

    console.log("cos", color)


    console.log("kkk", Object.keys(lst[0]))

    return (
        <>
            <div id='chart' style={{ height: 500, width: 500 }}></div>
        </>
    )
}

export default Statistic



