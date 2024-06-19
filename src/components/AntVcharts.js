import { AlphaDashChart } from 'alpha-echart-library/dist/cjs'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Custom.css';


function AntVcharts() {
    let chartdata = {
        "FromDate": "",
        "ToDate": "",
        "TotalRow": "",
        "strCompanyID": "",
        "strBranchID": "",
        "strItemGroupID": "",
        "strItemID": "",
        "Unit": "",
        "PrintGroupBy": "BranchName,br.BranchID"
    }
    const [getdata, setgetdata] = useState([])

    // useEffect(() => {
    //     Graph()
    // }, [])

    // const Graph = () => {
    //     axios.post("http://192.168.1.208:2024/StockToSales/GetStockToSales", chartdata, {
    //         headers: {
    //             'authorization': `Bearer ${localStorage.getItem('token')}`,
    //         }
    //     })
    //         .then((response) => {
    //             setgetdata(response.data.lstResult)
    //         })
    //         .catch(error => console.error(error))
    // }


    let chartopt = {
        charttype: 'antv-two-bar',
        series: getdata,
        height: 500,
        width: 500
    }

    let pieantv = {
        charttype: 'apex-pie-img',
        height: 500,
        width: 500,
        seriesdata: [44, 60, 80, 70],
        themeId: 1,
    }

    let musicantv = {
        charttype: 'antv-music',
        series: [
            { term: 'Zombieland', count: 9 },
            { term: 'Wieners', count: 8 },
            { term: 'Toy Story', count: 8 },
            { term: 'trashkannon', count: 7 },
            { term: 'the GROWLERS', count: 6 },
            { term: 'mudweiser', count: 6 },
            { term: 'ThunderCats', count: 4 },
            { term: 'The Taqwacores - Motion Picture', count: 4 },
            { term: 'The Shawshank Redemption', count: 2 },
            { term: 'The Olivia Experiment', count: 1 },
        ],
        height: 500,
        width: 600
    }

    let antvstackedbar = {
        charttype: 'antv-stacked-radialbar',
        series: [
            {
                year: '1991',
                value: 3,
                type: 'Lon',
            },
            {
                year: '1992',
                value: 4,
                type: 'Lon',
            },
            {
                year: '1993',
                value: 3.5,
                type: 'Lon',
            },
            {
                year: '1994',
                value: 5,
                type: 'Lon',
            },
            {
                year: '1995',
                value: 4.9,
                type: 'Lon',
            },
            {
                year: '1996',
                value: 6,
                type: 'Lon',
            },
            {
                year: '1997',
                value: 7,
                type: 'Lon',
            },
            {
                year: '1998',
                value: 9,
                type: 'Lon',
            },
            {
                year: '1999',
                value: 13,
                type: 'Lon',
            },
            {
                year: '1991',
                value: 3,
                type: 'Bor',
            },
            {
                year: '1992',
                value: 4,
                type: 'Bor',
            },
            {
                year: '1993',
                value: 3.5,
                type: 'Bor',
            },
            {
                year: '1994',
                value: 5,
                type: 'Bor',
            },
            {
                year: '1995',
                value: 4.9,
                type: 'Bor',
            },
            {
                year: '1996',
                value: 6,
                type: 'Bor',
            },
            {
                year: '1997',
                value: 7,
                type: 'Bor',
            },
            {
                year: '1998',
                value: 9,
                type: 'Bor',
            },
            {
                year: '1999',
                value: 13,
                type: 'Bor',
            },
        ],
        height: 500,
        width: 600
    }

    let antvheatmapbar = {
        themeId: 11,
        charttype: 'antv-heatmap-bar',
        height: 500,
        width: 900
    }


    let antvpolarcompare = {
        charttype: 'antv-polar-comparebar',
        height: 500,
        width: 500
    }

    let antvbubble = {
        height: 500,
        width: 580,
        charttype: 'antv-bubble',
        series: 40
    }


    let twobarchart = {
        themeId:11,
        height: '80%',
        width: '100%',
        charttype: 'twochart-compare-bar',
        chartId: 'twochart-compare-bar',
        dataset: [
            ['product', '2012', '2013', '2014', '2015'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4],
            ['Cocoa', 24.1, 67.2, 79.5, 86.4]
        ],
    }


    let cylinderchart = {
        themeId:11,
        height: '80%',
        width: '100%',
        charttype: 'cylinder',
        chartId: 'cylinder',
        Yaxis: [41, 72, 64, 55, 58, 55, 54, 33],
        Xaxis: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        divname: 'col-sm-4',
        idlst: [41, 72, 64, 55, 58, 55, 54, 33],
        idkey: 'strbranch'

    }
    

    let antvcylinder = {
        height: 500,
        width: 500,
        charttype: 'antv-cylinder',
        series: [
            { type: '1-3 seconds', value: 0.16 },
            { type: '4-10 seconds', value: 0.125 },
            { type: '11-30 seconds', value: 0.24 },
            { type: '31-60 seconds', value: 0.19 },
            { type: '1-3 minutes', value: 0.22 },
            { type: '3-10 minutes', value: 0.05 },
            { type: '10-30 minutes', value: 0.01 },
            { type: '30+minutes', value: 0.015 },
        ]
    }

    let antvscatter = {
        height: 500,
        width: 500,
        charttype: 'antv-scatter',
    }

    let antvsinglebar = {
        height: 500,
        width: 500,
        charttype: 'antv-singlebar',
        series: [
            {
                title: 'Product',
                ranges: 100,
                measures: 80,
                targets: 85,
            },
        ]
    }

    let stateb = {
        'strbranch': '',
        'target': ''
    }

    let antvmultibarsingle = {
        height: 450,
        width: 500,
        charttype: 'antv-singlebar-multivalue',
        series: [
            {
                Team: 'monday',    
                TargetParty: 40,
                VistedParty: 50,
                Prc: 10
            },
            {
                Team: 'tuesday',   
                TargetParty: 40,
                VistedParty: 30,
                Prc: 87
            },
            {
                Team: 'wednesday', 
                TargetParty: 70,
                VistedParty: 50,
                Prc: 57
            },
            {
                Team: 'thursday',
                TargetParty: 23,
                VistedParty: 53,
                Prc: 10
            },
            {
                Team: 'friday',    
                TargetParty: 34,
                VistedParty: 13,
                Prc: 87
            },
            {
                Team: 'saturday',  
                TargetParty: 53,
                VistedParty: 34,
                Prc: 57
            },
        ],
        idlst: [12, 43, 54, 47,39,74],
        idkey: 'strbranch'
    }

    console.log("stateb", stateb)


    return (
        <>
            <div className="row">
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-bubble</h4>
                        <div className='antv' >
                            <AlphaDashChart obj={antvbubble} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-cylinder</h4>
                        <div className='antv' >
                            <AlphaDashChart obj={antvcylinder} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-music</h4>
                        <div className='antv' >
                            <AlphaDashChart obj={musicantv} />
                        </div>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-stacked-radialbar</h4>
                        {/* <div className='antv' > */}
                        <AlphaDashChart obj={antvstackedbar} />
                        {/* </div> */}
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="donut">
                        <h4>antv-heatmap-bar</h4>
                        {/* <div className='antv' > */}
                        <AlphaDashChart obj={antvheatmapbar} />
                        {/* </div> */}
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-polar-comparebar</h4>
                        <AlphaDashChart obj={antvpolarcompare} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-scatter</h4>
                        <AlphaDashChart obj={antvscatter} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-singlebar</h4>
                        <AlphaDashChart obj={antvsinglebar} />
                    </div>
                </div>
            </div>


            {/* <div className="row">
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>antv-singlebar-multivalue</h4>
                        <AlphaDashChart obj={antvmultibarsingle} state={stateb}/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>twochart-compare-bar</h4>
                        <AlphaDashChart obj={twobarchart} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="donut">
                        <h4>cylinder</h4>
                        <AlphaDashChart obj={cylinderchart} state={stateb}/>
                    </div>
                </div>
                
            </div> */}
        </>
    )
}

export default AntVcharts
